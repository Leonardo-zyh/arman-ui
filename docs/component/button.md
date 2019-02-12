# Button 按钮
**基础用法**

<ClientOnly>
<AButton1/>
</ClientOnly>

```html
<a-button>默认</a-button>
<a-button type="primary">主要</a-button>
<a-button type="dashed">虚线</a-button>
<a-button type="danger">危险</a-button>
```

**图标按钮**

<ClientOnly>
<AButton2/>
</ClientOnly>

```html
<a-button type="primary" icon="download" icon-position="middle"></a-button>
<a-button type="primary" icon="search" icon-position="middle"></a-button>
<a-button type="primary" icon="zan" icon-position="middle"></a-button>
<a-button icon="settings">图标</a-button>
<a-button icon="settings" icon-position="right">图标</a-button>
```

**按钮组**

<ClientOnly>
<AButton3/>
</ClientOnly>

```html
<a-button icon="left">前进</a-button>
<a-button>更多</a-button>
<a-button icon="right" icon-position="right">后退</a-button>
```

**加载中**

<ClientOnly>
<AButton4/>
</ClientOnly>

```html
<a-button loading>加载</a-button>
<a-button :loading="loading" @click="loading = !loading">加载</a-button>
```
```js
data(){
  return {
    loading:false
  }
}
```