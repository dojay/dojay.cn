---
customerLayoutList: false
title: Mac终端操作Linux服务器的一些常用命令
---

> 记录一下

#### 通过端口号登录服务器

``` bash
ssh -p 0000 root@0.0.0.0
ssh -t root@0.0.0.0 -p 0000
```

#### 通过端口号向服务器上传文件
``` bash
scp -P 0000 /desktop/hehe.zip root@0.0.0.0:/home/
```

#### 从服务器下载文件
``` bash
scp -P 0000 root@0.0.0.0:/home/ /desktop/hehe.zip
```

待补充...