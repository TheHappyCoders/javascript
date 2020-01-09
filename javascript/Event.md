### 触发自定义事件

```var elem = document.querySelector('#div');
 
var event = document.createEvent('Event');

// 定义事件名称myEvent
event.initEvent('myEvent', true, true);

// 监听myEvent
elem.addEventListener('myEvent', function (e) {
  console.log(e);
}, false);

// 使用目标对象去派发事件，可以是元素节点/事件对象
elem.dispatchEvent(event);```


###  触发resize事件

```
//向window派发resize事件
window.dispatchEvent(new Event('resize'))
```
