<template>
    <div id="app">
        <div style="border:1px solid #eee; position:relative;">
            <canvas id="canvas-1" width="500" height="300" ref="canvas">
            </canvas>
            <div class="text">afsdfasdf</div>
            <br/>
            <input type="button" value="播放"  ref="play" />
            <input type="button" value="暂停"  ref="stop" />
            <br/>
        </div>
    </div>
</template>

<script>

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  mounted() {
        var timer = null;
        var video = document.createElement("video");
        var canvas = this.$refs.canvas;
        var ctx = canvas.getContext("2d");


        function drawTip(text) {
            ctx.font = "24px Microsoft YaHei";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(text,canvas.width/2,canvas.height/2);
        }

        function init() {
            drawTip("正在缓冲中....");
            video.src = "https://www.twle.cn/static/i/html/html_video_2.mp4"
        }

        video.oncanplay = function() {
            drawTip("加载完毕，开始播放")
        }

        function play() {
            init();
            video.play();
            timer = setInterval(function(){
              if(video.currentTime >= video.duration){
                stop();
              }
              ctx.drawImage(video, (canvas.width-video.videoWidth)/2, (canvas.height-video.videoHeight)/2, video.videoWidth, video.videoHeight);//绘制视频
           },16);
        }

        function stop(){
            clearInterval(timer);
            video.pause();
        }

        this.$refs.play.onclick = function(){ play();}
        this.$refs.stop.onclick = function(){ stop();}
    }
};
</script>

<style lang="less">
@import url('./a.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .a{
    color: yellow;
  }
  .text {
    position: absolute;
    left: 50%;
    top: 50%;
    background: red;
  }
}
</style>
