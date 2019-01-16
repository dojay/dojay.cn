---
title: 从命令行启动Xcode模拟器
conmment: true
customerLayoutList: true
---

> XCode可以通过运行终端命令来启动模拟器

#### 一、列出你安装的所有可用的设备

``` shell
  xcrun instruments -s
```

#### 二、选择你想要的模拟器

``` shell
  xcrun instruments -w "iPhone 6 (11.2)"
  # iPhone 6 (11.2)等型号通过第一条命令展示出来
```
