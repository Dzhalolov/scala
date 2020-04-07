package ru.philit.bigdata.vsu.spark.exercise

import org.apache.log4j.{Level, Logger}
import org.apache.spark.{SparkConf, SparkContext}
import org.apache.spark.rdd.RDD
import ru.philit.bigdata.vsu.spark.exercise.domain.{Order, Product}

object Lab2Join extends App{
  /*
 * Lab2 - пример использования leftOuterJoin
 * Определить продукты, которые ни разу не были заказаны
 * Итоговое множество содержит поле product.name
 *
 * 1. Создать экземпляр класса SparkConf
 * 2. Установить мастера на local[*] и установить имя приложения
 * 3. Создать экземпляр класса SparkContext, используя объект SparkConf
 * 4. Загрузить в RDD файл src/test/resources/input/product
 * 5. Используя класс [[ru.phil_it.bigdata.entity.Product]], распарсить строки в RDD
 * 6. Выбрать ключ поле id, в значение name RDD[(Int, String)]
 * 7. Загрузить в RDD файд src/test/resources/input/order
 * 8. Используя класс [[ru.phil_it.bigdata.entity.Order]], распарсить строки в RDD
 * 9. Выбрать ключ поле productID, в значение numberOfProduct RDD[(Int, Int)]
 * 10. Посчитать кол-во проданных продуктов
 * 11. Выполнить левое соединение двух RDD
 * 12. Выполнить фильтрацию и оставить только те строки где значение numberOfProducts 0 или None
 * 13. Вывести результат или записать в директорию src/test/resources/output/lab2
 * */

  Logger.getLogger("org").setLevel(Level.ERROR)
  Logger.getLogger("netty").setLevel(Level.ERROR)
  val sparkConf = new SparkConf()
    .setAppName("spark-example")
    .setMaster("local[*]")
  val sc = new SparkContext(sparkConf)


  val products: RDD[(Int, (String, Double, Int))] = sc.textFile(Parameters.path_product)
    .map(str => Product(str))
    .flatMap {
      case Product(id, name, price, numberOfProducts) => Some((id, (name, price, numberOfProducts)))
    }


  val orders = sc.textFile(Parameters.path_order)
    .map(str => Order(str))
    .flatMap {
      case Order(customerID, orderID, productID, numberOfProduct, orderDate, status) => Some((productID, (customerID, orderID, numberOfProduct, orderDate, status)))
    }


  products.leftOuterJoin(orders).filter(order => order._2._2 == None).saveAsTextFile(Parameters.EXAMPLE_OUTPUT_PATH + "lab2")


  sc.stop()
}
