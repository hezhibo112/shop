import dialogConfig from '@/components/dialog/index.vue'
class Dialog{
    constructor(Vue,options){
        this.options = options
        this.dialogClass = Vue.extend(dialogConfig)
        Dialog.dialogComponent = this.getDialogComponent();
        this.open();
        if(this.options.type !== 'alert'){
            this.oPromise = new Promise((resolve,reject)=>{
                Dialog.resolve = resolve;
                Dialog.reject = reject;
            })
            return this.oPromise;
        }
    }
    getDialogComponent(){
        let dialogClass = this.dialogClass;
        if(Dialog.dialogComponent instanceof dialogClass){
            return Dialog.dialogComponent
        }
        let dialogComponent = new dialogClass({
            propsData:{
                type:this.options.type,
                showClose:this.options.showClose,
                sureEvent:this.sureEvent.bind(this),
                cancelEvent:this.cancelEvent.bind(this),
                message:this.options.message,
                sure:this.options.sure,
                not:this.options.not
            }
        });
        dialogComponent.$mount()
        let el = dialogComponent.$el;
        document.body.appendChild(el);
        return dialogComponent;
    }
    open(){
        Dialog.dialogComponent.openDialog()
    }
    sureEvent=()=>{
        Dialog.resolve()
    }
    cancelEvent=()=>{
        Dialog.reject()
    }
}

export default Dialog