---
title: Vue组件之间的通信
conmment: true
customerLayoutList: true
---

### 父=>子通信

> 父组件向子组件传递通过props

父组件的代码
``` html
<template>
  <div>
    <div>我是父组件的文字balabala...</div>
    <!-- child是一个子组件，父组件给子组件传递了一个title的字段 -->
    <child :title="title">
  </div>
</template>

<script>
import Child from '../components/child';

export default {
  data() {
    return {
      title: '你好漂亮',
    }
  },
  components: {
    Child
  }
}
</script>
```

子组件代码
``` html
<template>
  <div>
    <span>我是父组件传过来的的数据：{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>
```

### 子=>父通信

> 子组件向父组件通信有两种方式
> 1. 通过修改父组件的props来传递(通过props的Object类型，可以修改props的值，但是并不推荐这么做)；
> 2. 通过$emit方式

父组件代码
``` html
<template>
  <div>
    <div>我是父组件的文字balabala...</div>
    <!-- child是一个子组件，父组件给子组件传递了一个title的字段 -->
    <child @changeParentData="getData">
  </div>
</template>

<script>
import Child from '../components/child';

export default {
  components: {
    Child
  },
  methods: {
    getData(data) {
      console.log(data); // 你好呀
    }
  }
}
</script>
```

子组件代码
``` html
<template>
  <div>
    <button @click="changeParentData"></button>
  </div>
</template>

<script>
export default {
  methods: {
    changeParentData() {
      this.$emit('changeParentData', '你好呀')
    }
  }
}
</script>
```

### 兄弟组件通信

> 最简单暴力的，可以通过使用一个Vue实例来作为中央事件处理

``` js
  // main.js
  const bus = new Vue();
  Vue.prototype.bus = bus;
```

> 因为main里面有app实例，所以，不需要新建一个new Vue,可以直接在实例里面添加

``` js
  // main.js
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    beforeCreate () {
      Vue.prototype.bus = this
    }
  })
```

> 还有其他的方式，比如大型项目中的vuex

父组件代码
``` html
<template>
  <div>
    <!-- childone是一个子组件 -->
    <child-one>
    <!-- childtwo是另一个子组件 -->
    <child-two>
  </div>
</template>

<script>
import ChildOne from '../components/childOne';
import ChildTwo from '../components/childTwo';

export default {
  components: {
    ChildOne,
    ChildTwo
  }
}
</script>
```

子组件one
``` html
<template>
  <div>
    <button @click="changeBrotherData"></button>
  </div>
</template>

<script>
export default {
  methods: {
    changeBrotherData() {
      this.bus.$emit('changeData', '你好呀')
    }
  }
}
</script>
```

子组件two
``` html
<template>
  <div>
    <div>{{ txt }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: ''
    }
  },
  mounted() {
    this.bus.$on('changeData', (data) => {
      this.txt = data;
    })
  }
}
</script>
```