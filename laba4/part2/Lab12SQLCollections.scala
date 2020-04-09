package ru.philit.bigdata.vsu.spark.exercise

import org.apache.log4j.{Level, Logger}
import org.apache.spark.sql.{Dataset, Row, SparkSession}
import org.apache.log4j.{Level, Logger}
import org.apache.spark.sql.expressions.{Window, WindowSpec}
import org.apache.spark.sql.{Dataset, Row, SparkSession}
import org.apache.spark.sql.functions._
import org.apache.spark.sql.types.{ArrayType, DateType, StringType, StructType}

object Lab12SQLCollections extends App {
  /*
  * Lab12 - пример использования explode и struct
  * Необходимо вывести историю выполненных заказов для клиента c именем John
  * Итоговое множество содержит поля: customer.name, effective_date, expiration_date, status
  *
  * 1. Создать неявный объект SparkSession, используя метод builder()
  * 2. Установить master в local[*]
  * 3. Установить имя приложения spark-sql-labs
  * 4. Создать неявный объект класса Parameters, используя метод Parameters.instance
  * 5. Вызвать метод initTables класса Parameters
  * 6. Загрузить таблицу customer в DataFrame
  * 7. Выбрать записи с именем John
  * 8. Загрузить таблицу order в DataFrame
  * 9. Выполнить внутреннее соединение DataFrame из п.7 и п.8
  * по полю customer.id и order.customer_id
  * 10. Выбрать заказы со статусом delivered
  * 11. Загрузить таблицу order-info в DataFrame
  * 12. Выбрать полу id далее id, создать массив со структурой effective_date, expiration_date, status
  * 12.1 Первый элемент массива заполняется следующими значениями: departure_date, transfer_date, lit("transfer")
  * 12.2 Второй элемент массива заполняется следующими значениями: transfer_date, delivery_date, lit("delivered")
  * 13. Выполнить внутренне соединение DataFrame из п.10 и п.12
  * 14. Полученный результат преобразовать в плоскую таблицу используя функцию explode для поля с массивом
  * 15. Вывести результат используя метод show() или записать DataFrame в файл
  * */
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
  val order = spark.sql("SELECT * FROM order").filter(col("status") === "delivered")
  val customer = spark.sql("SELECT * FROM customer WHERE name == 'John'")
  val order_info = spark.sql("FROM order_info")
  customer.show()
  order.show()
  order_info.show

  def flatten = (samples: Seq[Row]) =>
    samples.map {
      case Row(value) => value
    }

  val array: Seq[Row] = Seq(
    Row("effective_date",
      flatten(order_info.select("departure_date").collect().toList),
      flatten(order_info.select("transfer_date").collect().toList)
    ),
    Row("expiration_date",

      flatten(order_info.select("transfer_date").collect().toList),
      flatten(order_info.select("delivery_date").collect().toList)
    )
  )

  val arraySchema = new StructType()
    .add("name", StringType)
    .add("start_date", ArrayType(DateType))
    .add("end_date", ArrayType(DateType))


  val df = spark.createDataFrame(spark.sparkContext.parallelize(array),arraySchema)
  df.printSchema()
  df.select($"name",explode($"start_date"))
    .show(false)


}
