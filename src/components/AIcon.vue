<template>
    <svg class="a-icon">
        <use v-bind="{'xlink:href':`#icon-${name}`}"></use>
    </svg>
</template>
<script>
    import '../svg'
    export default {
        name:"AIcon",
        props:['name']
    }
</script>
<style lang="scss">
    .a-icon{width:1em;height:1em;vertical-align:-0.15em;fill:currentColor;overflow:hidden;}
</style>