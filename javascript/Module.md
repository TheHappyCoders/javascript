# 模块导入与导出
操作|语法|重命名|对应导入|对应导入重命名
-|-|-|-|-
直接导出<b>变量</b>|```export var a=2;```|no|```import {a} from 'x';```|```import {a as b} from 'x';```
先申明,再导出<b>变量</b>|```var a=2,b=3;export {a,b};```|```export {a as c,b};```|```import {a,b} from 'x';```|```import {a as c,b} from 'x';```
直接导出<b>函数</b>|```export function m(){};```|no|```import {m} from 'x';```|```import {m as b} from 'x';```
先申明,再导出<b>函数</b>|```function m(){};export {m};```|```export {m as c};```|```import {m} from 'x';```|```import {m as b} from 'x';```
<b>默认</b>导出<b>函数</b>|```export default function(){};```|不需要|```import a from 'x';```|不需要
先申明,再<b>默认</b>导出<b>函数</b>|```function a(){};export default a;```|不需要|```import a from 'x';```|不需要
<b>默认</b>导出<b>值</b>|```export default 44;```|不需要|```import a from 'x';```|不需要
先申明,再<b>默认</b>导出<b>变量</b>|```var a=2;export default a;```|不需要|```import a from 'x';```|不需要

* 总结： 默认导入导出不需要重命名,因为导入的名字可以随便取;非默认导入导出 {}里都支持重命名

# export import 复合写法
* 如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起
```
export { foo, bar } from 'foo';//导出foo中的foo bar
export { default } from 'foo';//导出foo中的默认输出
export * from 'foo';//export *命令会忽略foo模块的default方法
```

* 注意：import和export命令只能在模块的顶层，不能在代码块之中，JavaScript 引擎静态分析，先于模块内的其他语句执行。
