<template>
  <div class="box">
    <div ref="anim" class="anim-container"></div>
    <button :class="[!access && 'disable']" @click.stop="play(0)">play(无融合)</button>
    <button :class="[!access && 'disable']" @click.stop="play(1)">play(有融合)</button>
  </div>
</template>

<script>
import config from './demo.json'
import Vap from 'video-animation-player'

export default {
  name: 'vap',
  data () {
    return {
      access: true,
      url: 'https://static.yximgs.com/udata/pkg/ks-ad-fe/business_activity/demo.mp4'
    }
  },
  methods: {
    play (flag) {
      if (!this.access) {
        return
      }
      const that = this
      const vap = new Vap(Object.assign({}, {
        container: this.$refs.anim,
        // 素材视频链接
        src: this.url,
        // 素材配置json对象
        config: config,
        width: 900,
        height: 600,
        // 同素材生成工具中配置的保持一致
        fps: 20
      }, flag ? {
        // 融合信息（图片/文字）,同素材生成工具生成的配置文件中的srcTag所对应，比如[imgUser] => imgUser
        imgUser: '//shp.qlogo.cn/pghead/Q3auHgzwzM6TmnCKHzBcyxVPEJ5t4Ria7H18tYJyM40c/0',
        imgAnchor: '//shp.qlogo.cn/pghead/PiajxSqBRaEKRa1v87G8wh37GibiaosmfU334GBWgk7aC8/140',
        textUser: 'user1',
        textAnchor: 'user2',
        type: 2
      } : {type: 1}))
        .on('playing', () => {
          that.access = false
          console.log('playing')
        })
        .on('ended', () => {
          that.access = true
          console.log('play ended')
        })
      console.log(vap)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body,html{
  margin: 0;
  padding: 0;
}
.anim-container {
  width: 900px;
  height: 600px;
  border: 1px solid #cccccc;
}
button.disable {
  background: gray;
}
.box{
  width: 100vw;
  height: 100vh;
  background: red;
  padding: 100px;
  box-sizing: border-box;
}
</style>
