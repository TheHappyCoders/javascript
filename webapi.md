### web api 参考https://developer.mozilla.org/zh-CN/docs/Web/Reference/API
1. 文档对象模型（Document Object Model）
DOM 是一个 可以访问和修改当前文档的  API。通过它可以操作文档里的Node和Element。HTML，XML 和 SVG 都扩展了基本的 DOM 接口来操作它们各自私有的元素类型。
2. 设备 API（Device APIs）
这一组 API 可以让网页和应用程序使用各种硬件资源。如：环境光感应器API、电池状态 API、地理位置 API、指针锁定 API、距离感应 API、设备定向 API、屏幕定向 API、震动 API。
3. 通信 API（Communication APIs）
这些 API 可以让网页或应用程序和其它的网页或设备进行通信，如：网络信息 API、Web 通知、简单推送 API。
4. 数据管理 APIs（Data management APIs）
这套 API 可以用来存储和管理用户的数据，如：文件处理 API、IndexedDB。
除了上面这些公开的，所有网页和应用程序都可以使用的 API 以外，还有一类更强大的，但只有特权应用程序和已认证应用程序能够使用的，非标准的 Mozilla 私有 API。

5. 特权 API（Privileged APIs）
特权应用程序是那些由用户给予了特定权限的应用程序。特权 API 包括：TCP Socket API、联系人 API、设备存储 API、浏览器 API、相机 API。
6. 已认证应用程序的私有 API（Certified APIs）
已认证的应用程序是那些直接与操作系统（比如 Firefox OS）打交道，执行核心操作的底层应用程序。较低特权的应用程序可以通过 Web Activities 调用这些底层应用程序。 这些 API 包括：蓝牙 API、手机连接 API、网络状态 API、通话 API、短信/彩信 API、WiFi 信息 API、电源管理 API、设置 API、空闲状态 API、权限 API、时间/时钟 API。
### 浏览器返回效果
1. 表单中的内容会保留
2. 无论浏览器自带的返回前进按钮，还是`history.go(-1)、history.back()...`到新的页面代码都会重新执行一次
### 移动端viewport设置
 `<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0, maximum-scale=1.0">`
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
### 常用行内元素
* 表单`(label button textarea select input...)`
* span img
### 常用块元素
* `address 地址,section一个页面区段, article文章内容, aside伴随内容, header头, footer脚`
* `audio video canvas`
* `div form ul ol h1-6 table p`
### dom快速查询
#### document获取对象
* 首次获取 `document.body, document.head, document.getElementById('id'), document.getElementsByClassName('classname'), document.getElementsByName('name'), document.getElementsByTagName('tagname'), document.querySelector('string'), document.querySelectorAll('string')`
* 查父元素 `node.parentNode`
* 查兄弟元素 `node.previousSibling, node.nextSibling`
* 查字元素 `node.childNodes, node.firstChild, node.lastChild, (node.hasChildNodes()是否有子元素)`
* 其它 `document.charset document.cookie document.domain document.title document.images`
#### document成员操作
* 属性 `node.getAttribute(name) node.hasAttribute(name) node.removeAttribute(name) node.setAttribute(name,value) node.innerHTML`
* classList `cl.add(class) cl.remove(class) cl.toggle(class) cl.contains(class)`
* 添加删除元素 `node.appendChild(node2) node.removeChild(node2) node.replaceChild(被替换,node2) node.insertBefore(插入的,node2)`
* 复制元素 `cloneNode(bool)`
* 创建元素 `createElement(tag) createTextNode(text)`
