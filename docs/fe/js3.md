---
title: 深入理解javascript原型和闭包（3）—— prototype原型
conmment: true
customerLayoutList: true
---

# prototype原型

在第一节[深入理解javascript原型和闭包（1）—— 对象](https://dojay.cn/fe/js1.html)中说到，函数也是一种对象。他也是属性的集合，你可以可以对函数进行自定义属性。

不用怀疑，javascript自己默认就给函数一个属性--**prototype**。是的，每一个函数都有一个属性叫做**prototype**。

这个**prototype**的属性值是一个对象，默认的只有一个叫做**constructor**的属性，指向这个函数本身。

如图所示：
    
<picture>
  <source srcset="/prototype/superType.jpg">
  <img class="search-snap" alt="Image">
</picture>

如上图所示，SuperType是一个函数，右侧就是它的原型。

原型既然作为对象（属性的集合），不可能就只有一个constructor来玩，肯定可以自定义的增加许多属性。例如这位Object大哥，人家的prototype里面，就有好多属性。

<picture>
  <source srcset="/prototype/object.jpg">
  <img class="search-snap" alt="Image">
</picture>

你也可以在自己定义的方法的prototype中增加自己的属性:

```js
    function Fn() { }
    Fn.prototype.name = '隔壁老王'
    Fn.prototype.getSex = function() {
        return '男'
    }
```
以图示来说的话，就是：

<picture>
  <source srcset="/prototype/fn.jpg">
  <img class="search-snap" alt="Image">
</picture>

但是，这样有何用呢？ -- 解决这个问题，咱们还是先说说jQuery吧。

```js
    let $div = $('div');
    $div.attr('name', '隔壁老王');
```

以上代码中，$('div')返回的是一个对象（被函数创建的）。假设创建这一对象的函数是myjQuery。它其实是这样实现的。

``` js
    myjQuery.prototype.attr = function () {
        //……
    };
    $('div') = new myjQuery();
```
不知道大家有没有看明白。

如果用咱们自己的代码来演示，就是这样:

```js
    function Fn() {}
    
    Fn.prototype.name = '隔壁老王'
    Fn.prototype.getSex = function() {
        return '男'
    }

    const fn = new Fn()
    console.log(fn.name) // 隔壁老王
    console.log(fn.getSex()) // 男 
```

Fn是一个函数，fn对象是从Fn函数中new出来的，这样fn对象就可以调用Fn.prototype中的属性。
因为每个对象都有一个隐藏的属性__proto__，这个属性引用了创建这个对象的函数的prototype。即:
```js
fn.__proto__ === Fn.prototype
```
这里的__proto__为“隐式原型”，下回继续分析。

[原文戳这里](https://www.cnblogs.com/wangfupeng1988/p/3978131.html)