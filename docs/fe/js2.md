---
title: 深入理解javascript原型和闭包（2）—— 函数和对象的关系
conmment: true
customerLayoutList: true
---

> 上文[深入理解javascript原型和闭包（1）—— 对象](https://dojay.cn/fe/js1.html)已经提到，函数就是对象的一中，因为可以通过instanceof函数可以判断：

```js
    let fn = function() {}
    console.log(fn instanceof Object); // true
```

是的，函数是一种对象，但是函数却不想数组一样，你可以说数组是对象的一中，以为数组就想是对象的一个子集一样。但是函数与对象之间，却不仅仅是一种包含和被包含的关系，很熟和对象之间的关系比较复杂，甚至有一点鸡生蛋蛋生鸡的逻辑，咱们这一节就捋一下。

先看一个小例子：

```js
    function Fn() {
        this.name = '隔壁老王';
        this.sex = '男';
    }
    
    let fn1 = new Fn();
```

上面的这个例子很简单，它能说明：对象可以通过函数来创建。
但是我要说的是：**对象都是通过函数创建的**。有些人可能会反对：

```js
    let obj = { a: 1, b: 2 }；
    let arr = [1, 2, 3];
```
不好意思，这是js的语法糖。实际上，它的内部代码是：

```js
    // let obj = { a: 1, b: 2}
    
    let obj = new Object();
    obj.a = 1;
    obj.b = 2;
    
    // let arr = [1, 2, 3]
    let arr = new Array();
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
```
其中的Object和Array都是方法。

```js
    console.log(typeof Object); // function
    console.log(typeof Array); // function
```

所以，可以很负责任的说：**对象都是通过函数创建的**

现在是不是糊涂了——对象是函数创建的，而函数却又是一种对象——天哪！函数和对象到底是什么关系啊？

别着急！揭开这个谜底，还得先去了解一下另一位老朋友——prototype原型。