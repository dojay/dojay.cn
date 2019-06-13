---
title: 发布订阅
conmment: true
customerLayoutList: true
---

``` js
function Public() {
  this.handler = {};
}

Public.prototype = {
  // 检测事件是否存在
  isExsit: function(name) {
    const keys = Object.keys(this.handler);

    if (keys.indexOf(name) > -1) {
      return true;
    }

    return false;
  },

  // 订阅
  on: function(name, listener) {
    if (!this.isExsit(name)) {
      this.handler[name] = [];
    }

    this.handler[name].push(listener);
  },

  // 发布
  emit: function(name, ...args) {
    if (this.isExist(name)) {
      const listeners = this.handler[name];

      listeners.forEach((item) => {
        item.apply(this, args);
      });
    }
  },

  // 销毁
  off: function(name, cb) {
    // 全部销毁
    if (!arguments.length) {
      this.handler = null;
      return this;
    }

    if (this.isExsit(name)) {

      // 销毁特定订阅
      if (arguments.length === 1) {
        delete this.handler[name];
        return this;
      }
      
      // 销毁特定事件
      if (arguments.length === 2) {
        const listeners = this.handler[name];
        listenners.some((f, i) => {
          if (f === cb) {
            listeners.splice(i, 1);
            return true;
          }
          return false;
        })
      }
    }
  }
}
```