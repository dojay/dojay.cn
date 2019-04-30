---
title: Linux下安装node
conmment: true
customerLayoutList: true
---

### 前言

之前的服务器到期了，新买了阿里云的服务器，之前零零散散折腾过一些linux下安装各种工具，但是没有记录，这次记录一下。

---

### 下载nodejs文件

首先，登录自己的服务器查看一下系统版本，通过以下命令可以查看：

``` shell
  uname -a;

  # Linux dojay 3.10.0-514.26.2.el7.x86_64 #1 SMP Tue Jul 4 15:04:05 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
```

> x86_64表示64位系统。

然后去node官网找到对应的文件链接，[node官网](http://nodejs.cn/download/)。

这里推荐使用阿里云镜像，选择一个稳定版本的，[走你](https://npm.taobao.org/mirrors/node/v10.15.3/)，
找到适合你的文件，咱们推荐这个(提示：可以在安装的时候，免除编译)：

```
https://npm.taobao.org/mirrors/node/v10.15.3/node-v10.15.3-linux-x64.tar.gz
```

ok，选择一个文件目录，存放你的node文件，这个看个人喜好了，我一般会放在/usr/local下。

在服务器上执行：

```
cd /usr/local

wget https://npm.taobao.org/mirrors/node/v10.15.3/node-v10.15.3-linux-x64.tar.gz
```

### 解压文件

执行完上面的步骤，在当前目录下通过 `ls` 命令，可以看到多了一个 `node-v10.15.3-linux-x64.tar.gz` 的文件，需要解压一下，执行：

``` shell
  tar -xf node-v10.15.3-linux-x64.tar.gz
```

会出现一个 `node-v10.15.3-linux-x64` 的文件，若嫌名字太长，可以更改一下名字：

``` shell
mv node-v10.15.3-linux-x64 node
```

补充一个连接，解压命令的中的 `xf` 是啥，相关[链接](https://www.cnblogs.com/qq78292959/archive/2011/07/06/2099427.html)。


### 设置软连接

``` shell
 ln -s /usr/local/node/bin/npm /usr/local/bin/
 ln -s /usr/local/node/bin/node /usr/local/bin
```

###  检查一下是否安装好

``` shell
  node -v 
  # v10.15.3

  npm -v
  # 6.4.1
```

出现版本提示，证明安装成功。


