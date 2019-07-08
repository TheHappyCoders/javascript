

# 概览
类型|用途|属性|方法|遍历
-|-|-|-|-
Set|值不重复|size|add delete has clear|yes
WeakSet|值不重复,且为对象,且垃圾回收不考虑此引用|no|add delete has|no
Map|键可以为对象|size|[set get]delete has clear|yes
WeakMap|键为对象,且垃圾回收不考虑此引用|no|[set get] delete has|no

weak 表示弱引用 垃圾回收不考虑此引用,不可遍历,没有大小(WeakMap)键或(WeakSet)值需要是对象

# Set
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
* Set 转换成数组 Array.from(aset);
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
