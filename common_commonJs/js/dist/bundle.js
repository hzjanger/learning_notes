(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let uniq = require("uniq");

let module1 = require("./module1");
let module2 = require("./module2");
let module3 = require("./module3");

module1.foo();
console.log(module1.mes);
module2();
module3.bar();
module3.foo();
let result = uniq(module3.arr);
console.log(result);

},{"./module1":2,"./module2":3,"./module3":4,"uniq":5}],2:[function(require,module,exports){
module.exports =  {
    mes: "这是一个消息",
    foo() {
        console.log("foo() module");
    }
};


},{}],3:[function(require,module,exports){
module.exports = function() {
    console.log("module2");
};

},{}],4:[function(require,module,exports){
exports.foo = function () {
    console.log("foo() modlule " );
};


exports.bar = function () {
    console.log("bar() modlule " );
};

exports.arr = [1, 2, 3, 4, 5, 6, 4, 3 ,2 , 1];

},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);