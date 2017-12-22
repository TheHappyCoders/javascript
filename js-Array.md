### Array
* Array.of(a,b,c...)代替new Array(...),因为`new Array(3)//[undefined × 3];newArray(3,4)//[3,4]`
* 除let of外,遍历:forEach(), filter(), every() 和some() map(此结果包括空位)都会跳过空位,es6规定空位被转化为undefined，由于空位的处理规则非常不统一，所以建议避免出现空位。
#### 函数修改原始值的方法(9个)
修改原始值的方法|函数返回值
-|-
Array.prototype.copyWithin|修改后数组
Array.prototype.fill|修改后数组
Array.prototype.pop|删除的数组
Array.prototype.push|数组长度
Array.prototype.shift|删除的数组
Array.prototype.unshift|数组长度
Array.prototype.sort|排序后新数组
Array.prototype.reverse|修改后数组
Array.prototype.splice|删除的元素组成的数组
