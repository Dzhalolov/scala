package ru.philit.bigdata.vsu

import io.circe._
import io.circe.parser._
import io.circe.parser
import io.circe.generic.semiauto.deriveDecoder

import java.io._
import scala.io.Source

case class Staff(crs: Json, type1: String, features1: List[Json])
//case class Testikus(srs: Json, srs1: Json)
object parsingJson {

  val file = "./datasource/whatever_new.csv"
  val writer = new BufferedWriter(new FileWriter(file))
  def main(args: Array[String]): Unit = {
    val input = Source.fromFile("./datasource/milano-grid.geojson")
      .getLines
      .mkString
      .replace("type", "type1")
      .replace("features", "features1")


    implicit val staffDecoder = deriveDecoder[Staff]
    val decodeResult = parser.decode[Staff](input)
    import scala.util.matching.Regex

    val numberPattern: Regex = "[0-9]+.[0-9]+".r



    val new_file: List[String] = decodeResult match {
      case Right(testikus: Staff) => testikus.features1.map(
        jsonstring => numberPattern.findAllIn(jsonstring.\\("geometry")(0).\\("coordinates")(0).toString()).mkString(",")
      )
    }


//    print(new_file.length)
//    print(numberPattern.findAllIn(new_file(0)).mkString(","))
//    print(Range(0, 10000).length)
    val rang = Range(1, 10001).zip(new_file).map{
      case (numbe, str) => writer.write(s"${numbe}" + "," + str + "\n")
    }
    writer.close()



  }
}
