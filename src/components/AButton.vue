<template>
    <button class="a-button" :class="[type,iconPosition && `icon-${iconPosition}`]" @click="$emit('click',$event)">
        <AIcon v-if="loading" name="loading" class="loading"></AIcon>
        <AIcon v-if="icon && !loading" :name="icon"></AIcon>
        <div class="button-slot"><slot></slot></div>
    </button>
</template>
<script>
    import AIcon from './AIcon'
    export default {
        name:"AButton",
        components:{AIcon},
        props:{
            icon:String,
            iconPosition:{type:String,validator(value){return value==='left' || value==='right' || value==='middle'}},
            type:{type:String},
            loading:{type:Boolean,default:false}
        },
        created(){
            this.$on('click',function(){
                let button=this._self.$el
                button.classList.add('buttonClick')
                setTimeout(()=>{button.classList.remove('buttonClick')},300)
            })
        }
    }
</script>
<style lang="scss">
    .a-button{
        display:inline-flex;justify-content:center;align-items:center;position:relative;vertical-align:middle;
        padding:0 15px;height:32px;font-size:14px;
        border:1px solid #d9d9d9;border-radius:4px;cursor:pointer;
        color:rgba(0, 0, 0, 0.65);background:#fff;
        transition:all 0.3s;
        @keyframes spin{
            0%{transform:rotate(0deg)}
            100%{transform:rotate(360deg)}
        }
        &:hover{color:#40A9FF;border-color:#40A9FF;}
        &:focus{outline:none;color:#40A9FF;border-color:#40A9FF;}
        &:active{color:#096dd9;border-color:#096dd9;}
        & > .loading{animation:spin 1s infinite linear}
        & > .button-slot{order:2;}
        & > svg{order:1;margin:0 0.2em 0 0;}
        &.icon-middle > svg{margin:0;}
        &.icon-right > .button-slot{order:1;}
        &.icon-right > svg{order:2;margin:0 0 0 0.2em;}
    }
    .buttonClick::after{
        content:'';display:block;
        position:absolute;top:0;right:0;
        width:100%;height:100%;
        animation:fade 0.3s linear;
        opacity:0.3;
        @keyframes fade{
            25%{box-shadow:0 0 4px 4px #1890ff}
        }
    }
    .primary{
        color:#fff;
        background:#1890ff;
        border:1px solid #1890ff;
        &:hover{color:#fff;border-color:#40A9FF;background:#40A9FF}
        &:focus{color:#fff;border-color:#40A9FF;background:#40A9FF;outline:none;}
        &:active{color:#fff;border-color:#096dd9;background-color:#096dd9}
    }
    .dashed{
        color:rgba(0, 0, 0, 0.65);
        background:#fff;
        border:1px dashed rgba(0, 0, 0, 0.65);
        &:hover{color:#40A9FF;border-color:#40A9FF;}
        &:focus{color:#40A9FF;border-color:#40A9FF;outline:none;}
        &:active{color:#096dd9;border-color:#096dd9;}
    }
    .danger{
        color:#f5222d;
        background:#f5f5f5;
        border:1px solid #d9d9d9;
        &:hover{color:#fff;border-color:#FF4D4F;background:#FF4D4F;}
        &:focus{color:#f5222d;border-color:#f5222d;background:#fff;outline:none;}
        &:active{color:#fff;border-color:#cf1322;background:#cf1322;}
    }
</style>