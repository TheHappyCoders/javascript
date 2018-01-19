### 日期格式化输出
```
Date.prototype.format= function(fmt){
    var o={
            'y+':this.getFullYear(),
            'M+':this.getMonth()+1,
            'd+':this.getDate(),
            'h+':this.getHours(),
            'm+':this.getMinutes(),
            's+':this.getSeconds(),
            'S':this.getMilliseconds(),//毫秒
            'q+':Math.floor(this.getMonth()/3+1),//季度
        },
        str='';

    for(var k in o){
        if( new RegExp('('+k+')').test(fmt) ){
            str= (o[k]+'').substr( -RegExp.$1.length );
            fmt=fmt.replace(RegExp.$1,str);
        }
    }
    return fmt;
}
```
### 日期对象初始化
* `new Date(year,month,day[,hour[,minutes[,seconds[,ms]]]])`
* `new Date(datestr)`
### 实例方法
* `[get|set][UTC?][FullYear|Month|Date|Hours|Minutes|Seconds|Milliseconds] //--2*2*7=28`
* `getDay  //星期几(0 星期日)`
* `[set|get]Time  //时间戳`
* `valueOf  //1513930533133`
* `getTimezoneOffset //-480`
* `[set|get]Year`
* `toLocaleDateString  //"2017/12/22"`
* `toLocaleString   //"2017/12/22 下午4:12:32"`
* `toLocaleTimeString  //"下午4:12:32"`

### 静态方法(都是返回时间戳) 
* `Date.now()` 
* `Date.parse(datestr)` 
* `Date.UTC(year,month,day[,hour[,minutes[,seconds[,ms]]]])`

