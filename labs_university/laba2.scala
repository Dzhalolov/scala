package ru.main

import org.apache.spark.rdd.RDD
import org.apache.spark.sql.SparkSession

object processData {
  // split text on words and remove empty strings
  def readText(path: String, spark: SparkSession) =
    spark.sparkContext.textFile(path).map(
      line => line.trim.replaceAll(" +", " ") // it's not needed in this case, because I don't have more than one space between words.
    ).filter(line => line != "")

  
  def counter(word: String, rdd: RDD[String]) = {
    val countOption = rdd.countByValue().get(word)
    countOption.map(_.toString).getOrElse("word not found")
  }

  def findWord(word: String, rdd: RDD[String]) = {
    var x = 0
    val wordWithoutDublicates = scala.collection.mutable.Set[String]()
    val result = rdd.map(
      word => if (!wordWithoutDublicates.contains(word)) {
        x += 1
        wordWithoutDublicates.add(word)
        (x, word)
      }
      else
        (None, None)
    ).filter(x => x._2.toString.contains(word))
    result
  }
}