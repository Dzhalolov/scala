package ru.philit.bigdata.vsu.spark.exercise
import org.apache.log4j.{Level, Logger}
import org.apache.spark.sql
import org.apache.spark.sql.SparkSession


object Lab7_SQLTables extends App {
  Logger.getLogger("org").setLevel(Level.ERROR)
  Logger.getLogger("netty").setLevel(Level.ERROR)
  val spark = SparkSession.builder()
    .appName("spark-example")
    .master("local[*]")
    .getOrCreate()
//  val df = spark.read.format("csv").option("header", "true").load("csvfile.csv")
//
  Parameters.initTables(spark)
  println("Point")
  val customer = spark.table("customer")
  val product = spark.sql("FROM product")
  val order = spark.sql("SELECT DISTINCT customer_id, order_date FROM order WHERE status = 'delivered'")
  print(order.show())
  spark.stop()
  /*
   * Lab7 - пример считывания таблиц
   * Создать объект SparkSession
   * Загрузить таблицу используя метод table/sql
   *
   * 1. Создать неявный объект SparkSession, используя метод builder()
   * 2. Установить master в local[*]
   * 3. Установить имя приложения spark-sql-labs
   * 4. Создать неявный объект класса Parameters, используя метод Parameters.instance
   * 5. Вызвать метод initTables класса Parameters
   * 6. Загрузить таблицу customer, используя метод table()
   * 7. Загрузить таблицу product, используя метод sql() и в качестве аргумента запрос: "FROM product"
   * 8. Загрузить таблицу order, используя метод sql и в качестве аргумента запрос:
   * "SELECT DISTINCT customer_id, order_date FROM order WHERE status = 'delivered'"
   * 9. Вывести таблицы используя метод show()
   * в качестве аргумента можно указать лимит в кол-во строк и тип выводимой строки полный/урезанный
   * */

}
