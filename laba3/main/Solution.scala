package ru.philit.bigdata.vsu.other.airlines

import org.scalatest._
import org.junit.Assert
import org.junit.Assert._
import org.junit.Test
import org.scalatest.funspec.AnyFunSpec

import scala.io.Source
import scala.util.Try

case class Route(
                  airlineCode: String,
                  airlineId: Int,
                  sourceAirportCode: String,
                  sourceAirportId: Int,
                  targetAirportCode: String,
                  targetAirportId: Int
                )


case class Airline(
                    id: Int,
                    name: String,
                    iata: String,
                    icao: String,
                    country: String
                  )


case class Airport(
                    id: Int,
                    name: String,
                    city: String,
                    country: String,
                    iata: String,
                    icao: String
                  )


object Airport {
  def load(path: String): Seq[Airport] =
    Source.fromFile(path).getLines()
      .flatMap(_.replace("\"", "").replace("\'", "").split(",") match {
        case Array(id, name, city, country, iata, icao, _*) =>
          Try(Airport(id.toInt, name, city, country, iata, icao)).toOption
        case _ => None
      }).toSeq
}

object Airline {
  def load(path: String): Seq[Airline] =
    Source.fromFile(path).getLines()
      .flatMap(_.replace("\"", "").replace("\'", "").split(",") match {
        case Array(id, name, _, iata, icao, _, country, active) if active.equals("Y") =>
          Try(Airline(id.toInt, name, iata, icao, country)).toOption
        case _ => None
      }).toSeq
}


object Route {
  def load(path: String): Seq[Route] =
    Source.fromFile(path).getLines()
      .flatMap(_.replace("\"", "").replace("\'", "").split(",") match {
        case Array(airCode, airId, sourceAirport, sourceAirportId, targetAirport, targetAirportId, _*) =>
          Try(Route(airCode, airId.toInt, sourceAirport, sourceAirportId.toInt, targetAirport, targetAirportId.toInt))
            .toOption
        case _ => None
      }).toSeq
}


class DataAggregate(val lines: Seq[Airline], routs: Seq[Route], ports: Seq[Airport]) {

  //  val lines = Airline.load("./datasource/avia/airlines.dat.txt")
  //  val routs = Route.load("./datasource/avia/routes.dat.txt")
  //  val ports = Airport.load("./datasource/avia/airports.dat.txt")
  val key = "SU"

  def join(table1: Seq[Route], pattern: Airline): Seq[Route] = {
    table1.flatMap(table => table match {
      case Route(aircode, pattern.id, _, _, _, _) => Some(table)
      case _ => None
    })
  }

  def particular_airline = (key: String) => lines.filter(line => line.name == key || line.iata == key || line.icao == key)

  val port = Map(ports map { a => a.id -> a }: _*)
  //  print(port)
  val airline_1 = particular_airline(key)(0)
  val routes_partic = join(routs, airline_1).filter(rout => port(rout.targetAirportId).country != airline_1.country).map(each => (each, port(each.targetAirportId).country))
  //  println(routes_partic.mkString("\n"))
  val routes_map = routes_partic.groupBy {
    case (Route(_, _, _, _, _, id), country) => country
  }
  //  print("new!!!!!!!!!!!!")
  val result = routes_map.keys.map(key1 => (key1, routes_map(key1).length, routes_map(key1).map(resik => port(resik._1.targetAirportId).name).toSet))
  print(result.mkString("\n"))
  particular_airline(key)(0).country
}

object Solution extends AnyFunSpec with App {

  var data = new DataAggregate(
    Airline.load("./datasource/avia/airlines.dat.txt"),
    Route.load("./datasource/avia/routes.dat.txt"),
    Airport.load("./datasource/avia/airports.dat.txt")
  )


}

//Понять как сделать ключом страну, очевидно что как-то через port(targetAirportId)