# Get Started 快速上手
使用 vue-cli@3 引入 Button 按钮：

<ClientOnly>
<AButton/>
</ClientOnly>

在App.vue里面引入组件和样式文件：
```js
<template>
  <div id="app">
    <a-button>默认</a-button>
  </div>
</template>
<script>
  import {AButton} from 'arman-ui'
  import 'arman-ui/dist/index.css'
export default {
  name: 'app',
  components: {
    AButton
  }
}
</script>
```
main.js：
```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
