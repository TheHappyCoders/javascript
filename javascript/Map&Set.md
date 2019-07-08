

# 概览
类型|用途|属性|方法|遍历
-|-|-|-|-
Set|值不重复|size|add delete has clear|yes
WeakSet|值不重复,且为对象,且垃圾回收不考虑此引用|no|add delete has|no
Map|键可以为对象|size|[set get]delete has clear|yes
WeakMap|键为对象,且垃圾回收不考虑此引用|no|[set get] delete has|no

weak 表示弱引用 垃圾回收不考虑此引用,不可遍历,没有大小(WeakMap)键或(WeakSet)值需要是对象

# Set 不重复的值
* 成员不会有重复值
```
let p= new Set([1,1])//1
```

* Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化
```
const set = new Set([1, 2, 3, 4, 4]);
const set = new Set(document.querySelectorAll('div'));
```
* 在Set中两个NaN是相等的,不同于其它,因此Set中NaN只能存在一个
```
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}

NaN===NaN //false
```
* Set常常用来数组/字符串去重
```
[...new Set(array)]
[...new Set('ababbc')].join('')
```
* Set有实例属性size,方法 add delete has clear
```
let s= new Set([1])
s.add(2)
s.size // 2
s.has(1) // true
s.delete(2);
```
* Set 转换成数组 Array.from(aset)或 [...aset];
* Set遍历方法有 keys=values(因为只有值没有键) entries forEach,默认为values(可以 for(lex x of aset){})
```
let set = new Set(['red', 'green', 'blue']);
for (let item of set.keys()) {
  console.log(item);
}
// red green blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```
# WeakSet 不重复的值, 弱引用, 只能放置对象,  没有size属性,也没办法遍历
* 只能放对象
```
const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)
```
* 有三个实例方法 add delete has (比Set少了clear),没有size属性,也没办法遍历
* WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏

# Map 可以对象作为键
* 创建一个Map实例
```
const map = new Map([
  ['name', 'a'],
  ['title', 'b']
]);
```
* 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等,布尔值true和字符串true则是两个不同的键
```
{true:1,'true':2}//{'true':2}

let map = new Map();
map.set(true, 1);
map.set('true', 2);
map.get(true) // 1
map.get('true') // 2
```
* 实例属性size,实例方法set get has delete clear
```
let map= new Map()
map.set(1,1);
map.get(1);//1
map.has(1);//true 是否有某个键
map.size//1
map.delete(1)//true 成功true 失败false
map.clear()//除所有成员，没有返回值

```
* 遍历方法 keys values entries forEach (遍历顺序就是插入顺序), 默认遍历器接口entries(for (let [key, value] of map) {})
```
for (let key of map.keys()) {
  console.log(key);
}
for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
或者解构赋值
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
或者默认遍历器
for (let [key, value] of map) {
  console.log(key, value);
}
```
* Map转为数组 [...amap]
```
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
```

# WeakMap 只接受对象作为键名（null除外）,键名弱引用, 不可遍历, 没有size属性
* DOM 节点作为键名
```
//一旦这个 DOM 节点删除，该状态就会自动消失，不存在内存泄漏风险。
let myElement = document.getElementById('logo');
let myWeakmap = new WeakMap();
myWeakmap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function() {
  let logoData = myWeakmap.get(myElement);
  logoData.timesClicked++;
}, false);
```
* 部署私有属性
```
const _counter = new WeakMap();
class Countdown {
  constructor(counter, action) {
    //内部属性_counter，是实例的弱引用，所以如果删除实例，它们也就随之消失，不会造成内存泄漏
    _counter.set(this, counter);
  }
  dec() {
    let counter = _counter.get(this);
    if (counter < 1) return;
    counter--;
    _counter.set(this, counter);
  }
}
```
