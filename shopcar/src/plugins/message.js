import Dialog from './dialog.js'
export default {
    install(Vue){
        Vue.prototype.$message=function(options){
            // if(options.type==='alert'){
            //     return new Dialog(Vue,options)
            // }
            // else{
                let dialog = new Dialog(Vue,options)
                return dialog;
            // }
        }
    }   
}