<template>
	<div>
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
	</div>
</template>
<script>
    import ARow from '../../../src/components/ARow'
    import ACol from '../../../src/components/ACol'
    export default {
        components:{
            ARow,ACol
        }
    }
</script>
<style>
	*,*::before,*::after{box-sizing:border-box;}
</style>