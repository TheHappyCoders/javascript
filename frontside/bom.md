### console [nodejs与浏览器共同部分]
1. error 错误
2. warn 警告
3. info 提示
4. log 日志
5. assert 断言 false时输出
6. dir 目录样式输出对象的属性
7. trace 堆栈跟踪
8. time 执行时间分析`console.time("t1");console.timeEnd("t1")`
9. timeEnd
### window
#### 常用属性
* window.devicePixelRatio
* window.document
* window.history
* window.location
* window.innerWidth
* window.innerHeight
* Window.localStorage
* window.navigator
* window.outerWidth
* window.outerHeight
* window.scrollX
* window.scrollY
* window.sessionStorage 
* window.screen
* window.console

#### 常用方法
* window.scrollTo(x,y)
* window.scrollBy(x-add,y-add)
* window.print()
* window.confirm()
* window.alert()
* window.prompt(title-string)
* window.setTimeout()/clearTimeout
* window.setInterval()/clearInterval
* window.getSelection() 获取选择的文字对象
### ajax请求
<pre>
  var xhr = new XMLHttpRequest();//新建ajax请求，不兼容IE7以下
  xhr.onreadystatechange = function(){//注册回调函数
    if(xhr.readyState === 4){
        success(xhr.responseText);
    } 
  }
  xhr.open(method,url,true);
  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xhr.send(JSON.stringify(data));//发送的数据需要转化成JSON格式
</pre>