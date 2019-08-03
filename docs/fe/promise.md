---
title: 手写Promise
conmment: true
customerLayoutList: true
---


## promise 的状态

- promise的三个状态 pending, resolved, rejected
- pending(等待态)为初始状态，并可以转化为resolved(成功)和rejected(失败)
- 成功时，不可转为其他状态，且必须有一个不可改变的值(value)
- 失败时，不可转为其他状态，且必须有一个不可改变的原因(reason)
- new Promise((resolve, reject) => {resolve(value)}) resolve为成功，接受参数value，状态改变为resolved，不可再次改变。
- new Promise((resolve, reject) => {reject(reason)}) reject为失败，接受参数reason，状态改变为rejected，不可再次改变。
- 若executor函数报错，则直接执行reject()


``` js
class Promise {
  // 构造器
  constructor(executor) {
    // 状态
    this.status = 'pending';
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;
    // 成功
    let resolve = (value) => {
      if (this.status === 'pending') {
        // resolve调用以后，状态变为resolved
        this.status === 'resolved';
        this.value = value;
      }
    };
    // 失败
    let reject = (reason) => {
      // status改变，reject调用就会失败
      if (this.status == 'pending') {
        // reject调用后，status转化为失败态
        this.status = 'rejected';
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

Promise有一个叫做then的方法，then方法接收两个参数，分别是成功和失败的回调，这里我们命名为onFulfilled和onRjected

``` js
  then(onFulfilled, onRejected) {
    if (this.status === 'resolved') {
      onFulfilled(this.value);
    }
    if (this.status === 'rejected') {
      onRejected(this.reason);
    }
  }
}
```

## 解决异步实现

现在基本可以实现简单的同步代码，但是当resolve在setTimeout内执行，then的时候，status还是pending状态的话，我们就需要在then调用的时候，将成功和失败存到各自的数组，一旦reject或者resolve，就调用他们。

``` js
class Promise {
  constructor(executor) {
    this.status === 'pending';
    this.value = undefined;
    this.reason = undefined;
    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放的数组
    this.onRejectedCallbacks = [];

    let resovle = value => {
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.value = value;
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }

    let reject = reason => {
      if (this.status === 'pending') {
        this.status = 'rejected';
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
    if (this.status === 'resolved') {
      onFulfilled(this.value);
    }
    if (this.status === 'rejected') {
      onRejected(this.reason);
    }
    if (this.status === 'pending') {
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

#### 原理
Promise的then方法实现链式调用的原理是：`返回一个新的Promise`

#### 实现
在then方法中先定义一个新的Promise，取名promise2（官方规定的），然后在三中状态下分别用promise2包装一下，在调用onFulfilled时用一个变量x（官方规定的）接受一个返回值，try，catch一下代码，没错就调resolve传入x，有错误就调rejected传入错误，最后再把promise2给return出去，就可以进行链式调用了。

``` js
// 改动then
// ... 省略
then() {
  let promise2;

  if (this.status === 'resolved') {
    promise2 = new Promise(function(resolve, rejected) {
      try {
        let x = onFulfilled(this.value);
        resolve(x)
      } catch (e) {
        reject(e)
      }
    })
  }

  if (this.status === 'rejected') {
    promise2 = new Promise(function(resolve, rejected) {
      try {
        let x = onRejected(this.reason);
        resolve(x)
      } catch(e) {
        reject(e)
      }
    })
  }

  if (this.status === 'pending') {
    promise2 = new Promise(function(resolved, rejected) {
      this.onResolvedCallbacks.push(function() {
        try {
          let x = onFulfilled(this.value);
          resolve(x)
        } catch(e) {
          reject(e)
        }
      })

      this.onRejectedCallbacks.push(function() {
        try {
          let x = onRejected(this.reason);
          resolve(x)
        } catch(e) {
          reject(e)
        }
      })
    })
  }

  return promise2;
}
```

但是这样返回的x也会有各种问题，比如：

1. 前一次then返回一个普通值，字符串数组对象这些东西，都没有问题，只需传递给下一个then，刚才的方法就够用。
2. 前一次then返回的是一个Promise，是正常的操作，也是Promise提供的语法糖，我们要想办法判断到底返回的是啥。
3. 前一次then返回的是一个Promise，其中有异步操作，也是理所当然的，那我们就要等待他的状态改鬓，再进行下面的处理。
4. 前一次then返回的是自己本身这个promise

``` js
var p1 = p.then(fucntion() {
  return p1;
})
```
5. 前一次then返回的是一个别人自己随便写的Promise，这个Promise可能是个有then的普通对象，比如{then: 哈哈哈}，也有可能在then里面故意抛错，比如：

``` js
let promise = {}
Object.defineProperty(promise,'then',{
  value: function(){
      throw new Error('报错气死你')
  }
})
// 如果返回这东西，我们再去调then方法就肯定会报错了
```
6. 调用resolve的时候，再传一个Promise下去，我们还得处理这个Promise。

``` js
p.then(function(data) {
  return new Promise(function(resolve, reject) {
    resolve(new Promise(function(resolve,reject){
      resolve(1111)
    }))
  })
})
```

7. 可能既调用resolve，又调用reject，我们得忽略后一个。
8. 光then，里面啥也不写。

等等等等。。。

所以，改！

#### 更改后的then。

``` js
then() {
  // 成功或者失败默认不传，给一个函数，解决了8
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(value) {
    return value;
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function(err) {
    throw err;
  }

  let promise2;

  if (this.status === 'resolved') {
    promise2 = new Promise(function(resolve, rejected) {
      // 当成功或者失败执行时有异常，那么返回的promise应该处于失败状态
      setTimeout(() => { // 根据规范让那俩异步执行
        try {
          let x = onFulfilled(this.value);
          // 写一个方法统一处理1-7
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e)
        }
      });
    })
  }

  if (this.status === 'rejected') {
    promise2 = new Promise(function(resolve, rejected) {
      // 当成功或者失败执行时有异常，那么返回的promise应该处于失败状态
      setTimeout(() => { // 根据规范让那俩异步执行
        try {
          let x = onRejected(this.reason);
          // 写一个方法统一处理1-7
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e)
        }
      });
    })
  }

  if (this.status === 'pending') {
    promise2 = new Promise(function(resolved, rejected) {
      this.onResolvedCallbacks.push(function() {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e)
          }
        });
      })

      this.onRejectedCallbacks.push(function() {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e)
          }
        });
      })
    })
  }
}
```

#### resolvePromise

``` js
resolvePromise(promise2, x, resolve, reject) {
  // 接受4个参数，新promise，返回值，成功和失败的回调
  // 有可能这里返回的x是别人的promise
  // 尽可能允许其他乱写
  if(promise2 === x) {
    return reject(new TypeError('循环引用了'))
  }
  // 看x是不是一个promise，promise应该是一个对象
  let called; // 表示是否调用过成功或者失败，用来解决问题7；
  // 下面判断：上一次then返回的是普通值还是函数，来解决问题1，2；
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    // 可能是promise，看这个对象中是否有then方法，如果有then方法就认为他是promise了
    try {
      let then = x.then; // 保存一下x的then方法
      if (typeof then === 'function') {
        // 成功
        // 这里的y方法也是规范，如果还是promise，可以当下一次的x使用。
        // 用call方法修改指针为x，否则this指向window。

        then.call(x, function(y) {
          if (called) return; // 如果调用过就return掉
          called = true;
          // y可能还是一个promise，在去解析直到返回的是一个普通值
          resolvePromise(promise2, x, resolve, reject)
        }, function(err) {
          if (called) return;
          called = true;
          reject(err);
        })
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}
```

待续...