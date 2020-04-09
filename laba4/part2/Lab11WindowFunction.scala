package ru.philit.bigdata.vsu.spark.exercise

import org.apache.log4j.{Level, Logger}
import org.apache.spark.sql.expressions.{Window, WindowSpec}
import org.apache.spark.sql.{Dataset, Row, SparkSession}
import org.apache.spark.sql.functions._

object Lab11WindowFunction extends App{
  /*
   * Lab11 - пример использования оконных выражений
   * Необходимо определить самый популярный продукт у клиента
   * Итоговое множество содержит поля: customer.name, product.name
   *
   * 1. Создать неявный объект SparkSession, используя метод builder()
   * 2. Установить master в local[*]
   * 3. Установить имя приложения spark-sql-labs
   * 4. Создать неявный объект класса Parameters, используя метод Parameters.instance
   * 5. Вызвать метод initTables класса Parameters
   * 6. Загрузить таблицу product в DataFrame
   * 7. Выбрать поля: id далее product_id, name далее product_name
   * 8. Загрузить таблицу customer в DataFrame
   * 9. Выбрать поля: id далее customer_id, name далее customer_name
   * 10. Выполнить перекрестное соединение DataFrame из п.7 и п.9
   * 11. Загрузить таблицу order в DataFrame
   * 12. Выполнить группировку по полю customer_id, product_id
   * 13. Расчитать сумму по полю number_of_product, далее sum_num_of_product
   * 14. Добавить import org.apache.spark.sql.expressions.Window
   * 15. Написать оконную функцию с партицирование по полю customer_id
   * и сортирвокой в порядке убывания по полю sum_num_of_product
   * 16. Использую аналитичексую функцию row_number и оконное выражение из п.15
   * добавить поле rn
   * 17. Выбрать только те строки, в которых значение поля rn = 1
   * 18. Выполнить внутреннее соединение DataFrame из п.17 и п.10 по полям:
   * customer_id, product_id
   * 19. Выбрать поля customer_name, product_name
   * 20. Вывести результат используя метод show() или записать DataFrame в файл
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

  
  val windowName: WindowSpec = Window.partitionBy('customer_name).orderBy('sum_number_of_product.desc)

  cross_order.
    groupBy('customer_name, 'product_name)
    .agg(sum("number_of_product") as "sum_number_of_product")
    .withColumn("rn", row_number() over windowName).filter(col("rn") === 1).select('customer_name, 'product_name).show
  //    .groupBy('customer_name, 'product_name)
  //    .agg(
  //      max("number_of_product"),
  //      sum("amount_price"),
  //      min("amount_price"),
  //      avg("amount_price")
  //    )

  //  coalesce(1).rdd.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab9")

}
