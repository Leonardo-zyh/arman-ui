# Toast 提示框
**App.vue**
```js
<template>
	<div id="app">
		<button @click="showToast">点我</button>
	</div>
</template>
<script>
    import 'arman-ui/dist/index.css'
    export default {
        name:'app',
        methods:{
            showToast(){
                this.$toast(
                    //toast内容
                    'I m amnI am armanI am arman',
                    //默认'top',可选'middle','bottom'
                    'top',
                    //可选，几秒后自动关闭，默认0为不关闭
                    0,
                    //可选，手动关闭内容
                    '关闭',
                    //可选，手动关闭后的回调
                    (e)=>{console.log(e.closeText)}
                )
            }
        }
    }
</script>
```

**main.js**

```js
import Vue from 'vue'
import App from './App.vue'
import {AToastPlugin} from 'arman-ui'

Vue.use(AToastPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```