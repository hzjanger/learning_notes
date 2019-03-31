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
