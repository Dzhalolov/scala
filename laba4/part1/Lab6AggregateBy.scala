package ru.philit.bigdata.vsu.spark.exercise

import org.apache.hadoop.conf.Configuration
import org.apache.hadoop.fs.{FileSystem, Path}
import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}
import ru.philit.bigdata.vsu.spark.exercise.domain.{Customer, Order}

case class BuyingStats(
                        customerId: Int,
                        uniqProductsCount: Int,
                        maxNumberOfProducts: Int,
                        minNumberOfProducts: Int,
                        sumNumberOfProdducts: Int
                      ) {
  override def toString: String = List(
    customerId,
    uniqProductsCount,
    maxNumberOfProducts,
    minNumberOfProducts,
    sumNumberOfProdducts
  ).mkString("\t")
}

trait Lab6AggregateBy extends Serializable {

  case class CustomerBuying(productId: Int, numberOfProducts: Int)

  case class AccumulateBuying(uniqProducts: Set[Int], uniqNumOfProducts: List[Int], sumNumOfProduct: Int)

  def getProductsStatistics(orders: RDD[Order],
                            filterOrders: Order => Boolean,
                            numPartitions: Int
                           ): RDD[BuyingStats] = {
    orders.filter(filterOrders)
      .map {
        case Order(customerID, _, productID, numberOfProduct, _, _) =>
          (customerID, CustomerBuying(productID, numberOfProduct))
      }
      .aggregateByKey(AccumulateBuying(Set.empty[Int], List.empty[Int], 0), numPartitions)(aggregateBuyings, mergeBuyings)
      .map {
        case (customerId, AccumulateBuying(uniqProducts, uniqNumOfProducts, sumNumOfProduct)) =>
          BuyingStats(
            customerId = customerId,
            uniqProductsCount = uniqProducts.size,
            maxNumberOfProducts = uniqNumOfProducts.max,
            minNumberOfProducts = uniqNumOfProducts.min,
            sumNumberOfProdducts = sumNumOfProduct
          )
      }
  }

  def getProductsStatistics(orders: RDD[Order],
                            filterOrders: Order => Boolean = filterOrders
                           ): RDD[BuyingStats] =
    getProductsStatistics(orders, filterOrders, 1)

  private val aggregateBuyings = (acc: AccumulateBuying, value: CustomerBuying) =>
    acc.copy(
      uniqProducts = acc.uniqProducts + value.productId,
      uniqNumOfProducts = value.numberOfProducts :: acc.uniqNumOfProducts,
      sumNumOfProduct = acc.sumNumOfProduct + value.numberOfProducts
    )
  private val mergeBuyings = (acc1: AccumulateBuying, acc2: AccumulateBuying) =>
    AccumulateBuying(
      uniqNumOfProducts = acc1.uniqNumOfProducts ::: acc2.uniqNumOfProducts,
      uniqProducts = acc1.uniqProducts ++ acc2.uniqProducts,
      sumNumOfProduct = acc1.sumNumOfProduct + acc2.sumNumOfProduct
    )


  private def filterOrders(order: Order): Boolean = order.status.equals("delivered")
}

object Lab6AggregateBy extends Lab6AggregateBy

object Main extends App {
  /*
   * Lab6 - пример использования aggregateByKey
   * Определить кол-во уникальных заказов, максимальный объем заказа,
   * минимальный объем заказа, общий объем заказа за всё время
   * Итоговое множество содержит поля: order.customerID, count(distinct order.productID),
   * max(order.numberOfProduct), min(order.numberOfProduct), sum(order.numberOfProduct)
   *
   * 1. Создать экземпляр класса SparkConf
   * 2. Установить мастера на local[*] и установить имя приложения
   * 3. Создать экземпляр класса SparkContext, используя объект SparkConf
   * 4. Загрузить в RDD файл src/test/resources/input/order
   * 5. Используя класс [[ru.phil_it.bigdata.entity.Order]], распарсить строки в RDD
   * 6. Выбрать только те транзакции у которых статус delivered
   * 7. Выбрать ключ (customerID), значение (productID, numberOfProducts)
   * 8. Создать кейс класс Result(uniqProducts: Set[Int], uniqNumOfProducts: Seq[Int], sumNumOfProduct: Int)
   * 9. Создать аккумулятор с начальным значением
   * 10. Создать ананимную функцию для заполнения аккумульятора
   * 11. Создать ананимную функцию для слияния аккумуляторов
   * 12. Выбрать id заказчика, размер коллекции uniqProducts,
   *   максимальное и минимальное значение из uniqNumOfProducts и sumNumOfProduct
   * 13. Вывести результат или записать в директорию src/test/resources/output/lab6
   * */
  val hdpConf = new Configuration()
  val hdfs = FileSystem.get(hdpConf)

  val sparkConf = new SparkConf()
    .setMaster("local[*]")
    .setAppName("aggregate-app")
  implicit val sc: SparkContext = new SparkContext(sparkConf)
  val outputPath = "./aggregated_buying"

  if(hdfs.exists(new Path(outputPath)))
    hdfs.delete(new Path(outputPath), true)

  Lab6AggregateBy.getProductsStatistics(
    sc.textFile(Parameters.path_order).map(Order(_))
  ).saveAsTextFile(outputPath)


}

