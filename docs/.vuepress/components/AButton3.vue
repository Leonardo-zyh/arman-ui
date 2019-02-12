<template>
	<div>
		<a-button-group>
			<a-button icon="left">前进</a-button>
			<a-button>更多</a-button>
			<a-button icon="right" icon-position="right">后退</a-button>
		</a-button-group>
	</div>
</template>
<script>
    import AButton from '../../../src/components/AButton'
    import AButtonGroup from '../../../src/components/AButtonGroup'
    export default {
        components:{
            AButton,AButtonGroup
        }
    }
</script>