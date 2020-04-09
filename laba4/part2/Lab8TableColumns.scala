package ru.philit.bigdata.vsu.spark.exercise

import org.apache.log4j.{Level, Logger}
import org.apache.spark.sql.SparkSession
import org.apache.spark.sql.functions._
import org.apache.spark.sql.Column

object Lab8TableColumns extends App {
  /*
   * Lab8 - пример обработки полей при помощи select/withColumns
   * Вывести название всех устройств,
   * если цена больее 50000 вычесть 10% от стоимости назвать поле new_price,
   * добавить поле type, используя функцию getTypeDevice
   * Итоговое множество содержит поля: product.name, new_price, type
   *
   * 1. Создать неявный объект SparkSession, используя метод builder()
   * 2. Установить master в local[*]
   * 3. Установить имя приложения spark-sql-labs
   * 4. Создать неявный объект класса Parameters, используя метод Parameters.instance
   * 5. Вызвать метод initTables класса Parameters
   * 6. Загрузить таблицу product в DataFrame
   * 7. В import udf добавить так же when и col из того же пакета
   * 8. В методе select() выбрать поле name, используя функцию when().otherwise()
   * расчитать новую стоимость девайса
   * 9. Используя метод withColumn и функцию getTypeDevice, добавить к выборке поле type
   * 10. Вывести результат используя метод show() или записать DataFrame в файл
   *
   * P.S.: для более удобного обращения к полям можно использовать символ ' вместо метода col()
   * Для этого необходимо выполнить import spark.implicits._
   * где spark экземпляр класса SparkSession
   * Пример: spark.table("t1").select(col("name"), 'email)
   *
   * */
  //  def getTypeDevice = (strings: Column) => strings.map{
  //    string => string match {
  //    case string if string.contains("iPhone") => "phone"
  //    case string if string.contains("iPad") => "iPad"
  //    case string if string.contains("MacBook") => "MacBook"
  //    case string if string.contains("iPhone") => "iPhone"
  //    case _ => "none"
  //  }}
  //  print(getTypeDevice(Seq("jsdaj iPhone sdas", "s")))
  Logger.getLogger("org").setLevel(Level.ERROR)
  Logger.getLogger("netty").setLevel(Level.ERROR)
  val spark = SparkSession.builder()
    .appName("spark-example")
    .master("local[*]")
    .getOrCreate()

  import spark.implicits._
  //  val df = spark.read.format("csv").option("header", "true").load("csvfile.csv")
  //
  Parameters.initTables(spark)
  println("Point")
  val product = spark.sql("FROM product")
  product.select(
    'name, 'price,
    when('name.contains("iPhone"), "iPhone")
      .when('name.contains("iPad"), "iPad")
      .when('name.contains("MacBook") or 'name.contains("MakBook"), "macBook")
      .when('name.contains("Pod"), "headphones") as "type"
  ).withColumn("new_price", when($"price" > 50000.0, $"price" * 0.9).otherwise($"price"))
  //.withColumn("TYPE", when($"id" == 1 or $"id" == 2, "phone")).otherwise(0) //withColumn("price", col("price"))
  .show()
  spark.stop()
}
