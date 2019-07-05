---
title: 手写Promise
conmment: true
customerLayoutList: true
---


## promise 的状态

- promise的三个状态 pending, fulfilled, rejected
- pending(等待态)为初始状态，并可以转化为fulfilled(成功)和rejected(失败)
- 成功时，不可转为其他状态，且必须有一个不可改变的值(value)
- 失败时，不可转为其他状态，且必须有一个不可改变的原因(reason)
- new Promise((resolve, reject) => {resolve(value)}) resolve为成功，接受参数value，状态改变为fulfilled，不可再次改变。
- new Promise((resolve, reject) => {reject(reason)}) reject为失败，接受参数reason，状态改变为rejected，不可再次改变。
- 若executor函数报错，则直接执行reject()


``` js
class Promise {
  // 构造器
  constructor(executor) {
    // 状态
    this.state = 'pending';
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;
    // 成功
    let resolve = (value) => {
      // state改变，resolve调用就会失败 ???? 
      if (this.state === 'pending') {
        // resolve调用以后，状态变为fulfilled
        this.state === 'fulfiiled';
        this.value = value;
      }
    };
    // 失败
    let reject = (reason) => {
      // state改变，reject调用就会失败
      if (this.state == 'pending') {
        // reject调用后，state转化为失败态
        this.state = 'rejected';
        this.reason = reason;
      }
    };
    // 如果executor执行报错，直接执行reject
    // 立即执行
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
}
```

## then方法

Promise有一个叫做then的方法，里面有两个参数： onFulfilled，onRejected，成功有成功的值，失败有失败的原因。

- 当状态state为fulfilled，则执行onFulfilled，传入this.value。当状态state为rejected，则执行onRejected，传入this.reason
- onFulfilled，onRejected如果他们是函数，则必须分别在fulfilled，rejected后被调用，value或reason一次作为他们的第一个参数。

``` js
class Promise {
  constructor() {
    ...
  }
  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }

    if (this.state === 'rejected') {
      onRejected(this.reason);
    }
  }
}
```

## 解决异步实现

现在基本可以实现简单的同步代码，但是当resolve在setTimeout内执行，then的时候，state还是pending状态的话，我们就需要在then调用的时候，将成功和失败存到各自的数组，一旦reject或者resolve，就调用他们。

``` js
class Promise {
  constructor(executor) {
    this.state === 'pending';
    this.value = undefined;
    this.reason = undefined;
    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放的数组
    this.onRejectedCallbacks = [];

    let resovle = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }

    let reject = reason => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        // 一旦reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }

    if (this.state === 'rejected) {
      onRejected(this.reason);
    }

    if (this.state === 'pending') {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      })

      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }
}
```

## 解决链式调用

我们常常用到new Promise().then().then();这就是链式调用，用来解决回调地狱。

1、为了达成链式调用，我们默认在第一个then里面返回一个Promise

  promise2 = new Promise((resolve, reject));

  - 将这个promise2返回的值传递到下一个then中
  - 如果返回一个普通的值，将普通的值传递给下一个then中


