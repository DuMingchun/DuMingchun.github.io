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
  compact: function(array){
    var result = []
    for(item of array){
      if(item == 'false' || item == 'null' || item == 0 || item == '0' || item == '' || item == 'undefined' || item == 'NaN'){

      }
      else{
        result.push(item)
      }
    }
    return result
  }
}
