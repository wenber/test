<template>
    <div class='skew'>
        <button @click="onOpacityXClick">透明度变换</button>
        <button @click="onColorClick">背景色变换</button>
        <button @click="onFreeClick">动态序列变换</button>
        <button @click="onBgClick">css背景序列变换</button>
        <div class="content">
            <div class='innerbox' ref='innerbox'></div>
        </div>
        <div class="content2">
            <div class='freebox activited'></div>
            <div class='freebox'></div>
            <div class='freebox'></div>
            <div class='freebox'></div>
            <div class='freebox'></div>
            <div class='freebox'></div>
            <div class='freebox'></div>
        </div>
        <div class="content3" :style="{backgroundImage: `url(${require('../imgs/1.gif')})`}"></div>
    </div>
</template>
<script>
export default {
    name: 'skew',
    data(){
        return {
            timerBg: null,
            timerFree: null,
        }
    },
    methods:{
        onOpacityXClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('opacityToX')){
                box.className = 'innerbox opacityBackX';
            }else {
                box.className = 'innerbox opacityToX';
            }
        },
        onColorClick() {
            const box = this.$refs.innerbox;
            if (box.className.includes('colorToY')){
                box.className = 'innerbox';
            }else {
                box.className = 'innerbox colorToY';
            }
        },
        onFreeClick() {
            const freebox = document.getElementsByClassName('freebox');
            if (!this.timerFree) {
                this.timerFree = setInterval(() => {
                    let next = 0;
                    for(let i=0; i< freebox.length; i++) {
                        if (freebox[i].className.includes('activited')){
                            // console.log(freebox[i], i);
                            freebox[i].className = 'freebox';
                            if (i === 6) {
                                next = 0
                            } else {
                                next = i + 1;
                            }
                        }
                        // freebox.className = 'freebox'
                    }
                    freebox[next].className = 'freebox activited';
                }, 250);
            } else {
                clearInterval(this.timerFree);
                this.timerFree = null;
            }
            
        },
        onBgClick() {
            const content3 = document.querySelector('.content3');
            if(!this.timerBg) {
                let i = 1;
                this.timerBg = setInterval(() => {
                    if (i > 6 ) {
                        i = 1;
                        content3.style.backgroundImage = `url(${require('../imgs/' + i + '.gif')})`;
                    } else {
                        content3.style.backgroundImage = `url(${require('../imgs/' + i + '.gif')})`;
                        i++;
                    }
                }, 60);
            } else {
                clearInterval(this.timerBg);
                this.timerBg = null;
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
            transition: opacity 1s;
            margin: 20px;
        }
        .otherbox{
            width: 50px;
            height: 50px;
            background-color: black;
            float: left;
            margin: 20px;
        }
        .opacityToX{
            opacity: 0;
            // transform: skew(-45deg);
        }
        .opacityBackX{
            opacity: 1;
            // transform: skew(0deg);
        }
        .colorToY{
            animation: colorTo 2s linear;
        }
        @keyframes colorTo {
            0%{
                background: black;
            }
            33%{
                background: yellow;
            }
            66%{
                background: red;
            }
            100%{
                background: black;
            }
        }
    }
    .content2{
        width: 800px;
        height: 800px;
        border: 2px solid black;
        position: relative;
        top: 50px;
        .freebox{
            width: 100px;
            height: 100px;
            background: black;
            opacity: 0.3;
            float: left;
            margin: 30px;
        }
        .activited{
            transition: 0.5s;
            transform: scale(1.5);
            opacity: 1;
        }
    }
    .content3{
        width: 400px;
        height: 400px;
        background: no-repeat center center / contain;
    }
}
</style>