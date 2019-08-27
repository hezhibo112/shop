import Dialog from './dialog.js'
export default {
    install(Vue){
        Vue.prototype.$message=function(options){
                let dialog = new Dialog(Vue,options)
                return dialog;
        }
    }   
}