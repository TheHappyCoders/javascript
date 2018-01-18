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
 
