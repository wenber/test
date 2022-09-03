<!--
 * @Date: 2022-04-08 16:19:24
 * @LastEditTime: 2022-04-08 16:35:19
 * @Description:
-->
<template>
    <div class="test1"> 我是Test1,进入页面用户自定义时机加载的模块，不会打包在bundle里，实现了真正的按需 </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
.test1 {
    border: 1px dashed #ff5000 ;
    height: 100px;
}
</style>
