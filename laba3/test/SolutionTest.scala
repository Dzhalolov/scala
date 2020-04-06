package ru.philit.bigdata.vsu.other.airlines

import org.scalatest.flatspec.AnyFlatSpec
import ru.philit.bigdata.vsu.other.airlines.Solution._

class SolutionTest extends AnyFlatSpec {
  val data = new DataAggregate(
    Airline.load("./datasource/avia/airlines.dat.txt"),
    Route.load("./datasource/avia/routes.dat.txt"),
    Airport.load("./datasource/avia/airports.dat.txt")
  )
  "particular_airline" should "have size 1" in {
    assert(data.particular_airline("SU").length == 1)
  }
  val target = data.particular_airline("SU")(0)
  "result of our processing" should "doesn't contain home country" in {
    assert(data.result.count(res => res._1 == target.country) == 0)
  }
}
