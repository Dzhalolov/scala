package ru.philit.bigdata.vsu.spark.exercise

import org.apache.log4j.{Level, Logger}
import org.apache.spark.{SparkConf, SparkContext}
import ru.philit.bigdata.vsu.spark.exercise.domain.{Customer, Order, Product}

object Lab5GroupBy extends App {
  /*
  * Lab5 - пример использования groupByKey
  * Определить средний объем заказа, за всё время, для каждого заказчика
  * Итоговое множество содержит поля: order.customerID, sum(order.numberOfProduct),
  * count(order.numberOfProduct), sum(order.numberOfProduct) / count(order.numberOfProduct)
  */
  Logger.getLogger("org").setLevel(Level.ERROR)
  Logger.getLogger("netty").setLevel(Level.ERROR)
  val sparkConf = new SparkConf()
    .setAppName("spark-example")
    .setMaster("local[*]")
  val sc = new SparkContext(sparkConf)


  val orders = sc.textFile(Parameters.path_order)
    .map(str => Order(str))
    .map {
      case Order(customerID, orderID, productID, numberOfProduct, orderDate, status) => (customerID, numberOfProduct)
    }

  orders.groupByKey(1).map {
    case (customerID, lst) => s"(Id Of Customer: $customerID, Sum Of All Orders: ${lst.sum}, Number of Orders: ${lst.size}, AVG Of Orders: ${lst.sum / lst.size}"
  }.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab5")
  sc.stop()

}
