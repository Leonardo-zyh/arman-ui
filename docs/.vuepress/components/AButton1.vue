<template>
	<div>
		<a-button>默认</a-button>
		<a-button type="primary">主要</a-button>
		<a-button type="dashed">虚线</a-button>
		<a-button type="danger">危险</a-button>
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