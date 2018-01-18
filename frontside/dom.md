### document
#### 常用属性
* 首次获取 `document.body, document.head, document.getElementById('id'), document.getElementsByClassName('classname'), document.getElementsByName('name'), document.getElementsByTagName('tagname'), document.querySelector('string'), document.querySelectorAll('string')`
* 查父元素 `node.parentNode`
* 内容 `ele.innerHTML ele.outerHTML ele.textContent`
* 查兄弟元素 `node.previousSibling, node.nextSibling`
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