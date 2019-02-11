<template>
    <div class="a-button-group"><slot></slot></div>
</template>
<script>
    export default {
        name:"AButtonGroup",
    }
</script>
<style lang="scss">
    .a-button-group{
        display:inline-flex;
        vertical-align:middle;
        > button{border-radius:0;
            &:not(:first-child){margin-left:-1px;}
            &:first-child{border-radius:4px 0 0 4px;}
            &:last-child{border-radius:0 4px 4px 0;}
            &:hover{border-color:#d9d9d9;}
            &:focus{position:relative;z-index:1;border-color:#40A9FF}
        }
    }
</style>