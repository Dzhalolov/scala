package ru.philit.bigdata.vsu.spark.exercise

import org.apache.log4j.{Level, Logger}
import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}
import ru.philit.bigdata.vsu.spark.exercise.domain.Order

object Lab1ReduceByKey extends App {
  /*
   * Lab1 - пример использование reduceByKey
   * Посчитать общий объем всех заказов и какое кол-во раз был выполнен заказ,
   * относительно каждого клиента.
   * Итоговое множество содержит поля: order.customerID, sum(order.numberOfProduct), count(1)
   *
   * 1. Создать экземпляр класса SparkConf
   * 2. Установить мастера на local[*] и установить имя приложения
   * 3. Создать экземпляр класса SparkContext, используя объект SparkConf
   * 4. Загрузить в RDD файл src/test/resources/input/order
   * 6. Выбрать строки в которых поле статус заказа delivered
   * 7. Выбрать ключ (customerID), значение (numberOfProduct, 1)
   * 8. Написать функцию reduce для расчёта
   * 9. Применит к RDD из п.6 метод reduceByKey c функцией из п.7
   * 10. Вывести или записать результат в директорию src/test/resources/output/lab1
   * */
  Logger.getLogger("org").setLevel(Level.ERROR)
  Logger.getLogger("netty").setLevel(Level.ERROR)

  val sparkConf = new SparkConf()
    .setAppName("spark-example")
    .setMaster("local[*]")
  val sc = new SparkContext(sparkConf)

  def aggregateOrders(acc: (Int, Int), record: (Int, Int)): (Int, Int) = acc match {
    case (numOfProducts, count) => (numOfProducts + record._1, count + 1)
  }

  val orders: RDD[Order] = sc.textFile(Parameters.path_order)
    .map(str => Order(str))
    .filter(_.status.equals("delivered"))

  orders.map {
    case Order(customerID, _, _, numberOfProduct, _, _) => (customerID, (numberOfProduct, 1))
  }.reduceByKey(aggregateOrders).map {
    case (custId, (numOfProducts, count)) => s"$custId - number Of Products: $numOfProducts; count: $count"
  }.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab1")


  sc.stop()
}
