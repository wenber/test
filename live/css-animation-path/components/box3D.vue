<template>
    <div class="box">
        <div class="fronted panel"></div>
        <div class="back panel"></div>
        <div class="top panel"></div>
        <div class="bottom panel"></div>
        <div class="left panel"></div>
        <div class="right panel"></div>
        <slot></slot>
    </div>
</template>
<style lang="less" scoped>
.box{
    width: 600px;
    height: 600px;
    position: relative;
    perspective: 1000px;
    perspective-origin: 900px 300px;
    .panel{
        width: 600px;
        height: 600px;
        border: 2px dashed;
        position: absolute;
        left: 0;
        top: 0;
        background: url('../imgs/bg.jpg');
    }
    .fronted{
        // border-color: red;
        // border-style: solid;
        background: none;
    }
    .back{
        // background-color: black;
        transform: translateZ(-600px);
    }
    .top{
        // background-color: blue;
        // border-color: blue;
        transform: rotateX(-90deg);
        transform-origin: 0 0;
        // background: none;
    }
    .bottom{
        // background-color: darkmagenta;
        // border-color: darkmagenta;
        transform: rotateX(90deg);
        transform-origin: 0 bottom;
    }
    .left{
        // background-color: green;
        // border-color: green;
        transform: rotateY(90deg);
        transform-origin: 0 0;
    }
    .right{
        // background-color: yellow;
        // border-color: yellow;
        transform: rotateY(-90deg);
        transform-origin: right 0;
        // border-style: solid;
        background: none;
    }
}
</style>