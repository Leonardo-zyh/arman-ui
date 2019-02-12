# Input 输入框
**基本用法**

<ClientOnly>
<AInput1/>
</ClientOnly>

```html
<a-input holder="hello"></a-input>
<a-input value="world"></a-input>
<a-input value="disabled" disabled></a-input>
```

**回调函数**

<ClientOnly>
<AInput2/>
</ClientOnly>

```html
<a-input holder="输入完成后的回调" @change="inputChange"></a-input>
<a-input holder="输入内容时的回调" @input="inputChange"></a-input>
```
```js
methods:{
    inputChange(e,$e){
        console.log(e,$e)
    }
}
```