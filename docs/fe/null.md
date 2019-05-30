---
title: null是一个基本数据类型，为何typeof null为Object
conmment: true
customerLayoutList: true
---

#### 如题所示

因为“Object”在底层表示为二进制，在js中，二进制前三位为0的都会被判定为Object，null的二进制表示全是0，所以typeof null会被判断会Object。