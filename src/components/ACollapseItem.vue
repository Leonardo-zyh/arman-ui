<template>
    <div class="a-collapse-item">
        <div class="a-collapse-header" @click="toggle">
            <AIcon class="a-collapse-icon" name="right" :class="myActive && `a-collapse-icon-active`"></AIcon>
            {{title}}
        </div>
        <div class="a-collapse-content" :class="myActive && `a-collapse-content-active`" :style="{height:height}">
            <div class="a-collapse-content-box" ref="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import AIcon from './AIcon'
    export default {
        name:"ACollapseItem",
        components:{AIcon},
        props:{
            title:{type:String,require:true},
            active:{type:Boolean,default:false}
        },
        data(){
            return {
                height:'0',
                myActive:false
            }
        },
        created(){
            if(this.active){
                setTimeout(()=>{this.toggle()})
            }
        },
        methods:{
            toggle(){
                if(this.myActive){
                    this.myActive=false
                    this.height='0'
                }else{
                    this.myActive=true
                    this.height=this.$refs.content.getBoundingClientRect().height+'px'
                }
            }
        }
    }
</script>
<style lang="scss">
    .a-collapse-item:not(:last-child){border-bottom:1px solid #d9d9d9;}
    .a-collapse-icon{
        position:absolute;left:16px;top:16px;
        width:12px;height:12px;
        transition:all .3s;
    }
    .a-collapse-icon-active{
        transform:rotate(90deg);
    }
    .a-collapse-header{
        padding:12px 0 12px 40px;
        color:rgba(0, 0, 0, 0.85);
        cursor:pointer;
        position:relative;
    }
    .a-collapse-content{
        overflow:hidden;
        opacity:0;
        transition:all .3s;
    }
    .a-collapse-content-active{
        opacity:1;
        transition:height .3s;
    }
    .a-collapse-content-box{
        padding:16px;
        background-color:#fff;
        border-top:1px solid #d9d9d9;
    }
</style>