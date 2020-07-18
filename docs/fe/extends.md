---
title: JS中常见的继承以及优缺点和使用场景
conmment: true
customerLayoutList: true
---

### 原型链继承

```js
function Parent() {
  this.parentName = 'parent'
}

function Child() {
  this.childName = 'child'
}

Child.prototype = new Parent()

const c = new Child()
console.log(c.parentName) // parent
```