<template>
    <div class="sync">
      我是首屏页面子组件，我是同步引入的syncComponent, 我是为了细粒度拆分功能而存在
    </div>
</template>
<script>
import './sync.less';
// debugger;
// 这是一个同步模块，可以在这里设置缓存dom
export default {
//    beforeCreate() {
//         debugger;
//     },
//     created() {
//         debugger;
//     },
//     mounted(){
//         // 全部插入dom后，先触发子组件，然后顺序触发兄弟组件，最后触发父组件
//         debugger;
//     }
};
</script>
