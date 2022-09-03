<template>
    <div class="movePage">
      <button @click="onVMoveClick">垂直位移</button>
      <button @click="onLMoveClick">水平位移</button>
      <button @click="onMoveXYClick">x1y1->x2y2</button>
      <button @click="onMoveZClick">z轴位移</button>
      <button @click="onMoveXYZClick">x1y1z1->x2y2z2</button>
      <BOX3D>
        <div class="innerpanel move">
          <div class='innerbox' ref="movebox"></div>
        </div>
      </BOX3D>

    </div>
</template>
<script>
import BOX3D from '../components/box3D.vue'; 

export default {
  name: "App",
  components:{
    BOX3D,
  },
  methods:{
    onVMoveClick() {
      const box = this.$refs.movebox;
      if (box.className.includes('vmoveTo')){
        box.className = 'innerbox vmoveBack';
      }else {
        box.className = 'innerbox vmoveTo';
      }
    },
    onLMoveClick() {
      const box = this.$refs.movebox;
      if (box.className.includes('lmoveTo')){
        box.className = 'innerbox lmoveBack';
      }else {
        box.className = 'innerbox lmoveTo';
      }
    },
    onMoveXYClick() {
        const box = this.$refs.movebox;
        if (box.className.includes('moveToXY')){
          box.className = 'innerbox moveBackXY';
        }else {
          box.className = 'innerbox moveToXY';
        }
    },
    onMoveZClick() {
      const box = this.$refs.movebox;
      if (box.className.includes('moveToZ')){
        box.className = 'innerbox moveBackZ';
      }else {
        box.className = 'innerbox moveToZ';
      }
    },
    onMoveXYZClick() {
      const box = this.$refs.movebox;
      if (box.className.includes('moveToXYZ')){
        box.className = 'innerbox moveBackXYZ';
      }else {
        box.className = 'innerbox moveToXYZ';
      }
    }
  },
  mounted() {
        
  }
};
</script>

<style lang="less" scoped>
.movePage{
  button{
    margin: 10px;
  }
  .innerpanel{
    width: 100%;
    height: 600px;
    // border: 1px solid black;
    position: relative;
  }
  .innerbox{
    position: absolute;
    left: 50px;
    top: 50px;
    width: 150px;
    height: 150px;
    background-color: black;
  }
  .move{
    // perspective-origin: 85px 125px;
    .innerbox{
      transition: transform 1s;
    }
    .vmoveTo{
      transform: translateY(200px);
    }
    .vmoveBack{
      transform: translateY(0);
    }
    .lmoveTo{
      transform: translateX(200px);
    }
    .lmoveBack{
      transform: translateX(0);
    }
    .moveToXY{
      transform: translate3d(250px, 300px, 0);
    }
    .moveBackXY{
      transform: translate3d(0, 0, 0);
    }
    .moveToZ{
      transform: translateZ(-950px);
    }
    .moveBackZ{
      transform: translateZ(0);
    }
    .moveToXYZ{
      transform: translate3d(200px, 300px, -600px);
    }
    .moveBackXYZ{
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>
