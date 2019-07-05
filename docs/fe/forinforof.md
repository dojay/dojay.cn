---
title: for in / for of 的区别
conmment: true
customerLayoutList: true
---

### 遍历数组

大部分情况下，我们需要遍历数组的话，用一个for循环就搞定了。当然，还有ES5中的forEach和map方法

#### forEach和map的区别：

- forEach 没有返回值，操作的是原数组，会改变原数组。

  forEach 不能break中断，return也不能跳出。

- map 方法会生成一个新的数组，并不会改变原数组。


### for in

for in 方法会遍历数组所有的可枚举属性，包括原型属性。

for in 遍历的是数组的索引。

``` js
const arr = [1, 2, 3, 4];

Array.prototype.name = '测试';

for(let index in arr) {
  console.log(arr[index]); // 1, 2, 3, 4, 测试
}
```

### for of

for of 方法遍历的数组的值

``` js
const arr = [1, 2, 3, 4];

Array.prototype.name = '测试';

for(let value of arr) {
  console.log(value); // 1, 2, 3, 4
}
```


如果遍历对象的话，更适合用for in。