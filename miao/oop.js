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


function WITH(...args){

  var fun = args.pop()
  try {
    fun(...args)
  }
  finally {
    for(var arg of args){
      if(typeof arg.close == 'function'){
        arg.close()
      }
    }
  }

}
WITH(open('a.txt'), open('b.txt'), (a, b) => {

})

function heapify(ary){
  start = (ary.length - 1) >> 1
  for(var i = start; i >= 0; i--){
    heapDown(ary,i)
  }
  return ary
}

function heapSort(){
  heapify(ary)
}
/*
https://leetcode.com/problems/kth-largest-element-in-a-stream/
https://leetcode.com/problems/merge-k-sorted-lists/
https://leetcode.com/problems/sort-an-array/

//////

https://leetcode.com/problems/convert-object-to-json-string/
https://leetcode.com/problems/integer-to-roman/
https://leetcode.com/problems/roman-to-integer-to/

https://leetcode.com/problems/excel-sheet-column-title/
https://leetcode.com/problems/excel-sheet-column-number/
https://leetcode.com/problems/search-a-2d-matrix/
https://leetcode.com/problems/search-a-2d-matrix-ii/
https://leetcode.com/problems/container-with-most-water/
https://leetcode.com/problems/trapping-rain-water/
https://leetcode.cn/problems/longest-substring-without-repeating-characters/
https://leetcode.com/problems/longest-consecutive-sequence/
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
//-----------------------------------------------

https://leetcode.com/problems/validate-binary-search-tree/
这个题目可以用try catch的方式来做的，
直接用[递归的方式]中序遍历二叉树，拿到一个结点就跟前一个结点的值做对比，如果不是大于等于，就直接抛错
调用者如果发现抛错了，就直接返回false












*/
function predicate (){

}

function pop (heap){
  if(heap.length == 0){
    return
  }
  if(heap.length == 1){
    return heap.pop()
  }
  var result = heap[0]
  var last = heap.pop()
  heap[0] = last

  heapDown(heap, 0)
}
// 往堆里添加一个并维护
function push(heap, val){
  heap.push(val)
  heapUp(heap, heap.lenght - 1)
}
function heapUp(heap, pos){
  if(pos == 0){
    return
  }
  var p = (pos - 1) >> 1
  if(heap[pos] > heap[p]){
    swap(heap, pos, p)
    heapUp(heap, p)
  }
}

// 从pos位置开始向下调整
function heapDown(heap, pos){
  for(;;){
    var leftPos = 2 * pos + 1
    var rightPos = 2 * pos + 2
    var max = pos
    if(leftPos < heap.lenght && heap[leftPos] > heap[max]){
      max = leftPos
    }
    if(rightPos < heap.lenght && heap[rightPos] > heap[max]){
      max = rightPos
    }
    if(max !== pos){
      swap(heap, max, pos)
      pos = max
    }
    else{
      break
    }
  }
}

function swap(arr, a, b){
  var t = arr[a]
  arr[a] = arr[b]
  arr[b] = t
}

class prior {
  constructor(predicate = it => -it){
    this._elements = []
    this.predicate = predicate
  }
  swap(a, b){
    var t = this._elements[a]
    this._elements[a] = this._elements[b]
    this._elements[b] = t
  }
  heapUp(pos){
    if(pos == 0){
      return
    }
    var predicate = this.predicate
    var p = (pos - 1) >> 1
    if(predicate(this._elements[pos]) > predicate(this._elements[p])){
      this.swap(pos, p)
      this.heapUp(p)
    }
  }
  heapDown(pos){
    for(;;){
      var leftPos = 2 * pos + 1
      var rightPos = 2 * pos + 2
      var max = pos
      var predicate = this.predicate
      if(leftPos < this._elements.lenght && predicate(this._elements[leftPos]) > predicate(this._elements[max])){
        max = leftPos
      }
      if(rightPos < this._elements.lenght && predicate(this._elements[rightPos]) > predicate(this._elements[max])){
        max = rightPos
      }
      if(max !== pos){
        this.swap(max, pos)
        pos = max
      }
      else{
        break
      }
    }
  }
}












