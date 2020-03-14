package ru.philit.bigdata.vsu.scalaLang.funcStrucut

import sun.invoke.empty.Empty

sealed trait Tree[+A] {
  def size: Int

  //Максимальное расстояние от корня до листа
  def depth: Int

  def map[B](f: A => B): Tree[B]

  def filter(f: A => Boolean): Tree[A]

  def fold[B](map: A => B)(reduce: (B, B) => B): B
}

case class Leaf[A](value: A) extends Tree[A] {
  override def size: Int = value match {
    case None => 0
    case _ => 1
  }

  override def depth: Int = 0

  override def map[B](f: A => B): Tree[B] = Leaf(f(value))

  override def filter(f: A => Boolean): Tree[A] = f(value) match {
    case true => this
    case _ => Empty[A]
  }

  override def fold[B](map: A => B)(reduce: (B, B) => B): B = map(value)
}

case class Branch[A](left: Tree[A], right: Tree[A]) extends Tree[A] {
  override def size: Int = left.size + right.size

  override def depth: Int = if (right.depth > left.depth) right.depth + 1 else left.depth + 1

  override def map[B](f: A => B): Tree[B] = Branch(left.map(f), right.map(f))

  override def filter(f: A => Boolean): Tree[A] = if ( right.filter(f) == Empty[A] && left.filter(f) == Empty[A]) Empty[A] else Branch(left.filter(f), right.filter(f))

  override def fold[B](map: A => B)(reduce: (B, B) => B): B = reduce(left.fold(map)(reduce), right.fold(map)(reduce))
}

object Tree {

}
