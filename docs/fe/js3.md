---
title: 深入理解javascript原型和闭包（3）——prototype原型
conmment: true
customerLayoutList: true
---

## prototype原型

在第一节[深入理解javascript原型和闭包（1）—— 对象](https://dojay.cn/fe/js1.html)中说到，函数也是一种对象。他也是属性的集合，你可以可以对函数进行自定义属性。

不用怀疑，javascript自己默认就给函数一个属性--**prototype**。是的，每一个函数都有一个属性叫做**prototype**。

这个**prototype**的属性值是一个对象，默认的只有一个叫做**constructor**的属性，指向这个函数本身。

如图所示：
    

如上图所示，SuperType是一个函数，右侧就是它的原型。

原型既然作为对象（属性的集合），不可能就只有一个constructor来玩，肯定可以自定义的增加许多属性。例如这位Object大哥，人家的prototype里面，就有好多属性。

你也可以在自己定义的方法的prototype中增加自己的属性:

```js
    function Fn() { }
    Fn.prototype.name = '隔壁老王'
    Fn.prototype.getSex = function() {
        return '男'
    }
```
以图示来说的话，就是：

但是，这样有何用呢？ -- 解决这个问题，咱们还是先说说jQuery吧。

```js
    let $div = $('div');
    $div.attr('name', '隔壁老王');
```

以上代码中，$('div')返回的是一个对象（被函数创建的）。假设创建这一对象的函数是myjQuery。它其实是这样实现的。