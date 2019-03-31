"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = foo;
exports.bar = bar;
//分别暴露
function foo() {
    console.log("module 1 foo()");
}

function bar() {
    console.log("module 1 bar()");
}