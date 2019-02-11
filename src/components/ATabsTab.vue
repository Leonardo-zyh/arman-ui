<template>
    <div class="a-tabs-tab" :class=" [action,vertical && `a-tabs-vertical`]" @click="tabSelect">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"ATabsTab",
        props:{
            name:{type:String | Boolean,require:true}
        },
        inject:['eventBus','vertical'],
        data(){
            return {action:''}
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                this.action=name===this.name?'a-tab-active':''
            })
        },
        methods:{
            tabSelect(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>
<style lang="scss">
    .a-tabs-tab{
        padding:9px 14px;margin:0 32px -1px 0;
        border:2px solid transparent;
        cursor:pointer;
        &.a-tabs-vertical{margin:0 -1px 0 0;}
    }
    .a-tab-active{
        color:#1890ff;
        border-bottom:2px solid #1890ff;
        transition:all 0.5s;
        &.a-tabs-vertical{
            border-bottom:2px solid transparent;border-right:2px solid #1890ff;
        }
    }
</style>