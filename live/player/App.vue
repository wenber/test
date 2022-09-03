<template>
    <div class="page-wrapper">
        <div ref="videoDom" class="yoda-video"></div>
    </div>
</template>
<script>
import {
    createVideoContext,
    // IVideoContext,
    VideoType,
} from '@ks/yoda-video-player'

const mp4Url =
    'https://txmov2.a.yximgs.com/bs2/newWatermark/MzU4MTk4OTQ2NjA_zh_3.mp4';

export default {
  async mounted() {
    const context = await createVideoContext({
        container: this.$refs.videoDom,
        playerConfig: {
            autoplay: true,
            loop: true,
            objectFit: 'contain',
            videoType: VideoType.MP4,
            src: [{ url: mp4Url }],
        },
    })

    if (!context) {
        console.warn('当前环境不支持创建同层渲染播放器')
    } else {
        this.$refs.player = context
    }
  },

  destroy() {
      if (this.$refs.player) {
          this.$refs.player.destroy()
      }
  }
}

</script>

<style scoped>
.yoda-video {
    height: 500px;
}
</style>
