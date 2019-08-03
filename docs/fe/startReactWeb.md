---
title: 如何从0到1一个react项目
conmment: true
customerLayoutList: true
---

> 面试官：你做过React项目吗？
> 你：做过。
> 面试官: 那你是怎么启动一个react项目呢？
> 你：create-react-app。
> 面试官：你不用脚手架，自己有搭建一个吗？
> 你：没有。
> 面试官: ...

> 熟悉吗？熟悉的话，那就自己动手搞一下吧。

### 启动一个项目
``` shell
mkdir reactDemo
cd reactDemo
npm init
mkdir src
cd src 
touch index.js
```

### webpack
不会webpack？[走你](https://www.webpackjs.com/)

#### 安装webpack依赖

``` js
npm i webpack webpack-cli --save-dev
mkdir webpack
cd webpack
touch webpack.config.js
```

#### 配置webpack

``` js
const path = require('path');
module.exports = {
  entry: '../src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
}
```

修改一下package.json
``` json
"scripts": {
  "start": "webpack"
}
```