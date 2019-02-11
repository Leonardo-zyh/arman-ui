<template>
    <div class="a-row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"ARow",
        props:['gutter']
    }
</script>
<style lang="scss">
    .a-row{display:flex;flex-flow:wrap}
</style>