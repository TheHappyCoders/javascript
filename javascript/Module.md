# 模块导入与导出
操作|语法|重命名|对应导入|对应导入重命名
-|-|-|-|-
直接导出|```export var a=2;or export function a(){};```|no|```import {a} from 'x';```|```import {a as b} from 'x';```
先申明,再导出|```var a=2,b=3;export {a,b};or function a(){};export {a};```|```export {a as c,b};```|```import {a,b} from 'x';```|```import {a as c,b} from 'x';```
默认导出|```export default function(){};or export default 44;```|不需要|```import a from 'x';```|不需要
先申明,再默认导出|```function a(){};export default a;or var a=2;export default a;```|不需要|```import a from 'x';```|不需要


* 总结： 默认导入导出不需要重命名,因为导入的名字可以随便取;非默认导入导出 {}里都支持重命名

# export import 复合写法
* 如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起
```
export { foo, bar } from 'foo';//导出foo中的foo bar
export { default } from 'foo';//导出foo中的默认输出
export * from 'foo';//export *命令会忽略foo模块的default方法
```

* 注意：import和export命令只能在模块的顶层，不能在代码块之中，JavaScript 引擎静态分析，先于模块内的其他语句执行。

# commonjs amd cmd umd es6

* commonjs nodejs模块规范 语法有require()  exports.a=b; exports.default={}
```
// foobar.js
 
//私有变量
var test = 123;
 
//公有方法
function foobar () {
 
    this.foo = function () {
        // do someing ...
    }
    this.bar = function () {
        //do someing ...
    }
}
 
//exports对象上的方法和变量是公有的
var foobar = new foobar();
exports.foobar = foobar;
```
```
//require方法默认读取js文件，所以可以省略js后缀
var test = require('./boobar').foobar;
 
test.bar();
```
* amd: Asynchronous Module Definition 异步模块定义 推崇依赖前置 相关实现库requirejs，语法define(id?, dependencies?, factory)
* cmd: Common Module Definition 推崇依赖就近 类似amd 相关实现库 seajs
```
//AMD
define(['./a','./b'], function (a, b) {
 
    //依赖一开始就写好
    a.test();
    b.test();
});
 
//CMD
define(function (requie, exports, module) {
     
    //依赖可以就近书写
    var a = require('./a');
    a.test();
     
    ...
    //软依赖
    if (status) {
     
        var b = requie('./b');
        b.test();
    }
});
```
* umd Universal Module Definition 通用模块定义,是AMD和CommonJS的糅合 UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。在判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块
```
(function (window, factory) {
    if (typeof exports === 'object') {
     
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
     
        define(factory);
    } else {
     
        window.eventUtil = factory();
    }
})(this, function () {
    // module ...
});
```
* ES6：语言标准的模块化，取代UMD，服务器和浏览器都能使用
