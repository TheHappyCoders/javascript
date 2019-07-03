
# Set WeakSet, Map WeakMap
* 总结：Weak  弱引用,垃圾回收不考虑此引用

类型|用途|属性|方法|遍历
-|-|-|-|-
Set|值不重复|size|add delete has clear|yes
WeakSet|值不重复,且为对象,且垃圾回收不考虑此引用|no|add delete has|no
Map|键可以为对象|size|[set get]delete has clear|yes
WeakMap|键为对象,且垃圾回收不考虑此引用|no|[set get] delete has|no
