<template>
    <div class="a-tabs-content" :class="action" v-if="action">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"ATabsContent",
        props:{
            name:{type:String|Boolean,require:true}
        },
        inject:['eventBus'],
        data(){
            return {action:''}
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                this.action=name===this.name?'a-content-active':''
            })
        },
    }
</script>
<style lang="scss">

</style>