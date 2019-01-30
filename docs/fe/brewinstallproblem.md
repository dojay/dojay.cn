---
title: brew install xxx的时候卡在Updating Homebrew
conmment: true
customerLayoutList: true
---

> 用Mac的小伙伴有时候用homebrew安装的时候，会经常卡在“Updating Homebrew...”这样的状态，可以在终端执行下面的方法来避免。


``` shell
 export HOMEBREW_NO_AUTO_UPDATE=true
```
