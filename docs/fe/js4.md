---
title: 深入理解javascript原型和闭包（3）—— 隐式原型
conmment: true
customerLayoutList: true
---

[上节](http://dojay.cn/fe/js3.html)已经提到，**每一个函数function都有一个prototype**，即原型。这里再加一句话：**每一个对象都有一个__proto__**，即隐式原型。

这个__proto__是一个隐藏的属性，可以通过来显示：

```js
  let obj = {};
  console.log(obj.__proto__);
```

结果为：

<picture>
  <source srcset="/prototype/__proto__.png">
  <img class="search-snap" alt="Image">
</picture>

上面截图来看: obj.__proto__和Object.prototype的属性一样！

obj这个对象本质上就是被Object函数创建的，因此:

```js
  obj.__proto__ === Object.prototype
```

用图来表示就是：


即，
> 每个对象都有一个__proto__属性，指向创建该对象的函数的prototype。

那么，咱们之前说到，Object.prototype也是一个对象，那么，它的__proto__指向谁呢？

好问题！

在说明“Object.prototype”之前，先说一下自定义函数的prototype。自定义函数的prototype本质上就是和let obj = {} 是一样的，都是被Object创建，所以它的__proto__指向的就是Object.prototype。