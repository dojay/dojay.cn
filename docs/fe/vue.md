---
title: Vue的响应式原理
conmment: true
customerLayoutList: true
---

### 简单版的双向绑定

``` js
<p id="out"></p>
<input type="text" id="in">

const input = document.getElementById('input')
const msg = document.getElementById('msg')

const obj = {}
Object.defineProperty(obj, 'msg', {
  enumerable: true,
  configurabel: true,
  get: () => {},
  set: (newVal) => {
    msg.innerHTML = newVal
  }
})

input.addEventListener('input', function(e) {
  obj.msg = e.target.value
})
```

### 简单版的响应式

``` js
const data = {
  name: '老王'
}

Object.defineProperty(data, key, {
  enumerable: true,
  configurable: true,
  get: () => {},
  set: (newVal) => {
    console.log(`属性${key}被改变了，值为：${newVal}`)
  }
})

data.name = '老王大帅比' // 属性name被改变了，值为：老王大帅比
```