---
customerLayoutList: false
title: Mac下 VSCode 终端不能运行的问题
---

#### 问题
Mac下VSCode打开终端`(查看->集成终端)`的时候，右下角一直提示：
::: danger 报错信息
无法打开终端/usr/local/bin/fish
:::
查了很多资料，都没有相同的错误，只告诉了从哪里可以打开终端。
然后我想起来前段时间，同事安利我用fish shell，我才想起来有fish这么个东西，
应该是当初设置fish环境变量的时候，影响了VSCode的配置。

#### 解决办法

打开设置面板`快捷键是(command + ,)`，搜索fish，然后找到了设置的地方，如图:

<picture>
  <source srcset="/vscode/search.jpeg">
  <img class="search-snap" alt="Image">
</picture>

然后按提示在右边设置如下:

<picture>
  <source srcset="/vscode/modify.jpeg">
  <img class="modify-snap" alt="Image">
</picture>

然后就好了。

附查询链接：[走你](https://blog.csdn.net/ppwwp/article/details/80018707)

