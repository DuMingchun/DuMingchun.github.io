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
  concat: function(array, ...values){
    var result = array;
    for(item of arguments){
      result.push(item);
    }
    return result;
  },
  //创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
  drop: function(array, n = 1){
    var result = array.slice(n, array.length);

    return result;
  },
  //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
  fill: function(array , value, start = 0, end = array.length){
    var result = array;
    array.fill(value,start,end);

    return result;
  },
  //返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
  findIndex: function(array, predicate = _.identity, fromIndex = 0){





    return idx;
  },
  //类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。
  findLastIndex: function(){





  },
  //减少一级array嵌套深度。
  flatten: function(array){
    var result = [];
    for(item of array){
      if(item.isArray()){
        for(var i = 0; i < item.length; i++){
          result.push(item[i]);
        }
      }
      else{
        result.push(item);
      }
    }
    return result;
  },
  //将array递归为一维数组。
  flattenDeep: function(array){
    var result = [];
    for(item of array){
      if(item.isArray()){



      }

    }
  },
  //根据 depth 递归减少 array 的嵌套层级
  flattenDepth: function(array, depth = 1){

  },
  //与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
  fromPairs: function(pairs){
    var map = {}
    for(var i = 0; i < pairs.length; i++){
      map[(pairs[i])[0]] = (pairs[i])[1]
    }
    return map
  },











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
