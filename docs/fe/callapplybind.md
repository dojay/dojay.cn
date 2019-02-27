---
title: call apply bind是干啥的，有啥区别
conmment: true
customerLayoutList: true
---

### 前言
之前一直对call、apply、bind是一个模模糊糊的感觉，作为一个jser，如果这个概念都搞不清楚的话，哪还有脸叫做jser呢，今天花时间来捋一捋。

### call apply
在js中， call和apply都是为了改变某个函数运行时的上下文而存在的，换句话说，就是为了改变函数内部this的指向。

代码说话：

``` js
  function Cat() {}

  Cat.prototype = {
    name: '椰子',
    eatFish: function() {
      console.log('我叫' + this.name + ',我喜欢吃鱼')
    }
  }

  const smallCat = new Cat();

  smallCat.eatFish(); // 我叫椰子，我喜欢吃鱼
```

现在，我有一只小狗，也想吃鱼，但是我又不想再写一遍eatFish方法，那么我们就可以通过call, apply, bind来实现：

``` js
const dog = {
  name: '小黑'
}

smallCat.eatFish.call(dog); // 我叫小黑，我喜欢吃鱼
smallCat.eatFish.apply(dog); // 我叫小黑，我喜欢吃鱼
```

所以，可以看出call和apply是为了动态改变this而出现的，当一个object没有某个方法(本例中的dog)，但是其他的有(本例中的smallCat)，我们可以借助call或者apply用其它对象的方法来操作。

### call apply的区别

call和apply的用法几乎一模一样，唯一的不同就是传递的参数不同，call只能一个一个参数传递，apply支持传入一个数组(一个参数也得是数组形式)。

``` js
const func = function(arg1, arg2) {};

func.call(this, arg1, arg2);
func.apply(this, [arg1, args]);
```

举一些例子：
``` js
const numbers = [1, 2, 3, 5, 6];

console.log(Math.max.apply(Math, numbers)); // 6
console.log(Math.max.call(Math, 1, 2, 3, 5, 6)); // 6
```

### bind
说完了apply和call，接下来说一下bind。bind方法和call，apply很相似，也是可以改变函数体内this的指向。

MDN的解释是：bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

``` js
function sayName() {
  console.log(this.name);
}
const foo = {
  name: '椰子'
}

sayName(); // undefined

const func = sayName.bind(foo);
func(); // 椰子
```


### bind、call、apply比较

```js
const obj = {
  name: '老王'
};

function sayName() {
  console.log(this.name);
}

sayName.call(obj);
sayName.apply(obj);
sayName.bind(obj)();

可以看出，call和apply是立即执行；bind后面多了一个括号，等需要的时候再执行。
```

最后总结一下：
- apply，call，bind都是为了改变函数的this指向的。
- apply，call，bind三者第一个参数都是this要指向的对象。
- apply，call，bind三者都可以利用后续传参数。
- bind是返回函数，便于稍后调用；apply和call则是立即执行。

参考文章：

[深入浅出 妙用Javascript中apply、call、bind](http://www.cnblogs.com/coco1s/p/4833199.html)

[聊一聊call、apply、bind的区别](https://segmentfault.com/a/1190000012772040)