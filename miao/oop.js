/*
将MyMap，MySet，Vector，Complex，Stack，Queue，LinkedList
全部使用class语法重写
对Complex实现四个静态方法以计算加减乘除
LinkedList实现前后增删以及at以及length

/miao/oop.js

class语法
必须用new 调用
原型上的方法全部默认不可枚举
更紧凑
*/
class MyMap {
  constructor() {
    this._keys = []
    this._vals = []
  }
  set(key, val){
    var keyIdx = this._keys.indexOf(key)
    if(keyIdx >= 0){
      this._vals[keyIdx] = val
    }
    else{
      this._keys.push(key)
      this._vals.push(val)
    }
  }
  get(key){
    var keyIdx = this._keys.indexOf(key)
    if(keyIdx >= 0){
      return this._vals[keyIdx]
    }
  }
  has(key){
    if(this._keys.includes(key)){
      return true
    }
    else{
      return false
    }
  }
  delete(key){
    var keyIdx = this._keys.indexOf(key)
    if(keyIdx >= 0){
      this._keys.splice(keyIdx, 1)
      this._vals.splice(keyIdx, 1)
      return true
    }
    else{
      return false
    }
  }
  get size(){
    return this._keys.length
  }

}

class MySet {
  constructor(){
    this.head = null
    this.tail = null
    this.l = 0
  }

  add(val){
    var node = {
      val: val,
      next: null
    }
    if(this.head == null){
      this.head = this.tail = node
      this.l++
      return
    }
    else{
      this.tail.next = node
      this.tail = node
      this.l++
      return
    }
  }
  remove(val){
    var dummy = new ListNode()
    dummy.next = this.head
    var p = this.head.next
    var q = this.head
    while(p){
      if(p.val == val){
        this.l--
        q.next = q.next.next
        return dummy.next
      }
      p = p.next
      q = q.next
    }
    return p

  }
  has(val){
    var p = this.head
    while(p){
      if(p.val == val){
        return true
      }
      p = p.next
    }
    return false
  }
  size(){
    var length = 0
    var p = this.head
    while(p){
      p = p.next
      length++
    }
    return length
  }

  empty(){
    this.head = null
    this.tail = null
    this.head.next = null
    this.tail.next = null
    return
  }
}

class Vector{
  constructor(){

  }

}






class Arraylist {
  constructor() {
    this.array = []
  }

  push(val){  //末尾添加
    var result = Array(this.array.length + 1)
    result[result.length - 1] = val
    this.array = result
    return
  }
  pop(){  //末尾删除
    if(this.array.length == 0){
      return undefined
    }
    var result = Array(this.array.length - 1)
    for(var i = 0; i < result.length; i++){
      result[i] = this.array[i]
    }
    this.array = result
    return
  }
  unshift(val){  //开头添加
    var result = Array(this.array.length + 1)
    result[0] = val
    for(var i = 0; i < this.array.length; i++){
      result[i + 1] = this.array[i]
    }
    this.array = result
    return
  }
  shift(){  //开头删除
    if(this.array.length == 0){
      return undefined
    }
    var result = Array(this.array.length - 1)
    for(var i = 0; i < result.length; i++){
      result[i] = this.array[i + 1]
    }
    this.array = result
    return
  }
}





