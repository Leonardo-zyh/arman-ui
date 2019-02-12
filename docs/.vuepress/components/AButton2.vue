<template>
	<div>
		<a-button type="primary" icon="download" icon-position="middle"></a-button>
		<a-button type="primary" icon="search" icon-position="middle"></a-button>
		<a-button type="primary" icon="zan" icon-position="middle"></a-button>
		<a-button icon="settings">图标</a-button>
		<a-button icon="settings" icon-position="right">图标</a-button>
	</div>
</template>
<script>
    import AButton from '../../../src/components/AButton'
    export default {
        components:{
            AButton
        }
    }
</script>
<style>
	*,*::before,*::after{box-sizing:border-box;}
</style>