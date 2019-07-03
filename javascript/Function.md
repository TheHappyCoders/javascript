# 闭包
## 定义
* 闭包就是当一个函数即使是在它的词法作用域之外被调用时，也可以记住并访问它的词法作用域。
## 常见场景-将这个函数送到词法作用域外，然后调用
* 这个函数被函数return
<pre>
function foo() {
	var a = 2;
	function bar() {
		console.log( a );
	}
	return bar;
}
var baz = foo();
</pre>
* 函数作为值被传递给另外一个函数
<pre>
function wait(message) {
	setTimeout( function timer(){
		console.log( message );
	}, 1000 );
}

wait( "Hello, closure!" );
</pre>
