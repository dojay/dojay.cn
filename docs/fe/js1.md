---
title: 深入理解javascript原型和闭包（1）—— 对象
conmment: true
customerLayoutList: true
---

# 数据类型
js的数据类型有哪些呢？大家在面试的时候基本都被问到过吧？正常大家的回答应该是：
> 基本类型：number, string, boolean, undefined, null；引用类型：Object, Array, Function

那怎么检测当前的数据类型是属于哪种的呢？由于js中的变量是松散类型的，所以它提供了**typeof**关键字来检测当前变量的数据类型:

# typeof

typeof输出的类型如下：

``` js
    funtion show(x) {
        console.log(typeof x); // undefined
        console.log(typeof 10); // number
        console.log(typeof 'abc'); // string
        console.log(typeof true); // boolean
        
        console.log(typeof function(){}); // funtion
        
        console.log(typeof [1, 'a', true]); // object
        console.log(typeof {a: 1, b: 2}); // object
        console.log(typeof null); //object
        console.log(typeof new Number(10)); //object
    }
    show();
```
以上代码列出了typeof输出的结果，其中unedfined、number、string、boolean属于简单的值类型（当然还包含null），不是对象。剩下的数组、对象、函数都是引用类型。

这个时候有很多小伙伴奇怪了，既然null是值类型，为啥typeof null为object呢？具体原因如下：

> 不同的对象在底层都表示为二进制，在js中二进制前三位都为0的话会被判断为object类型，null的二进制表示是全0，所以执行typeof时会返回object，这是第一版js留下来的bug。[原文戳这里](https://www.cnblogs.com/wzybnzy/p/7232618.html)

说了这么多，那什么是对象呢？

> 对象--若干属性的集合

什么意思呢？举个例子：

``` js
    let obj = {
        a: 1,
        b: function(x) {
            console.log(this.a + x);
        },
        c: {
            name: '隔壁老王',
            sex: '男'
        }
    }
```
以上代码中，obj是一个自定义的对象，其中a，b，c就是它的属性。

这个比较容易理解，那么函数和数组也可以这样定义吗？当然不行，但是，它可以以别的形式来体现。以函数为例子：

``` js
    let fn = function() {}
    fn.a = 10;
    fn.b = function() {};
    fn.c = {
        name: '隔壁老王'
    }
```
上段代码中，函数就作为对象被赋值了a，b，c三个属性，然后你会说：没见过这样的写法啊。但是，确实可以这样写，不信你看jQuery源码，在jQuery中$这个变量其实是一个函数，不信你可以在用typeof验证一下：

```js
console.log(typeof $); // funciton
console.log($.trim(' ABC '); // ABC
```

所以，函数确实可以这么搞。很明显，这就是在$函数上加了一个trim属性，而trim属性是函数。

本文的中心思想就是：

> 一切（引用类型）都是对象，对象是属性的集合。

最后，在typeof的输出类型中，function和object都是对象，为何却要有两种输出呢？为啥不都是object呢？请看下回分析。

[原文戳这里](https://www.cnblogs.com/wangfupeng1988/p/3977987.html)