<template>
    <div>
        <input type="text" :placeholder="holder" :value="value" :disabled="disabled"
               @change="$emit('change',$event.target.value,$event)"
               @input="$emit('input',$event.target.value,$event)"
        >
    </div>
</template>
<script>
    import AIcon from './AIcon'
    export default {
        name:"AInput",
        components:{
            AIcon
        },props:{
            value:{type:String},holder:{type:String},disabled:{type:Boolean,default:false}
        }
    }
</script>
<style lang="scss" scoped>
    div{display:inline-flex;justify-content:center;align-items:center;}
    input{
        height:32px;width:160px;padding:4px 11px;
        font-size:14px;line-height:1.5;
        color:rgba(0, 0, 0, 0.65);background-color:#fff;
        border:1px solid #d9d9d9;border-radius:4px;
        transition:all .3s;
        &:hover{border-color:#40a9ff;}
        &:focus{
            border-color:#40a9ff;
            outline:0;
            box-shadow:0 0 0 2px rgba(24, 144, 255, 0.2);
        }
        &::placeholder{color:#BFBFBF;}
        &[disabled]{
            background:#efefef;
            border-color:#d9d9d9;
            cursor:not-allowed;
        }
    }
</style>