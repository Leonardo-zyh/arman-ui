<template>
	<div>
		<a-button loading>加载</a-button>
		<a-button :loading="loading" @click="loading = !loading">加载</a-button>
	</div>
</template>
<script>
    import AButton from '../../../src/components/AButton'
    export default {
        data(){
          return {
              loading:false
          }
        },
        components:{
            AButton
        }
    }
</script>