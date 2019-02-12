# Install 安装
### npm
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```
npm i arman-ui
```
### CDN
在页面上引入 js 和 css 文件即可开始使用。
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="http://arman1994.club/lib/ui.css">
<!-- 引入Vue -->
<script src="https://cdn.bootcss.com/vue/2.6.3/vue.min.js"></script>
<!-- 引入组件库 -->
<script src="http://arman1994.club/lib/ui.js"></script>
```
引入 Button 按钮：

<ClientOnly>
<AButton/>
</ClientOnly>

代码：
```html
<!doctype html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <title>arman-ui</title>
    <style>*,*::before,*::after{box-sizing:border-box;}</style>
    <link rel="stylesheet" href="http://arman1994.club/lib/ui.css">
</head>
<body>
    <div id="app">
        <a-button>默认</a-button>
    <div>
    <script src="https://cdn.bootcss.com/vue/2.6.3/vue.min.js"></script>
    <script src="./node_modules/arman-ui/static/index.js"></script>
    <script>
        new Vue({
            el:'#app'
        })
    </script>
</body>
</html>
```