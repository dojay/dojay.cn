---
title: js如何写一个控制并发请求数量通用方法
conmment: true
customerLayoutList: true
---

### 前言

在我们的项目中，经常会遇到页面加载需要请求很多接口的情况，比如，进入淘宝首页的时候，要请求商品列表，促销，活动，个人信息，推荐，等等。。。这个时候，一下子发送10多个请求，对于服务器的压力是相当大的，那么怎么能够避免这个问题呢，我们可以用请求的数量做一个限制，使用队列的机制让请求有序的发送。

### 实现

1. 我们给通用方法起名为RequestControl

``` js
function RequestControl() {}
```

2. 既然要做并发控制，那肯定需要一个参数来控制最大限制，参数为max；还有一个请求列表

``` js
function RequestControl(requestUrls, max=5) {
  this.max = max;
  this.requestUrls = requestUrls;
}
```

3. 实现

``` js
function RequestControl(requestUrls, max=5, cb) {
  this.max = max;
  this.currentReqNum = 0; // 当前并发数目
  this.requestUrls = requestUrls; // 请求url

  function request() {

    function handle() {
      this.currentReqNum--;

      if (this.requestUrls.length) {
        request();
      } else if (this.currentReqNum === 0) {
        cb();
      }
    }

    this.currentReqNum++;

    fetch(this.requestUrls.shift()).then(handle()).catch(handle());

    this.currentReqNum < this.max && request();
  }

  request();
}
```

4. 调用

``` js
  new RequestControl(requestUrls, max=5, cb);
```