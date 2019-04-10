### export[{}中可重命名 as x]
1-1. export var a=2; import {a} from 'x';//直接导出变量
1-2. var a=2,b=3; export {a,b}; import {a,b} from 'x';//先申明再导出

2-1 export function m(){}; import {m} from 'x';//直接导出函数
2-2 function m(){};export {m}; import {m} from 'x';//先申明再导出

3-1 var a=2;export default a; import a from 'x';//先申明再默认导出
3-2 export default function(){}; import a from 'x';//直接默认导出
