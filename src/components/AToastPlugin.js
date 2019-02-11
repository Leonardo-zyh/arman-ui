import AToast from "./AToast"
let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast=function(content,position,autoClose,closeText,closeFn){
            if(currentToast){currentToast.close()}
            let Constructor=Vue.extend(AToast)
            let toast=new Constructor({
                propsData:{content,position,autoClose,closeText,closeFn}
            })
            // toast.$slots.default = [content]
            toast.$mount()
            document.body.appendChild(toast.$el)
            currentToast=toast
        }
    }
}