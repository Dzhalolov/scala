import scala.collection.mutable.ListBuffer
import scala.math.sqrt
val array = Seq(1, 2, 3, 4, 5)
def search(array:Seq[Int], index:Int) ={
  print(array(index))
}
search(array, 1)

def counter(array:Seq[Any]) ={
  var count = 0
  array.foreach(_=> count+=1)
  count
}
counter(array)
array(0)
array.length

def polym(array: Seq[Any]):Boolean ={
  val last = array.length - 1
  for(i <- 0 until array.length/2){
      if (array(0+i) != array(last - i))
         return false
    }
  true
}
array.map(x=>x+1).sum - array.sum
print(polym(Seq(1, 2, 1)))

array.equals()
val buf = ListBuffer.empty[Any]
buf.contains(1)


def uniqueSeq(array:Seq[Any]) ={
  val buf = ListBuffer.empty[Any]
  array.foreach((x =>{
    if (!buf.contains(x))
      buf += x
  }))
  buf

//  for (index <-0 to array.length)
//    {
//      if array
//    }
}
uniqueSeq(Seq(1, 2, 3, 4, 4))



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



def simpleValue(range: Range) ={
  val buf = range.map(x=>true).toBuffer
  print(buf)
  for (i <-2 until sqrt(buf.length).toInt)
    if (buf(i) == true)
      for (j <- i + 1 until buf.length)
        if(j % i == 0)
            buf(j) = false
  print(range)
  buf
}

val eratosphen = simpleValue(Range(0, 100))
Range(0, 100).filter(x=>eratosphen(x))
