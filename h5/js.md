### [es2015(es6) Core features](http://exploringjs.com/es6/ch_core-features.html#sec_from-iifes-to-blocks)
* From var to const/let 
* From IIFEs(函数包裹作用域,立即执行函数) to blocks({})
* From concatenating strings(拼接字符串 +) to template literals(模版字符串\`${}\`)
* From function expressions to arrow functions
* Multiple return values via(通过) objects解构赋值 
* From for to forEach() to for-of 数组遍历优先级for=>forEach=>for of
* Handling parameter default values 函数申明默认参数
* Handling named parameters
<pre>
function selectEntries(options) {
    options = options || {}; // (A)
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
    ···
}
to 
function selectEntries({ start=0, end=-1, step=1 } = {}) {
    ···
}
</pre>
* From arguments to rest parameters
* From apply() to the spread operator (...)
* From concat() to the spread operator (...) 
* From function expressions in object literals to method definitions
<pre>
var obj = {
    foo: function () {
        ···
    },
    bar: function () {
        this.foo();
    }, // trailing comma is legal in ES5
}
to
const obj = {
    foo() {
        ···
    },
    bar() {
        this.foo();
    },
}
</pre>
* From constructors to classes
* From custom error constructors to subclasses of Error
* From objects to Maps
* New string methods
* New Array methods 
* From CommonJS modules to ES6 modules

### 语言进化
* module and class default is use strict 类和模块隐式为严格模式;
* module and class default is use strict 类和模块隐式为严格模式;可以
* module and class default is use strict 类和模块隐式为严格模式;

### break continue
1. 都可以用于循环
2. break还可以用于switch语句及跳出代码块
<pre>
---continue---
i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i === 3) {
      continue;
   }
   n += i;
}
......................
var i = 0, 
    j = 8;

checkiandj: while (i < 4) {
   console.log("i: " + i);
   i += 1;

   checkj: while (j > 4) {
      console.log("j: "+ j);
      j -= 1;
      if ((j % 2) == 0)
         continue checkj;
      console.log(j + " is odd.");
   }
   console.log("i = " + i);
   console.log("j = " + j);
}

---break---
var i = 0;
while (i < 6) {
  if (i == 3) {
      break;
  }
  i += 1;
}
................
outer_block:{
  inner_block:{
    console.log ('1');
    break outer_block;      // breaks out of both inner_block and outer_block
    console.log (':-(');    // skipped
  }
  console.log ('2');        // skipped
}
</pre>
