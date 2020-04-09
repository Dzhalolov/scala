package ru.philit.bigdata.vsu.spark.exercise

import org.apache.log4j.{Level, Logger}
import org.apache.spark.sql.functions._
import org.apache.spark.sql.{DataFrame, Dataset, Row, SparkSession}

object Lab10ProcessingTables extends App {
  /*
  * Lab10 - пример использования join, broadcast, groupBy, agg
  * Необходимо расчитать для каждого клиента,
  * стоимость общей закупки каждого товара,
  * максимальный объем заказанного товара,
  * минимальную стоимость заказа,
  * среднюю стоимость заказа
  * за первую половину 2018 года, заказ должен быть доставлен
  * Итоговое множество содержит поля: customer.name, product.name, sum(order.number_of_product * price),
  * max(order.number_of_product), min(order.number_of_product * price), avg(order.number_of_product * price)
  *
  * 1. Создать неявный объект SparkSession, используя метод builder()
  * 2. Установить master в local[*]
  * 3. Установить имя приложения spark-sql-labs
  * 4. Создать неявный объект класса Parameters, используя метод Parameters.instance
  * 5. Вызвать метод initTables класса Parameters
  * 6. Загрузить в DataFrame таблицу order
  * 7. Выбрать транзакции со статусом delivered и датой заказа с 2018-01-01 по 2018-06-30
  * 8. Загрузить в DataFrame таблицу customer, выбрать поля:
  *    id далее customer_id, email
  * 9. Загрузить в DataFrame таблицу product, выбрать поля:
  *    id далее product_id, name далее product_name
  * 10. Выполнить перекрестное соединение DataFrame из п.8 и п.9
  * 11. Выполнить внутреннее соединение DataFrame из п.10 и п.7
  * 12. Выполнить группировку по полям customer_name, product_name
  * 13. Расчитать сумму по стоимости заказа, максимальный объем заказ, минимальную сумму заказа, среднюю сумму заказа.
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
  val customer = spark.sql("SELECT id, name as customer_name FROM customer")
  val product = spark.sql("SELECT id, name as product_name, price FROM product")
  //  order.show()
  //  customer.show()
  val cross_order: Dataset[Row] = order.join(customer, customer("id") === order("customer_id"), "inner")
    .join(product, product("id") === order("product_id"), "inner")
    .filter('STATUS === "delivered" and 'ORDER_DATE > "2018-01-01" and 'ORDER_DATE < "2018-06-30")
    .select('customer_name, 'product_name, 'order_date, 'number_of_product, 'price)
    .withColumn("amount_price", $"number_of_product" * $"price")
    .orderBy('order_date)
  cross_order
    .groupBy('customer_name, 'product_name)
    .agg(
      max("number_of_product"),
      sum("amount_price"),
      min("amount_price"),
      avg("amount_price")
    )

    .show() //  coalesce(1).rdd.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab9")

  spark.stop()
}
