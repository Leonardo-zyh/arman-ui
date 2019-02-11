<template>
    <div class="a-tabs-tab-w" :class="vertical && `a-tabs-vertical`">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"ATabsTabW",
        inject:['vertical']
    }
</script>
<style lang="scss">
    .a-tabs-tab-w{
        display:flex;
        margin:0 0 16px 0;
        border-bottom:1px solid #E8E8E8;
        &.a-tabs-vertical{
            flex-flow:column;text-align:right;
            margin:0 16px 0 0;
            border-bottom:none;border-right:1px solid #E8E8E8;
        }
    }
</style>