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
//类里面的成员方法与属性都采用小驼峰
class Boy extends People {
    constructor(name,age) {
        super(name,age,'男');
    }
    
    /*私有属性与私有方法在属性或方法上加#,只能在类内部使用 私有属性和私有方法前面，也可以加上static关键字，
    表示这是一个静态的私有属性或私有方法 私有只是提案，现有chrome已经实现，见1.1*/
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
    static maxAge= 120;//见1.2
    
    //getter
    get age(){
        retun this.age+1;//见1.4
    }
    //setter
    set age(value){
        this.age= Math.floor(value);
        //setter方法在对象中(非类)需要注意 可能内存溢出，见1.3
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
```
//1.1
class PrivateVar{
    #a=2;
    b=3;
    getA(){
        return this.#a;
    }
}
var p1= new PrivateVar();
console.log(p1.#a);//报错
console.log(p1.b);//3
console.log(p1.getA());//2
```
```
//1.2
class Static1{
    static width= 200;
    height= 100;
    static getArea(){
        //错误写法 静态不能访问非静态属性
        return Static1.width*this.height;
    }
    getMaxSide(){
        //非静态方法可以访问静态属性
        return Math.max(Static1.width,this.height);
    }
}
let s1= new Static1();
s1.getMaxSide();
Static1.gettArea();
/*NaN (一个数字与undefined相加=NaN,null+数字=数字，字符串+数字=字符串拼接,true+1=2,false+1=1,对象+1=1)
转化优先级undefined,null,boolean=>number=>string,
1.任何与字符串相加都是字符串
2.其它相加先转化为数字，undefined=》NaN,null=>0
3.NaN与其它数字相加等于NaN*/
```
```
//1.3
let user = {
  name: 'xx'.
  get name() {
    return this.name;
  },
  set name(value) {
    this.name = value //这句话报错了
  }
};
user.name = "Peter"; //尝试赋值的时候报错Uncaught RangeError: Maximum call stack size exceeded
//解决方法
let user = {
  _name:'xx',
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value //设置一个中转变量
  }
};
```
```
//1.4
class SetVar{
    m=2;
    set m(d){this.m=d}
}
let d=new SetVar();
d.m=99;//{m:99}
```
* 类方法之间不需要逗号分隔，加了会报错
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
* 类名采用大驼峰命名(单词首字母大写)

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
//-------
class A {constructor(a){this.a=a;}};
class B extends A{}
new B(1)//{a:1}
```
* 派生类可以继承父类的属性与方法

# 类的实例化
* 调用 ```new 类名(参数a,b...)```，实际执行constructor构造方法，接收参数，实例化一个实例对象
* 类的所有实例共享一个原型对象 类名.prototype
* 继承与覆盖
```
class A {
    x=1;
    y(){}
    z(){console.log('a')}
}
class B extends A{
    constructor(a){if(a){this.m=a;}}
    m=2;
    z(){console.log('b')}
}
let p= new B(9);//m值=9; 
p.z();//'b' 覆盖了父类的z方法
let p1= new B();// m值=2
```

# es5下的面向对象
* 生成实例对象的传统方法是通过构造函数 ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，
新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已
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
* 类有prototype和__proto__ ,对象实例只有__proto__
```
function Foo(){}
let p= new Foo();
/*
p.__proto__===>Foo.prototype(其__proto__===>Object.prototype(其__proto__===>null))
Foo.prototype,Object.prototype,Function.prototype都是由构造函数创建的
自定义构造方法的__proto__=>Function.prototype(其__proto__==>Object.prototype) 
见github 图
*/
```

