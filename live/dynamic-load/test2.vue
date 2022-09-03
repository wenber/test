<template>
    <div class="test2"> 我是Test2,进入页面后异步加载的模块，不会打包在bundle里，可以减小主打包体积 </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
.test2 {
    border: 1px dashed #ff9000 ;
    height: 100px;
}
</style>
