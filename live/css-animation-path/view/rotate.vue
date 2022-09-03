<template>
    <div class="rotate">
        <button @click="onRotateXClick">x轴旋转</button>
        <button @click="onRotateYClick">Y轴旋转</button>
        <button @click="onRotateZClick">z轴旋转</button>
        <button @click="onRotateXYZClick">自定义轴旋转</button>
        <button @click="onRotateOriginXYZClick">变换origin自定义轴旋转</button>
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
    components: {
        BOX3D,
    },
    methods:{
        onRotateXClick() {
            const box = this.$refs.innerbox;
            console.log(box);
            if (box.className.includes('rotateToX')){
                box.className = 'innerbox rotateBackX';
            }else {
                box.className = 'innerbox rotateToX';
            }
        },
        onRotateYClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('rotateToY')){
                box.className = 'innerbox rotateBackY';
            }else {
                box.className = 'innerbox rotateToY';
            }
        },
        onRotateZClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('rotateToZ')){
                box.className = 'innerbox rotateBackZ';
            }else {
                box.className = 'innerbox rotateToZ';
            }
        },
        onRotateXYZClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('rotateToXYZ')){
                box.className = 'innerbox rotateBackXYZ';
            }else {
                box.className = 'innerbox rotateToXYZ';
            }
        },
        onRotateOriginXYZClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('rotateOriginToXYZ')){
                box.className = 'innerbox rotateOriginBackXYZ';
            }else {
                box.className = 'innerbox rotateOriginToXYZ';
            }
        }
    }
}
</script>
<style lang="less" scoped>
.rotate{
    button{
        margin: 0 10px 10px 0;
    }
    .content{
        position: relative;
        left: 250px;
        top: 250px;
        .innerbox{
            width: 150px;
            height: 150px;
            // border: 2px solid black;
            background-color: black;
            transition: transform 1s;
            margin: 20px;
            float: left;
            // transform: rotateY(0deg) rotateZ(1);
        }
        .rotateToX{
            transform: rotateX(-90deg);
        }
        .rotateBackX{
            transform: rotateX(0deg);
        }
        .rotateToY{
            transform: rotateY(-90deg);
        }
        .rotateBackY{
            transform: rotateY(0deg);
        }
        .rotateToZ{
            transform: rotateZ(-90deg);
        }
        .rotateBackZ{
            transform: rotateZ(0deg);
        }
        .rotateToXYZ{
            transform: rotate3D(-1, -1, -1, 90deg);
        }
        .rotateBackXYZ{
            transform: rotate(0);
        }
        .rotateOriginToXYZ{
            transform-origin: 150px 150px -200px;
            transform: rotate3D(-1, -1, -1, 270deg);
        }
        .rotateOriginBackXYZ{
            transform-origin: 150px 150px -200px;
            transform: rotate(0);
        }
    }
}
</style>