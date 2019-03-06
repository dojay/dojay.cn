---
title: js函数防抖和函数节流
conmment: true
customerLayoutList: true
---

### 前言
有一些浏览器事件可以在很短的时间内快速触发很多次，比如调整窗口大小或者滚动页面。例如，你监听浏览器的滚动事件而做一些事情，你的事件会在很短的时间内被触发很多很多次。这可能会给带来很严重的性能问题。

### 函数防抖

定义：多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行。

原理：对触发函数进行延时操作，在延时到来之前，如果函数再次被触发，则清除上一次的定时器，重新定时。

举例子： scroll方法

``` js
let timer;
window.onscoll = function() {
  if(timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(function() {
    console.log('我在滚动');
    timer = undefined;
  })
}
```

封装如下:

``` js
/**
 * 防抖函数
 * @param method 事件触发函数
 * @param delay 多少毫秒内连续触发，则不会执行函数
 * @return {Function}
 */

function debounce(method, delay) {
  let timer = null;

  return function() {
    const args = arguments;
    const self = this;

    if (timer){
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      method.call(self, args);
    }, delay);
  }
}
```

### 函数节流
定义：触发函数事件后，短时间内间隔无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。

原理：对处理函数进行延时操作，若设定的延时到来之前，再次触发时间，则清除上一次的延时操作定时器，重新定时。

``` js
/**
 * 节流函数
 * @param method 事件触发函数
 * @param mustRunDelay 间隔多少毫秒需要触发一次事件
 * @return {Function}
 */

function throttle(method, mustRunDelay) {
  let timer = null,
      args = arguments,
      start;
  
  return function loop() {
    let self = this;
    let now = new Date();

    if(!start) {
      start = now;
    }

    if(timer) {
      clearTimeout(timer)
    }

    if(now - start > mustRunDelay) {
      method.apply(self, args);
      start = now;
    } else {
      timer = setTimeout(function() {
        loop.apply(self, args);
      }, 50);
    }
  }
}
```