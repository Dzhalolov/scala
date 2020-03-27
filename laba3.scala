package ru.philit.bigdata.vsu

import scala.io.Source
import scala.util.Try

package object scalaLang {
  val DELIMITER = ","
  def loadCounties(path: String, delimiter: String = DELIMITER): Map[String, String] =
    Source.fromFile(path).getLines()
      .flatMap(_.replace("\"", "").split(delimiter) match {
        case Array(name, iso, _) => Some((iso, name))
        case _ => None
      }).toMap

  def leftJoin[A <: Product, B <: Product](dataset: Seq[A], another: Seq[B], exp: A => B => Boolean): Seq[(A, Option[B])] =
    dataset.map { record =>
      (record, another.find(exp(record)))
    }


  case class Route(
                  airlineCode: String,
                  airlineId: Int,
                  sourceAirportCode: String,
                  sourceAirportId: Int,
                  targetAirportCode: String,
                  targetAirportId: Int
                  )
  object Route {
    def load(path: String, delimiter: String = DELIMITER): Seq[Route] =
      Source.fromFile(path).getLines()
        .flatMap(_.replace("\"", "").split(delimiter) match {
          case Array(airCode, airId, sourceAirport, sourceAirportId, targetAirport, targetAirportId, _*) =>
            Try(Route(airCode, airId.toInt, sourceAirport, sourceAirportId.toInt, targetAirport, targetAirportId.toInt))
              .toOption
          case _ => None
        }).toSeq
  }

  case class Airline(
                      id: Int,
                      name: String,
                      iata: String,
                      icao: String,
                      country: String
                    )

  object Airline {
    def load(path: String, delimiter: String = DELIMITER): Seq[Airline] =
      Source.fromFile(path).getLines()
        .flatMap(_.replace("\"", "").split(delimiter) match {
          case Array(id, name, _, iata, icao, _, country, active) if active.equals("Y") =>
            Try(Airline(id.toInt, name, iata, icao, country)).toOption
          case _ => None
        }).toSeq
  }

  case class Airport(
                      id: Int,
                      name: String,
                      city: String,
                      country: String,
                      iata: String,
                      icao: String
                    )

  object Airport {
    def load(path: String, delimiter: String = DELIMITER): Seq[Airport] =
      Source.fromFile(path).getLines()
        .flatMap(_.replace("\"", "").split(delimiter) match {
          case Array(id, name, city, country, iata, icao, _*) =>
            Try(Airport(id.toInt, name, city, country, iata, icao)).toOption
          case _ => None
        }).toSeq
  }

  case class InputSet(
                       routes: Seq[Route],
                       airlines: Seq[Airline],
                       airports: Seq[Airport],
                       countries: Map[String, String]
                     )

  case class CountryStat(country: String, visitsCount: Int, airports: Set[Airport]) {
    override def toString: String = s"$country: $visitsCount ; ${airports.map(_.name).mkString(", ")}"
  }

  class AirlineService(val inputSet: InputSet) {
    case class AirlineRouteAirports(airline: Airline, route: Route, airports: List[Airport])

    private val (routes, airlines, airports, countries) = InputSet.unapply(inputSet)
      .getOrElse(throw new Exception("Unexpected inputset"))

    def getAirlineCountriesStats(airline: String): Seq[CountryStat] =
      aggregate(joinSources(airline))

    def aggregate(joined: Seq[AirlineRouteAirports]): Seq[CountryStat] =
      joined.flatMap { r =>
        r.airports.map(air => (air.country, air))
      }.groupBy {
        case (country, _) => country
      }.map { case(country, group) =>
        group.map(_._2).foldLeft(CountryStat(country, 0, Set.empty[Airport]))(
          (stat, airport) => stat.copy(
            visitsCount = stat.visitsCount + 1,
            airports = stat.airports + airport
          )
        )
      }.toSeq



    def joinSources(airline: String, foreignOnly: Boolean = true): Seq[AirlineRouteAirports] = {
      val targetAirlines = airlines.filter(a => a.name.equals(airline) || a.iata.equals(airline) || a.icao.equals(airline))

      val airlineRoutes = leftJoin[Route, Airline](
        routes, targetAirlines,
        (r: Route) => (a: Airline) => r.airlineId == a.id || r.airlineCode.equals(a.iata) || r.airlineCode.equals(a.icao)
      ).flatMap {
        case (r, airOp) => airOp.map(a => (a, r))
      }

      val withSourceAirport = leftJoin[(Airline, Route), Airport](
        airlineRoutes, airports,
        (aR: (Airline, Route)) => (a: Airport) => aR match {
          case (_, r) => r.sourceAirportCode.equals(a.icao) || r.sourceAirportCode.equals(a.iata) || r.sourceAirportId == a.id
        }
      ).flatMap {
        case ((airl, route), sourceAirportOp) => sourceAirportOp.map(a => AirlineRouteAirports(airl, route, List(a)))
      }

      leftJoin[AirlineRouteAirports, Airport](
        withSourceAirport, airports,
        (joined: AirlineRouteAirports) => (a: Airport) =>
          joined.route.targetAirportCode.equals(a.icao) || joined.route.targetAirportCode.equals(a.iata) || joined.route.targetAirportId == a.id
      ).flatMap {
        case (a@AirlineRouteAirports(airl, _, list), targetAirportOp) =>
          targetAirportOp.map(air =>
            a.copy(airports = (air :: list)
              .filter(a => !a.country.equalsIgnoreCase(airl.country) && foreignOnly))
          )
      }
    }
  }

  object AirlineService extends App{
    def apply(inputSet: InputSet): AirlineService = new AirlineService(inputSet)

    def countryStat(airline: String) = {

      val airlines = Airline.load("datasource\\avia\\airlines.dat.txt")
      val routes = Route.load("datasource\\avia\\routes.dat.txt")
      val airports = Airport.load("datasource\\avia\\airports.dat.txt")

      val the_airline = airlines.find(x => x.name.equals(airline)).get
      val the_routs = routes.filter(x => the_airline.id == x.airlineId)
      val the_airports = airports.filter(x => the_routs.filter(y => y.sourceAirportId==x.id || y.targetAirportId == x.id).length > 0)

      (the_airline.country, (the_routs.length, the_airports))
  }
  }


}
