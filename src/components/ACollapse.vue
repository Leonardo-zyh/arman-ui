<template>
    <div class="a-collapse">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"ACollapse",
    }
</script>
<style lang="scss">
    .a-collapse{
        font-size:14px;line-height:1.5;
        color:rgba(0, 0, 0, 0.65);background-color:#fafafa;
        overflow:hidden;
        border:1px solid #d9d9d9;border-radius:4px;
    }
</style>