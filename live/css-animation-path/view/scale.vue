<template>
    <div class="curvemove">
        <button @click="onScaleXClick">scaleX缩放</button>
        <button @click="onScaleYClick">scaleY缩放</button>
        <!-- <button @click="onScaleZClick">scaleZ缩放</button> -->
        <button @click="onScaleXYZClick">scaleXY缩放</button>
        <button @click="onZoomClick">zoom缩放</button>
        <button @click="onWidthClick">width缩放</button>
        <button @click="onHeightClick">height缩放</button>
        <BOX3D>
            <div class="content">
                <div class="innerbox" ref="innerbox"></div>
                <div class="otherbox"></div>
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
        onScaleXClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('scaleToX')){
                box.className = 'innerbox scaleBackX';
            }else {
                box.className = 'innerbox scaleToX';
            }
        },
        onScaleYClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('scaleToY')){
                box.className = 'innerbox scaleBackY';
            }else {
                box.className = 'innerbox scaleToY';
            }
        },
        onScaleZClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('scaleToZ')){
                box.className = 'innerbox scaleBackZ';
            }else {
                box.className = 'innerbox scaleToZ';
            }
        },
        onScaleXYZClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('scaleToXYZ')){
                box.className = 'innerbox scaleBackXYZ';
            }else {
                box.className = 'innerbox scaleToXYZ';
            }
        },
        onZoomClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('zoomToN')){
                box.className = 'innerbox zoomBackN';
            }else {
                box.className = 'innerbox zoomToN';
            }
        },
        onWidthClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('widthToN')){
                box.className = 'innerbox widthBackN';
            }else {
                box.className = 'innerbox widthToN';
            }
        },
        onHeightClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('heightToN')){
                box.className = 'innerbox heightBackN';
            }else {
                box.className = 'innerbox heightToN';
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
        position: relative;
        left: 250px;
        top: 250px;
        .innerbox{
            width: 50px;
            height: 50px;
            // border: 2px solid black;
            background-color: black;
            transition: transform 1s, zoom 1s, width 1s, height 1s;
            margin: 20px;
            float: left;
            transform: rotateY(0deg) scaleZ(1);
        }
        .otherbox{
            width: 50px;
            height: 50px;
            background-color: black;
            float: left;
            margin: 20px;
        }
        .scaleToX{
            transform: rotateY(0deg) scaleX(4);
        }
        .scaleBackX{
            transform: rotateY(0deg) scaleX(1);
        }
        .scaleToY{
            transform: rotateY(0deg) scaleY(4);
        }
        .scaleBackY{
            transform: rotateY(0deg) scaleY(1);
        }
        .scaleToZ{
            transform-origin: 50% 50% 0;
            transform: rotateY(90deg) scaleZ(4);
        }
        .scaleBackZ{
            transform-origin: 50% 50% 0;
            transform: rotateY(90deg) scaleZ(1);
        }
        .scaleToXYZ{
            transform: rotateY(0deg) scale3d(4, 4, 4);
        }
        .scaleBackXYZ{
            transform: rotateY(0deg) scale3d(1, 1, 1);
        }
        .zoomToN{
            zoom: 2;
        }
        .zoomBackN{
            zoom: 1;
        }
        .widthToN{
            width: 300px;
        }
        .widthBackN{
            width: 50px;
        }
        .heightToN{
            height: 300px;
        }
        .heightBackN{
            height: 50px;
        }
    }
}
</style>