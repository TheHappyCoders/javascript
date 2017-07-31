
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
### 用新对象Reflect代替Object部分静态方法与function的apply方法
<pre>
1.原因4点,见http://es6.ruanyifeng.com/#docs/reflect

2.Reflect方法有13个
Reflect.apply(target,thisArg,args)
Reflect.construct(target,args)
Reflect.get(target,name,receiver)
Reflect.set(target,name,value,receiver)
---属性---
Reflect.defineProperty(target,name,desc)//configurable enumerable writable value
Reflect.deleteProperty(target,name)
Reflect.has(target,name)
Reflect.ownKeys(target)//自身可枚举不可枚举属性
Reflect.getOwnPropertyDescriptor(target, name)
Reflect.isExtensible(target)
Reflect.preventExtensions(target)//不能添加新属性
---原型---
Reflect.getPrototypeOf(target)
Reflect.setPrototypeOf(target, prototype)

3.Object剩余静态方法10个
Object.assign()//复制对象
Object.create()
Object.is()//判断两个值是否相等，大致等于===,两点区别(+0，-0不相等;NaN，NaN相等)

Object.freeze()//冰冻对象,只能查询属性值
Object.isFrozen()

Object.seal()//密封对象,只可以修改(仅仅是值),查询已有属性的值。
Object.isSealed()

Object.keys()//自身可枚举属性
Object.values()//自身可枚举属性的值
Object.entries()//自身可枚举属性的[[key,value],...]

备注:Object的实例方法有四个,mdn还有其它5个(3个非标准，2个极少用)
Object.prototype.hasOwnProperty()
Object.prototype.isPrototypeOf()
Object.prototype.propertyIsEnumerable()
Object.prototype.toString()
</pre>
