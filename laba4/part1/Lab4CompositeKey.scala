package ru.philit.bigdata.vsu.spark.exercise

import java.sql.Date

import org.apache.log4j.{Level, Logger}
import org.apache.spark.{SparkConf, SparkContext}
import ru.philit.bigdata.vsu.spark.exercise.domain.{Customer, Order, Product}

object Lab4CompositeKey extends App {
  /*
 * Lab4 - пример использования cartesian и join по составному ключу
 * Расчитать кто и на какую сумму купил определенного товара за всё время
 * Итоговое множество содержит поля: customer.name, product.name, order.numberOfProduct * product.price
 */



  Logger.getLogger("org").setLevel(Level.ERROR)
  Logger.getLogger("netty").setLevel(Level.ERROR)
  val sparkConf = new SparkConf()
    .setAppName("spark-example")
    .setMaster("local[*]")
  val sc = new SparkContext(sparkConf)

  val products = sc.textFile(Parameters.path_product)
    .map(str => Product(str))
    .flatMap {
      case Product(id, name, price, numberOfProducts) => Some((id, (name, price)))
    }

  val orders = sc.textFile(Parameters.path_order)
    .map(str => Order(str))
    .flatMap {
      case Order(customerID, orderID, productID, numberOfProduct, orderDate, status) => Some((productID, (customerID, numberOfProduct)))
    }

  val customer = sc.textFile(Parameters.path_customer)
    .map(str => Customer(str))
    .flatMap {
      case Customer(id, name, _, _, _) => Some((id, name))
    }


  val result = products.join(orders) //.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab3")
    .map {
    case (id, ((nameOfProduct, price), (customerID, numberOfProduct))) => (customerID, (nameOfProduct, price, numberOfProduct))
  }.join(customer)
    .map {
      case (customerID, ((nameOfProduct, price, numberOfProduct), name)) => (name, nameOfProduct, numberOfProduct * price) //(2,((54990.0,(50,2017-10-16)),Philip))
    }.groupBy {
    case (name, nameOfProduct, _) => (name, nameOfProduct)
  }.map {
    case (id, lst) => (id, lst.map {
      case (name, date, price) => price // можно сделать как-то не криво!!!!!
    }.sum)
  }.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab4")

  //  val routes_map = result.groupBy {
  //    case (name, orderData, numberOfProduct) => (name, orderData)
  //  }.map {
  //    case (id, lst) => (id, lst.map{
  //      case (name, date, price) => price // можно сделать как-то не криво!!!!!
  //    }.sum)
  //
  //  }.map {
  //    case ((name, date), amountMoney) => s"(Name Of Customer: $name, Date Of Order: $date) - unique key; Amount Money: $amountMoney"
  //  }.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab4")
  sc.stop()
}
