package ru.main

import org.apache.log4j.{Level, Logger}
import org.apache.spark.sql.SparkSession

object Solution extends App {
  System.setProperty("hadoop.home.dir", "C:\\hadoop")
  Logger.getLogger("org").setLevel(Level.ERROR)
  Logger.getLogger("netty").setLevel(Level.ERROR)

  val sparkSession = SparkSession
    .builder()
    .appName("laba2")
    .master("local[*]")
    .getOrCreate()
  val path = "D:\\new_downloads\\alik\\src\\main\\resources\\input\\dzhalolov.txt"
  val processedText = processData.readText(path, sparkSession)
  processedText.foreach(println)
  val rdd = processData.readText(path, sparkSession).flatMap(x => x.split(" "))
  val count = processData.counter("tender", rdd)
  println()
  println("-" * 100)
  println(s"number of word occurrence 'tender': $count")

  val wordNumber = processData.findWord("tender", rdd)
  print("word in set ")
  wordNumber.foreach(println)
  val array = sparkSession.sparkContext.parallelize(Seq(1, 2, 3, 4, 5))
  val sumOfArray = array.map(elem => elem + 1).reduce(_ + _)
  println(s"sum of array + array len of array: $sumOfArray")
  val array_associate = Map("a" -> 1, "b" -> 2, "c" -> 3)
  val sumOfMap = array_associate.map{
    case (key, value) => (key, value + 1)
  }.valuesIterator.reduce(_+_)
  print(s"sum of value in Map + Map len: $sumOfMap")
}

//  sparkSession.sparkContext.
