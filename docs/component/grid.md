# Grid 栅格
**基础的24栅格**

<ClientOnly>
<AGrid1/>
</ClientOnly>

```html
<a-row>
	<a-col span="12">col-8</a-col>
	<a-col span="12">col-8</a-col>
</a-row>
<a-row>
	<a-col span="8">col-8</a-col>
	<a-col span="8" offset="8">col-8 offset-8</a-col>
</a-row>
<a-row gutter="8">
	<a-col span="4">col-4</a-col>
	<a-col span="4">col-4</a-col>
	<a-col span="16">col-16</a-col>
</a-row>
<a-row gutter="8">
	<a-col span="4">col-4</a-col>
	<a-col span="4">col-4</a-col>
	<a-col span="8" offset="8">col-8 offset-8</a-col>
</a-row>
```

**响应式栅格**

m：`≤992px`响应式栅格数，s：`≤576px`响应式栅格数
<ClientOnly>
<AGrid2/>
</ClientOnly>

```html
<a-row gutter="8">
	<a-col span="6" span-m="4" span-s="2">col-6/4/2</a-col>
	<a-col span="6" span-m="4" span-s="2">col-4/4/2</a-col>
	<a-col span="6" span-m="12" span-s="18" offset="6" offset-m="4" offset-s="2">col-6/12/18 offset-6/4/2</a-col>
</a-row>
<a-row gutter="8">
	<a-col span="6" span-m="12" span-s="24">col-6/4/2</a-col>
	<a-col span="6" span-m="12" span-s="24">col-4/4/2</a-col>
	<a-col span="6" span-m="24" span-s="24" offset="6" offset-m="0" offset-s="0">col-6/12/18 offset-6/4/2</a-col>
</a-row>
```

