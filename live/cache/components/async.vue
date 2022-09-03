<template>
    <div class="async">
      我是首屏页面子组件，我是异步引入的asyncComponent，我的存在是为了减小首屏资源包大小
    </div>
</template>
<script>
import './async.less';
// debugger;
// 这是一个异步加载模块，不可以在这里设置缓存dom，因为这里的执行在祖先app替换跟节点之后
export default {
};
</script>
