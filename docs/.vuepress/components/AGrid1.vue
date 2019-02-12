<template>
	<div>
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