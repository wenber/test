/* eslint-disable */
export default{
    data(){
        return {
            state: 'pending',
            result: '',
            uid: 0, // 最后发起的请求有效
        }
    },
    props:{
        promise:{
            required: true,
            validator: (value) => Object.prototype.toString.call(value) === '[object Promise]',
        },
    },
    created() {
        this.init();
    },
    watch:{
        // 多次执行加载
        promise:{
            handler: function (){
                this.state = 'pending';
                this.result = '';
                this.init();
            },
        },
    },
    methods: {
        init() {
            this.uid++;
            const targetID = this.uid;
            const me = this;

            me.promise.then((res)=>{
                if (targetID === me.uid) {
                    me.state = 'resolve';
                    me.result = res;
                }

            }).catch((res)=>{
                if (targetID === me.uid) {
                    me.state = 'reject';
                    me.result = res;
                }
            }).catch((e) => {
                console.log(333)
            })
        }
    },
    render(){
        return this.$scopedSlots[this.state]
        && this.$scopedSlots[this.state]({...this.result})
        && this.$scopedSlots[this.state]({...this.result})[0];
    },
}