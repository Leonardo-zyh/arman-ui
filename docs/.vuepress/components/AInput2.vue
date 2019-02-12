<template>
	<div>
		<a-input holder="输入完成后的回调" @change="inputChange"></a-input>
		<a-input holder="输入内容时的回调" @input="inputChange"></a-input>
	</div>
</template>
<script>
    import AInput from '../../../src/components/AInput'
    export default {
        components:{
            AInput
        },
	    methods:{
            inputChange(e,$e){
                console.log(e,$e)
            }
	    }
    }
</script>