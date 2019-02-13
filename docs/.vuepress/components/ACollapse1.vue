<template>
	<div>
		<a-collapse>
			<a-collapse-item title="我">I</a-collapse-item>
			<a-collapse-item title="爱" active>LOVE</a-collapse-item>
			<a-collapse-item title="你">YOU</a-collapse-item>
		</a-collapse>
	</div>
</template>
<script>
    import ACollapse from '../../../src/components/ACollapse'
    import ACollapseItem from '../../../src/components/ACollapseItem'
    export default {
        components:{
            ACollapse,ACollapseItem
        }
    }
</script>
<style>
	*, *::before, *::after{box-sizing:border-box;}
</style>