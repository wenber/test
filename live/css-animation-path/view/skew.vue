<template>
    <div class='skew'>
        <button @click="onSkewXClick">x轴倾斜</button>
        <button @click="onSkewYClick">y轴倾斜</button>
        <button @click="onSkewXYClick">xy轴倾斜</button>
        <div class="content">
            <div class='innerbox' ref='innerbox'></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'skew',
    methods:{
        onSkewXClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('skewToX')){
                box.className = 'innerbox skewBackX';
            }else {
                box.className = 'innerbox skewToX';
            }
        },
        onSkewYClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('skewToY')){
                box.className = 'innerbox skewBackY';
            }else {
                box.className = 'innerbox skewToY';
            }
        },
        onSkewXYClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('skewToXY')){
                box.className = 'innerbox skewBackXY';
            }else {
                box.className = 'innerbox skewToXY';
            }
        }
    }
}
</script>
<style lang="less" scoped>
.skew{
    button{
        margin: 0 10px 10px 0;
    }
    .content{
        position: relative;
        left: 50px;
        top: 50px;
        .innerbox{
            width: 150px;
            height: 150px;
            // border: 2px solid black;
            background-color: black;
            transition: transform 1s;
            margin: 20px;
        }
        .otherbox{
            width: 50px;
            height: 50px;
            background-color: black;
            float: left;
            margin: 20px;
        }
        .skewToX{
            transform: skew(30deg);
        }
        .skewBackX{
            transform: skew(0deg);
        }
        .skewToY{
            transform: skewY(30deg);
        }
        .skewBackY{
            transform: skewY(0deg);
        }
        .skewToXY{
            transform: skew(30deg, 30deg);
        }
        .skewBackXY{
            transform: skew(0deg);
        }
    }
}
</style>