# 概览
* 类的基本语法
* 类的实例
* 类的继承
* 类是语法糖


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
    },
    
    /*私有属性与私有方法在属性或方法上加#,只能在类内部使用 私有属性和私有方法前面，也可以加上static关键字，
    表示这是一个静态的私有属性或私有方法 私有只是提案，现有chrome已经实现*/
    #a;
    #b=3;
    static #c= 4;
    static #m(){},
    #parseName(){
        return this.name.replace(/\s/g,'');
    },
    
    //实例属性的另外一种写法 一种是constructor中this.x
    money;
    money= 1000;
    
    //静态属性 通过类访问
    static maxAge= 120;
    
    //getter
    get age(){
        retun this.age+1;
    },
    //setter
    set age(value){
        this._age= Math.floor(value);
    },
    
    //静态方法 不能访问实例属性与方法
    static getMaxAge(){
        return Boy.maxAge;
    },
    getAge(){
        return this.age+this.#b;
    },
    
    //generator方法
    *getName(){
        yield Promise.resolve(1);
        yield Promise.resolve(2);
    },
    
    //异步函数 串行执行 比如获取了用户的银行余额 再去付款
    async serial(){
        let b= await Promise.resolve(1);//返回值，不是promise
        let c= await Promise.resolve(b);
        return c; //返回promise包装
    },
    
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
