---
title: markdown写法
conmment: true
customerLayoutList: true
---
<!-- [[toc]] -->

### 我是代码块
``` js
  // 我是注释
  import PageRight from './PageRight.vue'

  export default {
    components: {
      PageRight
    }
  }
```

``` json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

``` bash
cd ..
```

### 我是标题

### 引用
> 我是引用文字

### 普通段落
我是普通的文字段落

### 链接
[我是百度](https://github.com/txs1992/focus-outside) 

### 提示
`我是标签类型的加重提示`

### 排列
- 无序排列
- 无序排列
- 无序排列

1. 有序排列
2. 有序排列

### 提示
::: tip
提示
:::

::: warning
警告提示
:::

::: danger
错误提示
:::

### 线
***
***

### 表格
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
