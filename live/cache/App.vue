<template>
    <div class="cache" id="app">
       <div class="module1">我是module1，我是首屏静态固定元素</div>
       <div class="module2">
           <div><span>我是module2Data,我里面包含了一张异步获取的图片</span></div>
           <div><img :src="module2Data" alt="我是快手小六" width="100%" height="80"/></div>
        </div>
        <!-- 组件渲染按照书写顺序 -->
        <extra></extra>
        <sync></sync>
        <async></async>
    </div>
</template>
<script>
// 组件加载并解析是按照引入顺序
import Sync from './components/sync.vue';
import Extra from './components/extra.vue';
import './index.less';
// const Async = import(/* webpackChunkName: "Async" */'./components/async');

// var a = 0;
// const cacheHtml = localStorage.getItem('cache-html');
// if (cacheHtml) {
//     // 还没进入模块的生命周期，即可根据渲染出页面
//     a = +new Date();
//     document.getElementById('app').innerHTML = cacheHtml;
//     // debugger;
//     // 此处已经可以上报fmp了
// }

export default {
    components: {
        Async: () => {
            return import(/* webpackChunkName: "Async" */'./components/async')
        },
        Sync,
        Extra
    },
   
    data() {
        return {
            module2Data: '' || localStorage.getItem('module2Data'),
        };
    },
    async mounted() {
        await this.getData();
        // console.log(`dom缓存可以加速首屏渲染的时间为${+new Date() - a}毫秒`);
        // debugger;
        // 这里根据实际情况，延时，没有异步资源，直接用$nextTick. 有异步资源可以延时几秒或者在离开页面前缓存
        // this.$nextTick(() => {
        //     this.setCacheDom('cache-html', 'app', 'async');
        // });
    },
    methods: {
       async getData() {
           // 模拟一个耗时2s的请求
           return new Promise((res) => {
               setTimeout(() => {
                    this.module2Data = 'https://ali-ad.a.yximgs.com/bs2/businessConversion/f6af7b03-8cf8-463b-956d-19c53d15cdcd_banner%E5%AE%9A%E7%A8%BF1%E5%80%8D670-1980.png';
                    res();
                    localStorage.setItem('module2Data', this.module2Data);
                }, 500);
           });
       },
       setCacheDom(name, rootId, removeClassName) {
            const domNode = document.getElementById(rootId).cloneNode(true);
            // 如果包含非首屏模块，这里移除
            if (removeClassName) {
                domNode.getElementsByClassName(removeClassName).forEach(element => element.remove());
            }
            // localStorage.setItem(name, domNode.innerHTML);
            localStorage.setItem(name, '<div>xxxxxxxxxx</div>');
       }
    }
};
</script>