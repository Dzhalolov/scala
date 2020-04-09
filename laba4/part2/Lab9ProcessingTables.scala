package ru.philit.bigdata.vsu.spark.exercise

import org.apache.log4j.{Level, Logger}
import org.apache.spark.broadcast.Broadcast
import org.apache.spark.sql.execution.joins.BroadcastNestedLoopJoinExec
import org.apache.spark.sql.{Dataset, Row, SparkSession}
import org.apache.spark.sql.functions.when
import org.glassfish.jersey.server.Broadcaster

object Lab9ProcessingTables extends App {
  /*
   * Lab9 - пример использования filter, join, crossJoin, broadcast, orderBy
   * Вывести информацию о клиенте email, название продукта
   * и кол-во доставленного товара за первую половину 2018 года
   * Итоговое множество содержит поля: customer.email, product.name, order.order_date, order.number_of_product
   *
   * 1. Создать неявный объект SparkSession, используя метод builder()
   * 2. Установить master в local[*]
   * 3. Установить имя приложения spark-sql-labs
   * 4. Создать неявный объект класса Parameters, используя метод Parameters.instance
   * 5. Вызвать метод initTables класса Parameters
   * 6. Загрузить в DataFrame таблицу order
   * 7. Загрузить в DataFrame таблицу customer, выбрать поля:
   *    id далее customer_id, email
   * 8. Загрузить в DataFrame таблицу product, выбрать поля:
   *    id далее product_id, name далее product_name
   * 9. Выполнить перекрестное соединение DataFrame из п.7 и п.8
   * 10. Выбрать транзакции co статусом "delivered" и датой заказа с 2018-01-01 по 2018-06-30
   * 11. Выполнить внутреннее соединение по полю customer_id, product_id использую broadcast
   * 12. Выбрать поля email, product_name, order_date, number_of_products
   * 13. Выполнить сортировку по полю email, order_date
   * 14. Вывести результат используя метод show() или записать DataFrame в файл
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
  val order = spark.sql("SELECT * FROM order")
  val customer = spark.sql("SELECT id, email FROM customer")
  val product = spark.sql("SELECT id, name as product_name FROM product")
  order.show()
  customer.show()
  val cross_order: Dataset[Row] = order.join(customer, customer("id") === order("customer_id"), "inner")
    .join(product, product("id") === order("product_id"), "inner")
    .filter('STATUS === "delivered" and 'ORDER_DATE > "2018-01-01" and 'ORDER_DATE < "2018-06-30")
    .select('email, 'product_name, 'order_date, 'number_of_product)
    .orderBy('order_date)

  cross_order.coalesce(1).rdd.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab9")
  //  order.rdd.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab9")
  //  customer.show()
  spark.sql("FROM customer").show()
  //  product.select(
  //    'name, 'price,
  //    when('name.contains("iPhone"), "iPhone")
  //      .when('name.contains("iPad"), "iPad")
  //      .when('name.contains("MacBook") or 'name.contains("MakBook"), "macBook")
  //      .when('name.contains("Pod"), "headphones") as "type"
  //  ).withColumn("new_price", when($"price" > 50000.0, $"price" * 0.9).otherwise($"price"))
  //    //.withColumn("TYPE", when($"id" == 1 or $"id" == 2, "phone")).otherwise(0) //withColumn("price", col("price"))

  spark.stop()
}
