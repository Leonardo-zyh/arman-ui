<template>
	<div>
		<a-input holder="hello"></a-input>
		<a-input value="world"></a-input>
		<a-input value="disabled" disabled></a-input>
	</div>
</template>
<script>
    import AInput from '../../../src/components/AInput'
    export default {
        components:{
            AInput
        }
    }
</script>
<style>
	*,*::before,*::after{box-sizing:border-box;}
</style>