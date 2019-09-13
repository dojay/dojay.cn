---
title: BFC是什么？
customerLayoutList: true
---

### 前言
BFC 已经是一个耳听熟闻的词语了，网上有许多关于 BFC 的文章，介绍了如何触发 BFC ，但当别人问我 BFC 是什么，说实话，这玩意到底他妈是什么？？？

### 定义
“块级格式上下文”

这个其实词并不太好理解，但是如果你知道IFC,GFC,FFC这三个词的含义的话，就知道BFC什么意思了

- IFC：inline布局
- GFC：grid布局
- FFC：flex布局

所以，BFC：block布局。可以理解了吧。

### 布局规则
- 垂直方向一个接着一个。

  这个应该比较好理解，因为刚学div的时候，就知道div默认是会换行的。所以，垂直方向一个接一个，就是这个        意思。
- 垂直方向的距离由margin决定，同一个BFC的两个相邻的margin会重叠
- BFC的区域不会与设置了float的box重叠
- BFC就是页面上一个独立的容器，容器里面的元素不会影响到外部
- 计算高度时，浮动的元素也参与计算

### 怎么触发BFC
- 根元素
- float不为none的元素
- position为absolute或fixed
- display为inline-block, table-cell, table-caption, flex, inline-flex
- overflow不为visible

### 例子

> 垂直方向一个接着一个
``` html
<style>
  .box{
    width: 100px;
    height: 100px;
  }
  .red{ background: #ff4d4f }
  .blue{ background: #40a9ff }
  .yellow{ background: #ffec3d }
</style>

<div class="box red">我是box1</div>
<div class="box blue">我是box2</div>
<div class="box yellow">我是box3</div>
```
> 垂直方向的距离由margin决定，同一个BFC的两个相邻的margin会重叠

``` html
<style>
  .box{
    width: 100px;
    height: 100px;
    color: #fff;
    margin: 100px;
  }
  .red{ background: #ff4d4f }
  .blue{ background: #40a9ff }
</style>

<div class="box red">我是box1</div>
<div class="box blue">我是box2</div>
```

思考：怎么能够让box1和box2之间的距离变成200px呢？

答案：给box1或者box2任何一个变成bfc,例如设置 display: inline-block

``` html
<style>
  .box{
    width: 100px;
    height: 100px;
    color: #fff;
    margin: 100px;
  }
  .red{ background: #ff4d4f; display: inline-block; }
  .blue{ background: #40a9ff }
</style>

<div class="box red">我是box1</div>
<div class="box blue">我是box2</div>
```

> BFC的区域不会与设置了float的box重叠

``` html
<!-- 此时的blue因为设置了overflow: hidden。所以，形成了bfc，就不会与red重叠。
并且会根据wrapper的宽度来做自适应。 -->
<style>
  .wrapper{
    width: 400px;
    background: #eee;
  }
  .box{ color: #fff; }
  .red{ background: #ff4d4f; float: left; width: 100px;height: 100px; }
  .blue{ background: #40a9ff; height: 200px; overflow: hidden; }
</style>

<div class="wrapper">
  <div class="box red">我是box1</div>
  <div class="box blue">我是box2</div>
</div>
```

总的来说，bfc就是一个独立的容器，里面的元素随便折腾。形成bfc的方式，上面已经介绍过了。