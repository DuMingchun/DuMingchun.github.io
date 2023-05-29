/*
将MyMap，MySet，Vector，Complex，Stack，Queue，LinkedList
全部使用class语法重写
对Complex实现四个静态方法以计算加减乘除
LinkedList实现前后增删以及at以及length

/miao/oop.js
*/
class Map {
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

