<template>
    <div class="a-toast-wrapper">
        <div class="a-toast" :class="`a-toast-${position}`">
            <span class="a-toast-content">{{content}}</span>
            <span class="a-toast-close" v-if="closeText" @click="closeClick">{{closeText}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name:"AToast",
        props:{
            content:{type:String},
            position:{
                type:String,default:'top',
                validator(value){return ['top','middle','bottom'].indexOf(value)!== -1}
            },
            autoClose:{type:Number},
            closeText:{type:String},
            closeFn:{type:Function}
        },
        mounted(){
            if(this.autoClose){setTimeout(()=>{this.close()},this.autoClose*1000)}
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            closeClick(){
                this.close()
                this.closeFn(this)
            }
        }
    }
</script>
<style lang="scss">
    .a-toast-wrapper{
        display:flex;align-items:center;justify-content:center;
    }
    .a-toast{
        display:flex;align-items:center;justify-content:center;
        position:fixed;
        font-size:14px;line-height:22px;
        background:rgba(0, 0, 0, 0.75);color:white;
        box-shadow:0 0 3px 0 rgba(0, 0, 0, 0.5);
        &-top{
            top:0;
            animation:toastTop .1s linear;
            border-radius:0 0 4px 4px;
        }
        &-middle{
            top:50%;transform:translateY(-50%);
            animation:toastMiddle .3s linear;
            border-radius:4px;
        }
        &-bottom{
            bottom:0;
            animation:toastBottom .1s linear;
            border-radius:4px 4px 0 0;
        }
        @keyframes toastTop{
            0%{opacity:0;transform:translateY(-100%)}
            100%{opacity:1;transform:translateY(0)}
        }
        @keyframes toastMiddle{
            0%{opacity:0}
            100%{opacity:1}
        }
        @keyframes toastBottom{
            0%{opacity:0;transform:translateY(100%)}
            100%{opacity:1;transform:translateY(0)}
        }
    }
    .a-toast-content{
        position:relative;
        padding:4px 16px;
        &::after{
            content:'';position:absolute;right:0;top:0;
            width:1px;height:100%;
            background:#aaa;
        }
    }
    .a-toast-close{
        flex-shrink:0;
        height:100%;padding:4px 16px;
        cursor:pointer;
    }
</style>