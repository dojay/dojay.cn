---
title: 同源策略
conmment: true
customerLayoutList: true
---

## 同源含义

- 端口相同
- 协议相同
- 域名相同

## 目的

为了保证用户的信息安全，防止恶意的网站窃取数据。

## 限制范围

- Cookie, LocalStorage 和 IndexDB 无法读取
- DOM无法获得
- Ajax请求无法发送

## 规避

- Cookie

如果一级域名相同，只是二级域名不同，可以通过docuemnt.domain设置

- iframe

也可以通过设置document.domain

### 对于完全不同源的网站，如何规避？

- 片段识别符
- window.name
- 跨文档通信API

### 片段识别符

url中#后面的部分，例如: http://www.test.com#fragment

子窗口可以通过监听hashchange事件得到通知

``` js
window.onhashchange = function() {
  const hash = window.location.hash
}
```

子窗口也可以改变父窗口的片段识别符

```js
parent.location.hash = target + '#' + hash
```

### window.name
[window.name](https://www.cnblogs.com/Walker-lyl/p/7454522.html)
### window.postMessage

允许跨窗口通信，无论是否同源

举例：父窗口http://aaa.com 向子窗口 http://bbb.com发送消息，用postMessage

postMessage第一个参数是具体的消息内容，第二个参数是接受消息的窗口源，也可以设置为 * 表示不受域名限制

父窗口向子窗口发送数据：

``` js
const popup = window.open('http://bbb.com', 'title')
popup.postMessage('hello', 'http://bbb.com')
```

子窗口向父窗口发送数据:

```js
window.opener.postMessage('copy that', 'http://aaa.com')
```

父窗口和子窗口都可以通过message事件，监听对方

```js
window.addEventListener('message', function(e) {
  // e 有三个属性
  // 1. e.source 发消息的窗口
  // 2. e.origin 消息发向的网址
  // 3. e.data 消息内容
  console.log(e.data)
})
```

### JSONP

动态的添加一个script标签，因为script标签不受跨域的影响。具体文章：[JSONP](https://juejin.im/entry/5865cc2c61ff4b006d58cb33)

### CORS

CORS需要浏览器和服务器同时支持，服务端设置 Access-Control-Allow-Origin 就可以开启CORS

浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。

#### 简单请求

只要满足以下两大条件，就是简单请求：

- 请求方法是一下三种
  - HEAD
  - GET
  - POST
- HTTP请求头信息中不超出以下几种字段
  - Accept
  - Accept-Language
  - Content-Language
  - Last-Event-ID
  - Content-Type只限以下三个：application/x-www-form-urlencoded、multipart/form-data、text/plain

否则就是非简单请求，浏览器对于这两种请求处理是不一样的。