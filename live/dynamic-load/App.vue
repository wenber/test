<!--
 * @Date: 2022-04-08 16:19:24
 * @LastEditTime: 2022-04-08 16:36:42
 * @Description:
-->
<template>
    <div class="huodong">
        <Test2></Test2>
        <button @click="() => load('component1')">点我才加载另一个组件，然后注册，最后显示</button>
        <component :is="component1"></component>
    </div>
</template>
<script>
// import 'systemjs/dist/system';

export default {
    components: {
        Test2: () => import(/* webpackChunkName:'test2' */'./test2')
    },
    data() {
        return {
            component1: '',
        };
    },
    methods: {
        async load() {
            let me = this;
            //  require会被静态分析，导致直接打包在一起了
            // this.$options.components[name] = await eval(`${require(path + '.vue')}`).default;
            // this.$options.components[name] = await `${require(path + '.vue')}`.default;
        //    this.$options.components[name] = await window.System.import('https://static.yximgs.com/kos/nlav10524/api_upload/2020-12-09-20-33-03_bd411dc1-9d68-487d-84fd-e32e81c38f35.js');
            // this.$options.components[name] = a.default;
            // import不能直接传入一个变量，比较尴尬，这里还只能这样写死
            me.$options.components[name] = (await import(/* webpackChunkName:'test1' */'./test1')).default;
            me.[name] = name;
        }
    }
};
</script>