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





