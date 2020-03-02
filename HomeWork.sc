import scala.collection.mutable.ListBuffer
import scala.util.{Success, Try}
val firstList : List[Int] = List(1,2,3,4,5,6,7)

//1) Найти K-тый элемент в списке
var coun : Int = 0
def getK(list: List[Int], k: Int) : Any = {
  if ( coun == k )  list.head
  else if (list == Nil) return "err"
  else  {
    coun = coun + 1
    getK(list.tail, k)
  }
}
getK(firstList,5)

// 2) Получить число элементов списка без
// использования size и length
def count(list: List[Int]) : Int =  {
  if (list == Nil) 0
  else 1 + count(list.tail)
}
count(firstList)

//3) Написать функцию проверки последовательности
//на палиндромность (ex: 1 2 3 2 1)

val seq = Seq(1,3,5, 6,3,1)

def isPalindrome (seq: Seq[Any]) : Any = {
  println(seq.last, seq.head)
  if (seq.last != seq.head) false
  else if (seq.tail == Seq(seq.head)||seq.tail == List()) true
  else {
    println(seq.tail.dropRight(1))
    isPalindrome(seq.tail.dropRight(1))
  }
}


isPalindrome(seq)
Seq(5).tail

//Seq(5, 5).tail == Seq(Seq(5, 5).head)
//4) Написать функцию distinct по удалению дублей из
//последовательности. Set и аналоги использовать нельзя



def uniqueSeq(array:Seq[Any]) = {
  val buf = ListBuffer.empty[Any]
  array.foreach((x => {
    if (!buf.contains(x))
      buf += x
  }))
  buf
}

uniqueSeq(Seq(1, 2, 3, 4, 4))

//5) Написать distinctPack дающий результат вида (уникальная последовательность, список с вложенными списками из дубликатов)
//(ex: input - [1, 3, 3, 2, 1] -> ([[1, 1], [3, 3], [2]]))

def dublicateArray(array:Seq[Any])={
  val bufDim = ListBuffer.empty[ListBuffer[Any]]
  for (index <- 0 until array.length)
  {
    if (bufDim.flatten.contains(array(index)))
      bufDim
        .foreach(seq => if (seq.contains(array(index)))
          seq += array(index))
    else
      bufDim += ListBuffer(array(index))

  }
  bufDim
}

dublicateArray(Seq(1, 2, 3, 4, 4))

//6) Написать собственную реализацию slice(Option[StartPos], Option[EndPos])
 def slice (list: List[Int], begin : Int, end : Int) : Any = {
   if( begin < 0 || end <= begin || list.isEmpty)
     Nil

   list.drop(begin).dropRight(list.length - end)
 }

slice(List(1,2,3,4,5,6,7), 1, 5)


// 7) Написать функцию создающую из заданой последовательности (любого типа)
// все возможные группы по N и только уникальные. (1, 2) и (2, 1) считаются одинаковыми комбинациями.
def pairs( seq : ListBuffer[Int], seqHelp: ListBuffer[Int], k: Int, r: Int, j: Int):Any = {
  if (k == r)
    print(seqHelp)
  else
    for (i <- j until seq.length)
    {
      seqHelp(k) = seq(i);
      pairs(seq, seqHelp, k + 1, r, i)
    }
}
var k = 0
pairs(ListBuffer(1, 2, 3, 4, 5), ListBuffer(1, 1), 0, 2, 0)

//8) Написать функцию выводящую только простые числа из заданого диапазона(Range)
def simpleValue(range: Range) ={
  val buf = range.map(x=>true).toBuffer
  print(buf)
  for (i <-2 until buf.length)
    if (buf(i) == true)
      for (j <- i + 1 until buf.length)
        if(j % i == 0)
          buf(j) = false
  print(range)
  buf
}

val eratosphen = simpleValue(Range(0, 100))
Range(0, 100).filter(x=>eratosphen(x))








