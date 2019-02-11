<template>
    <div class="a-tabs" :class="vertical && `a-tabs-vertical`">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name:"ATabs",
        props:{
            vertical:{type:Boolean,default:false}
        },
        provide(){return {eventBus:new Vue(),vertical:this.vertical}
        },
        mounted(){
            this.$children[0].$children[0].action = 'a-tab-active'
            this.$children[1].$children[0].action = 'a-content-active'
        }
    }
</script>
<style lang="scss">
    .a-tabs{
        color:rgba(0,0,0,0.65);
        line-height:21px;font-size:14px;
        &.a-tabs-vertical{
            display:flex;
        }
    }
</style>