---
title: 每次面试需要复习的东西
conmment: true
customerLayoutList: true
---

### 1. DOMContentLoaded 和 load区别

**load**
> MDN的解释：load 应该仅用于检测一个完全加载的页面 当一个资源及其依赖资源已完成加载时，将触发load事件。

意思是页面的html、css、js、图片等资源都已经加载完之后才会触发 load 事件。

**DOMContentLoaded**
> MDN的解释：当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。

意思是HTML下载、解析完毕之后就触发

[相关文章](https://juejin.im/post/5b88ddca6fb9a019c7717096)

对于来自同一个域名的资源，比如脚本文件、样式表文件、图片文件等，浏览器一般有限制，同时最多下载6～20个资源，即最多同时打开的 TCP 连接有限制，这是为了防止对服务器造成太大压力。如果是来自不同域名的资源，就没有这个限制。所以，通常把静态文件放在不同的域名之下，以加快下载速度。

### 重流和重绘

渲染引擎处理网页，通常分成四个阶段。

1. 解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
2. 对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
3. 布局：计算出渲染树的布局（layout）。
4. 绘制：将渲染树绘制到屏幕。

- 渲染树转换为网页布局，称为“布局流”（flow）;
- 布局显示到页面的这个过程，称为“绘制”（paint）。

重流和重绘并不一定一起发生，重流必然导致重绘，重绘不一定需要重流。比如改变元素颜色，只会导致重绘，而不会导致重流；改变元素的布局，则会导致重绘和重流。

### flex布局

### Cookie

Secure：指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器
HttpOnly：指定该 Cookie 无法通过 JavaScript 脚本拿到

### XSS CSRF 等前端安全问题

### 同源策略
### WebSocket
### CORS
### 时间复杂度
### js操作动画和css操作动画，哪个性能更好
[CSS3动画和js动画各有什么优劣](https://segmentfault.com/q/1010000000645415)
[CSS硬件加速](https://lz5z.com/Web%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96-CSS3%E7%A1%AC%E4%BB%B6%E5%8A%A0%E9%80%9F/)
### 排序稳定性
### Event Loop
### 手写Promise
### 如何实现一个Symbol
### 伪元素和伪类的区别
伪元素创建了一个文档树以外的元素，伪类操作的文档树种已经存在的元素。
### vuex