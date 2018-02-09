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
10. 重写log，变颜色
```
var _log = console.log;
console.log = function() {
  _log.call(console, '%c' + [].slice.call(arguments).join(' '), 'color:transparent;text-shadow:0 0 2px rgba(0,0,0,.5);');
};
```
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
### document
#### 常用属性
* 首次获取 `document.body, document.head, document.getElementById('id'), document.getElementsByClassName('classname'), document.getElementsByName('name'), document.getElementsByTagName('tagname'), document.querySelector('string'), document.querySelectorAll('string')`
* 查父元素 `node.parentNode`
* 内容 `ele.innerHTML ele.outerHTML ele.textContent`
* 查兄弟元素 `node.previousSibling, node.nextSibling，node.previousElementSibling, node.nextElementSibling`
* 查子元素 `node.childNodes(包含text与comment),node.children, node.firstChild, node.lastChild, (node.hasChildNodes()是否有子元素)`
* 其它 `document.charset document.cookie document.domain document.title document.images`
* element尺寸  内`clientWidth clientHeight ` 外`offsetWidth offsetHeight offsetTop offsetLeft`
#### 常用方法
* 属性 `node.getAttribute(name) node.hasAttribute(name) node.removeAttribute(name) node.setAttribute(name,value) node.innerHTML`
* classList `cl.add(class) cl.remove(class) cl.toggle(class) cl.contains(class)`
* 添加删除元素 `node.appendChild(node2) node.removeChild(node2) node.replaceChild(被替换,node2) node.insertBefore(插入的,node2)`
* 复制元素 `cloneNode(bool)`
* 是否包含字元素 `el.contains(child)`
* 创建元素 `createElement(tag) createTextNode(text) createAttribute(attribute-name)`
* document.execCommand('commandname') 如'copy'复制选中的文字
* 某个元素里面插入元素 ele.insertAdjacentHTML(position, text); adjacent:临近的 position:beforebegin [afterbegin ele beforeend] afterend
### 浏览器返回效果
1. 表单中的内容会保留
2. 无论浏览器自带的返回前进按钮，还是`history.go(-1)、history.back()...`到新的页面代码都会重新执行一次

