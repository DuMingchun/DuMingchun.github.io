/* 注意事项
 * 刷lodash是加深对js的理解
 * 刷leetcode是锻炼编程能力
 * 不要使用转换为字符串再转回去的办法实现任何函数
 * 文档中示例代码及注释不能完全看懂的先别做
 * 整条全黄的话会有错误原因的告知，hover查看并修改即可
 * 没有更新的话Ctrl+F5强刷即可
 * 一般来说如非题目要求，不要修改函数的输入，而是返回新的值，即实现为纯函数
 * compact,  chunk,  fill,  drop,  findIndex,
 * findLastIndex,  flatten,  flattenDeep,  flattenDepth
 * fromPairs,  toPairs,  head,  indexOf,  lastIndexOf,
 * initial,  join,  last,  pull,  reverse,  every,  some
 * countBy,  groupBy,  keyBy,  forEach,  map,  filter,  reduce,
 * reduceRight,  size,  sortBy,  sample,
 * isUndefined,  isNull,  isNil,  max,  min,  maxBy,  minBy,  round,  sumBy
 * flagMap,  flatMapDepth,  get,  has,  mapKeys,  mapValues
 * range,  stringifyJSON,  concat,  isEqual,  repeat,
 * padStart,  padEnd,  pad,  keys,  values,  random,
 * round,  ceil,  floor,  cloneDeep
 * trim,  trimStart,  trimEnd,  assign,  merge,
 *
 */


var dumingchun = {
  swap: function(array, i, j){
    var k;
    k = array[i];
    array[i] = array[j];
    array[j] = k;
  },
  //将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
  chunk: function(array , size = 1){
    var result = [];
    for(var i = 0; i < array.length; i += size){
      result.push( array.slice(i, i + size) );
    }
    return result;
  },
  //创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
  compact: function(array){
    var result = [];
    for(item of array){
      if(item !== false && item !== null && item !== 0 && item !== '' && item !== undefined && item !== NaN && item){
        result.push(item);
      }
    }
    return result;
  },
  //创建一个新数组，将array与任何数组 或 值连接在一起。
  concat: function(array, values){
    var result = array;
    for(item of values){
      result.push(item);
    }
    return result;
  },
  //创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中
  difference: function(array, values){
    var result = [];
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < values.length; j++){
        if(array[i] == values[j]){
          array[i] = null;
        }
      }
    }
    for(var k = 0; k < array.length; k++){
      if(array[k] !== null){
        result.push(array[k]);
      }
    }
    return result;
  },




  //创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
  drop: function(array, n = 1){
    var result = array.slice(n, array.length);
    return result;
  },
  //创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
  dropRight: function(array, n = 1){
    var result = array.slice(0, array.length - n);
    return result;
  },
  //创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
  dropRightWhile: function(array, predicate){

  },
  //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
  fill: function(array , value, start = 0, end = array.length){
    var result = array;
    array.fill(value,start,end);

    return result;
  },
  //返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
  findIndex: function(array, predicate = _.identity, fromIndex = 0){

    for(var i = fromIndex; i < array.length; i++){
      if(predicate(array[i])){
        return i;
      }
    }
  },
  //类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。
  findLastIndex: function(array, predicate = _.identity, fromIndex = array.length - 1){
    for(var i = fromIndex; i >= 0; i--){
      if(predicate(array[i])){
        return i;
      }
    }
  },
  //减少一级array嵌套深度。
  flatten: function(array){
    var result = [];
    for(var i = 0 ; i < array.length ; i++){
      if(Array.isArray(array[i])){
        for(var j = 0 ; j < array[i].length ; j++){
          result.push(array[i][j])
        }
      }
      else{
        result.push(array[i])
      }
    }
    return result;
  },
  //将array递归为一维数组。
  flattenDeep: function(array){
    while (array.some(Array.isArray)) {
      array = [].concat(...array);

    }
    return array;
  },

  //根据 depth 递归减少 array 的嵌套层级
  flattenDepth: function(array, depth = 1){
    while (depth > 0 && array.some(Array.isArray)) {
      array = [].concat(...array);
      depth--;
    }
    return array;
  },
  //与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
  fromPairs: function(pairs){
    var map = {}
    for(var i = 0; i < pairs.length; i++){
      map[(pairs[i])[0]] = (pairs[i])[1]
    }
    return map;
  },
  //获取数组 array 的第一个元素。
  head: function(array){
    if(array.length < 1){
      return undefined;
    }
    else{
      return array[0];
    }
  },
  //返回首次 value 在数组array中被找到的 索引值，如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
  indexOf: function(array, value, fromIndex = 0){
    if(fromIndex == -1){
      for(var i = array.length - 1; i >= 0; i--){
        if(array[i] == value){
          return i;
        }
      }
    }
    else{
      for(var i = fromIndex; i < array.length; i++){
        if(array[i] == value){
          return i;
        }
      }
    }
  },
  //获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
  initial: function(array){
    if(array.length < 1){
      return undefined;
    }
    else{
      return array.slice(0, array.length - 1);
    }
  },
  //创建唯一值的数组，这个数组包含所有给定数组都包含的元素
  intersection: function(arrays){

  },



  //将 array 中的所有元素转换为由 separator 分隔的字符串。
  join: function(array, separator = ','){
    var str = ''
    for(var i = 0; i < array.length; i++){
      str += toString(array[i]) + toString(separator);
    }
    return str.slice(0, -1);
  },
  //获取array中的最后一个元素。
  last: function(array){
    return array[array.length - 1];
  },
  //这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素
  lastIndexOf: function(array, value, fromIndex = array.length - 1){
    var idx = -1;
    for(var i = fromIndex; i >= 0; i--){
      if(array[i] == value){
        idx = i;
        return idx;
      }
    }
  },
  //获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素
  nth: function(array, n = 0){
    if(n >= 0){
      return array[n];
    }
    else{
      return array[array.length + n];
    }
  },
  //移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
  pull: function(array, ...values){

    for(var i = 0; i < array.length; i++){

    }
    return array.slice(0, p);
  },






  //反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推
  reverse: function(array){
    var l = array.length >> 1;
    for(var i = 0; i < l; i++){
      swap(array, i, (array.length - 1 - i));
      return array;
    }
  },








  toPairs: function(object){
    var result = [];
    for(key in object){
      var arr = []
      arr.push(key)
      arr.push(object[key])
      result.push(arr)
    }
    return result;
  }


}














/*
 * var username = function () {
 *     function chunk (  ){
 *
 *     }
 *
 *     function compact (  ){
 *
 *     }
 *
 *     return {
 *         chunk,
 *         compact,
 *     }
 *
 * }
 *
 */
