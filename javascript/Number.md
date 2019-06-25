# number转字符串 toString(n)
```
function generateRandomAlphaNum(len) {
    var rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}//"kallkv6nte"
```

# 常用属性
* Number.MAX_VALUE
* Number.MIN_VALUE
* Number.MAX_SAFE_INTERGER
* Number.MIN_SAFE_INTERGER
* Number.NaN

# 常用方法
* Number.isFinite()
* Number.isInteger()
* Number.isNaN()
* Number.isSafeInteger()
* Number.parseFloat()
* Number.parseInt()
* Number.prototype.toExponential()幂
* Number.prototype.toFixed()小数位
* Number.prototype.toLocaleString() 格式化默认加千分位
* Number.prototype.toPrecision() 有效数位数
* Number.prototype.toString()
