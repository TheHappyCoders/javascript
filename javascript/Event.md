### 触发自定义事件

```
var elem = document.querySelector('#div');
var ev = new Event("myEvent", {"bubbles":true, "cancelable":false,composed:false});
//"bubbles"，可选，Boolean类型，默认值为 false，表示该事件是否冒泡。
//"cancelable"，可选，Boolean类型，默认值为 false， 表示该事件能否被取消。
//"composed"，可选，Boolean类型，默认值为 false，指示事件是否会在影子DOM根节点之外触发侦听器。

// 监听myEvent
elem.addEventListener('myEvent', function (e) {
  console.log(e);
}, false);

// 使用目标对象去派发事件，可以是元素节点/事件对象
elem.dispatchEvent(ev);
```

### 触发resize事件

```
//向window派发resize事件
window.dispatchEvent(new Event('resize'))
```
