<template>
    <div class="curvemove">
        <button @click="onCircleClick">圆形运动</button>
        <button @click="onSimpleCurveClick">简单的曲线运动</button>
        <button @click="onLineCurveClick">直线加旋转</button>
        <BOX3D>
            <div class="content">
                <div class="innerbox" ref="innerbox"></div>
            </div>
        </BOX3D>
    </div>
</template>
<script>
import BOX3D from '../components/box3D.vue';
export default {
    name:'curvemove',
    components:{
        BOX3D,
    },
    methods:{
        onCircleClick() {
            const innerbox = this.$refs.innerbox;
            if (innerbox.className.includes('movecircle')){
                innerbox.className = "innerbox";
            } else {
                innerbox.className = "innerbox movecircle";
            }
        },
        onSimpleCurveClick() {
            const innerbox = this.$refs.innerbox;
            if (innerbox.className.includes('movecurve')){
                innerbox.className = "innerbox";
            } else {
                innerbox.className = "innerbox movecurve";
            }
        },
        onLineCurveClick() {
            const innerbox = this.$refs.innerbox;
            if (innerbox.className.includes('moveLineAndRotate')){
                innerbox.className = "innerbox";
            } else {
                innerbox.className = "innerbox moveLineAndRotate";
            }
        }
    }
}
</script>
<style lang="less" scoped>
.curvemove{
    button{
        margin: 0 10px 10px 0;
    }
    .content{
        .innerbox{
            position: absolute;
            left: 150px;
            top: 150px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: black;
            transition: transform 1s;
            transform-origin: 150px 150px;
            transform: rotateZ(0);
        }
        .movecircle{
            transform: rotateZ(360deg);
        }
        .moveLineAndRotate{
            transform: rotateZ(360deg) translateX(300px) translateY(300px);
        }
        .movecurve{
            // transform: 
            animation: moveX 2s linear infinite, moveY 2s cubic-bezier(.59,.01,.4,.99) infinite;
        }
        @keyframes moveX {
            0%{
                left: 150px;
            }
            50%{
                left: 500px
            }
            100%{
                left: 150px;
            }
        }
        @keyframes moveY {
            0%{
                // transform: t;
                top: 150px;
            }
            50%{
                top: 500px;
            }
            100%{
                // transform: t;
                top: 150px;
            }
        }
    }
}
</style>