---
title: Webpack的一些相关面试题
conmment: true
customerLayoutList: true
---

#### 前言

想必大部分的前端开发在项目中都用到了webpack，也相信很多人在开发项目的过程当中是通过vue-cli或者createapp等脚手架生成的webpack，那么自己有尝试动手配置过吗？或者说了解一些他们的原理吗？为什么选择webpack等问题，那咱们就来捋一捋。

#### 问题：

> 为什么用Webpack不用Gulp或者其他工具

- gulp强调的是前端开发的工作流程，我们可以通知配置一系列的task，定义task处理的事务（例如，图片压缩，css添加前缀，压缩js等等），然后执行task，从而构建整个项目。

- webpack是一个前端模块化方案，更侧重的是模块打包，我们可以把开发中的所有资源（图片，css，js等）都可以看做是模块，然后通过loader或者插件来对资源进行处理，然后打包成符合生产环境部署的前端资源。

> webpack工作原理

[webpack原理](https://segmentfault.com/a/1190000015088834?utm_source=tag-newest)

> Webpack 怎么提取公共模块

CommonChunckPlugins

> webpack用过哪些loader? 写过loader么? loader是干嘛的？

webpack只能识别js，loader是为了将webpack不能识别的图片，css，html等转换成模块

> webpack对于项目的优化?

[原文](https://juejin.im/post/5d372851f265da1ba915bf78)


