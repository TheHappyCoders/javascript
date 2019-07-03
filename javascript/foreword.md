
# [es2015(es6) Core features](http://exploringjs.com/es6/ch_core-features.html#sec_from-iifes-to-blocks)
* From var to const/let (var 声明的全局变量，会加入window对象，千万不要用var！)
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

# 语言进化
* module and class default is use strict 类和模块隐式为严格模式;

# [类型转换](http://javascript.ruanyifeng.com/grammar/conversion.html)
## Number(x),x能转成功的有1数字,2纯数字字符串(会自动去掉前后空格，parseInt也是),3空字符串,4true,5false,6null,7[最多只有一个元素且是1,2情况]；x转化过程1.先调用valueOf 2.如果返回对象则调用toString 3.还是对象就报错
```
 Number(123|'123') //123
 Number('123abc') //NaN
 Number.parseInt('123abc') //123
 Number(true|false) //1|0
 Number(null|undefined) //0|NaN
 Number([]) //0
 Number([1]) //1
 Number({}) //NaN
```
## String(x) x转化过程,1.调用toString,2.返回是对象再调用valueOf,3.还是对象报错
```
String(122) //"122"
String('123') //"123"
String(true|false) //"true"|"false"
String(undefined|null)//"undefined"|"null"
String({}) //"[object Object]"
String([1,2,3]) //"1,2,3"
```
## Boolean(x) x为undefined、null、-0、+0、NaN、''、为false，其余全部为true
```
Boolean(new Boolean(false)) //true
```
## 自动转换
### 自动转换场景
* 不同类型的数据相互运算(123+'abc')
* 对非布尔值类型的数据求布尔值(if('abc'){})
* 对非数值类型的值使用一元运算符(+ -)
### 自动转化规则
* 预期是什么类型的值就调用该类型转换函数
* 如果该位置预期即可以是字符串也可以是数值，转化为数值
* 建议显示类型转换
* 除了加法运算符（+）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。
* 一元运算符也会把运算子转成数值。+true //1

