package ru.philit.bigdata.vsu.spark.exercise

import java.lang.Iterable
import java.sql.Date

import org.apache.log4j.{Level, Logger}
import org.apache.spark.{SparkConf, SparkContext}
import org.apache.spark.rdd.RDD
import ru.philit.bigdata.vsu.spark.exercise.domain.{Customer, Order, Product}

import scala.collection.Iterable

object Lab3Join extends App {
  /*
   * Lab3 - пример использования join
   * Расчитать кто и сколько сделал заказов, за какие даты, на какую сумму.
   * Итоговое множество содержит поля: customer.name, order.order.orderDate, sum(order.numberOfProduct * product.price)
   *
   * 1. Создать экземпляр класса SparkConf
   * 2. Установить мастера на local[*] и установить имя приложения
   * 3. Создать экземпляр класса SparkContext, используя объект SparkConf
   * 4. Загрузить в RDD файл src/test/resources/input/order
   * 5. Используя класс [[ru.phil_it.bigdata.entity.Order]], распарсить строки RDD
   * 6. Выбрать ключ поле (customerID), в значение (orderDate, numberOfProduct, productID)
   * 7. Загрузить в RDD файл src/test/resources/input/customer
   * 8. Используя класс [[ru.phil_it.bigdata.entity.Customer]], распарсить строки RDD
   * 9. Выбрать ключ поле (id), в значение (name)
   * 10. Выполнить внутреннее соединение RDD из п.6 и п.9
   * 11. Выбрать ключ (productID), в значение (customer.name, orderDate,  numberOfProduct)
   * 12. Загрузить в RDD файл src/test/resources/input/product
   * 13. Используя класс [[ru.phil_it.bigdata.entity.Product]], распарсить строки RDD
   * 14. Выбрать ключ (id), значение (price)
   * 15. Выполнить внутреннее соединение с RDD из п.11 и п.14
   * 16. Выбрать ключ (customer.name, order.orderDate), значение (order.numberOfProduct * product.price)
   * 17. Расчитать сумму в значении по ключу
   * 18. Вывести результат или записать в директорию src/test/resources/output/lab3
   * */
  Logger.getLogger("org").setLevel(Level.ERROR)
  Logger.getLogger("netty").setLevel(Level.ERROR)
  val sparkConf = new SparkConf()
    .setAppName("spark-example")
    .setMaster("local[*]")
  val sc = new SparkContext(sparkConf)

  def aggregateSum(acc: (String, Date, Double), record: (String, Date, Double)): (Double) = acc match {
    case (name, date, price) => price + record._3
  }

  val products = sc.textFile(Parameters.path_product)
    .map(str => Product(str))
    .flatMap {
      case Product(id, name, price, numberOfProducts) => Some((id, price))
    }


  val orders = sc.textFile(Parameters.path_order)
    .map(str => Order(str))
    .flatMap {
      case Order(customerID, orderID, productID, numberOfProduct, orderDate, status) => Some((productID, (customerID, numberOfProduct, orderDate)))
    }

  val customer = sc.textFile(Parameters.path_customer)
    .map(str => Customer(str))
    .flatMap {
      case Customer(id, name, _, _, _) => Some((id, (name)))
    }

  val result = products.join(orders) //.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab3")
    .map {
    case (id, (price, (customerID, numberOfProduct, orderDate))) => (customerID, (price, (numberOfProduct, orderDate)))
  }.join(customer)
    .map {
      case (customerID, ((price, (numberOfProduct, orderDate)), name)) => (name, orderDate, numberOfProduct * price) //(2,((54990.0,(50,2017-10-16)),Philip))
    }
  val routes_map = result.groupBy {
    case (name, orderData, numberOfProduct) => (name, orderData)
  }.map {
    case (id, lst) => (id, lst.map{
      case (name, date, price) => price // можно сделать как-то не криво!!!!!
    }.sum)

  }.map {
    case ((name, date), amountMoney) => s"(Name Of Customer: $name, Date Of Order: $date) - unique key; Amount Money: $amountMoney"
  }.saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab3")
  sc.stop()

}
