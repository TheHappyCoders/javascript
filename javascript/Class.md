# 概览
* 类的基本语法
* 类的继承
* 类的实例
* es5下的面向对象


# 类的基本语法
* 构造方法 实例属性 实例方法（普通 generator方法 setter getter async）静态属性 静态方法  私有属性 私有方法
```
class People {
    constructor(name,age,sex) {
        this.name = name;
        this.age= age;
        this.sex= sex;
    }
}

class Boy extends People {
    constructor(name,age) {
        super(namw,age,'男');
    }
    
    /*私有属性与私有方法在属性或方法上加#,只能在类内部使用 私有属性和私有方法前面，也可以加上static关键字，
    表示这是一个静态的私有属性或私有方法 私有只是提案，现有chrome已经实现*/
    #a;
    #b=3;
    static #c= 4;
    static #m(){}
    #parseName(){
        return this.name.replace(/\s/g,'');
    }
    
    //实例属性的另外一种写法 一种是constructor中this.x
    money;
    money= 1000;
    
    //静态属性 通过类访问
    static maxAge= 120;
    
    //getter
    get age(){
        retun this.age+1;
    }
    //setter
    set age(value){
        this._age= Math.floor(value);
    }
    
    //静态方法 不能访问实例属性与方法
    static getMaxAge(){
        return Boy.maxAge;
    }
    getAge(){
        return this.age+this.#b;
    }
    
    //generator方法
    *getName(){
        yield Promise.resolve(1);
        yield Promise.resolve(2);
    }
    
    //异步函数 串行执行 比如获取了用户的银行余额 再去付款
    async serial(){
        let b= await Promise.resolve(1);//返回值，不是promise
        let c= await Promise.resolve(b);
        return c; //返回promise包装
    }
    
    //静态方法 自我实现四舍五入
    static round(value){
        if(typeof value ==='number'){
            return (Number.parseInt(value)+.5>value)?Number.parseInt(value):(Number.parseInt(value)+1)
        }else{
            return 0;
        }
    }
}
```
* 方法之间不需要逗号分隔，加了会报错
* 类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
```
class Point {
  constructor(x, y) {
    // ...
  }
  toString() {
    // ...
  }
}
Object.keys(Point.prototype)// []
```
* 类与模块为严格模式，不需要声明 use strict;
* 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
```
function m(){console.log(new.target===m)}
m()//false
new m()// true  通过这个可以强制函数通过new来调用
```
* 类不存在变量提升（hoist），这一点与 ES5 完全不同。
```
new Foo(); // ReferenceError
class Foo {}
```
* 方法多层嵌套，this指向问题解决
```
1.箭头函数
2.重新赋值 如 let _t= this;
3.绑定this指向
class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }
  // ...
}
```

# 类的继承
* 类继承使用 extends 关键字
* super() 可以调用父类的构造方法(可以传递非默认参数)
* 如果没有显式指定构造方法，则会添加默认的 constructor 方法。不显式调用会默认调用父类的构造方法
```
基类默认构造方法
constructor() {}
派生类，默认构造函数
constructor(...args) {
  super(...args);
}
```
* 派生类可以继承父类的属性与方法

# 类的实例
* 调用 ```new 类名(参数a,b...)```，实际执行constructor构造方法，接收参数，实例化一个实例对象
* 类的所有实例共享一个原型对象 类名.prototype



# es5下的面向对象
* 生成实例对象的传统方法是通过构造函数 ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已
```
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```
* ES6 的类，完全可以看作构造函数的另一种写法。
```
class Point {
  // ...
}

typeof Point // "function" 类的数据类型就是函数
Point === Point.prototype.constructor // true 类本身就指向构造函数
```
