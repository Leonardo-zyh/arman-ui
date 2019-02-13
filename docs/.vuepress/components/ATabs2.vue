<template>
	<div>
		<a-tabs vertical="true">
			<a-tabs-tab-w>
				<a-tabs-tab name="table1">I</a-tabs-tab>
				<a-tabs-tab name="table2">LOVE</a-tabs-tab>
				<a-tabs-tab name="table3">YOU</a-tabs-tab>
			</a-tabs-tab-w>
			<a-tabs-content-w>
				<a-tabs-content name="table1">我</a-tabs-content>
				<a-tabs-content name="table2">爱</a-tabs-content>
				<a-tabs-content name="table3">你</a-tabs-content>
			</a-tabs-content-w>
		</a-tabs>
	</div>
</template>
<script>
    import ATabs from '../../../src/components/ATabs'
    import ATabsTabW from '../../../src/components/ATabsTabW'
    import ATabsTab from '../../../src/components/ATabsTab'
    import ATabsContentW from '../../../src/components/ATabsContentW'
    import ATabsContent from '../../../src/components/ATabsContent'
    export default {
        components:{
            ATabs,ATabsTabW,ATabsTab,ATabsContentW,ATabsContent
        }
    }
</script>
<style>
	*,*::before,*::after{box-sizing:border-box;}
</style>