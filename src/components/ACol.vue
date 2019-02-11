<template>
    <div v-if="gutter" class="gutter-box" :class="colClass" :style="colStyle">
        <div class="a-col">
            <slot></slot>
        </div>
    </div>
    <div v-else class="a-col" :class="colClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"ACol",
        props:['span','offset','spanS','spanM','offsetS','offsetM'],
        data(){
            return {gutter:this.$parent.gutter}
        },
        computed:{
            colClass(){
                let {span,spanS,spanM,offset,offsetS,offsetM}=this
                return [
                    span && `col-${span}`,
                    spanS && `col-s-${spanS}`,
                    spanM && `col-m-${spanM}`,
                    offset && `offset-${offset}`,
                    offsetS && `offset-s-${offsetS}`,
                    offsetM && `offset-m-${offsetM}`
                ]
            },
            colStyle(){
                return {paddingLeft:this.gutter/2+'px',paddingRight:this.gutter/2+'px'}
            }
        }
    }
</script>
<style lang="scss">
    .a-col{
        display:flex;justify-content:center;align-items:center;
        margin-top:10px;margin-bottom:10px;
        height:100px;width:100%;
        border:2px solid #00A0E9;
    }
    .gutter-box{display:flex;justify-content:center;align-items:center;}
    @for $n from 0 through 24{
        .col-#{$n}{width:($n/24)*100%;}
    }
    @for $n from 0 through 24{
        .offset-#{$n}{margin-left:($n/24)*100%;}
    }
    @media (max-width:992px){
        @for $n from 0 through 24{
            .col-m-#{$n}{width:($n/24)*100%;}
        }
        @for $n from 0 through 24{
            .offset-m-#{$n}{margin-left:($n/24)*100%;}
        }
    }
    @media (max-width:576px){
        @for $n from 0 through 24{
            .col-s-#{$n}{width:($n/24)*100%;}
        }
        @for $n from 0 through 24{
            .offset-s-#{$n}{margin-left:($n/24)*100%;}
        }
    }
</style>