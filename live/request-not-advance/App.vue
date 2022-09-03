<template>
  <div id="app">
    <div class="title">主要需要分析网络请求</div>
    <div class="test-img div1"></div>
    <div class="test-img div2"></div>
    <div class="test-img div3"></div>
    <div class="test-img div4"></div>
    <div class="test-img div5"></div>
    <div class="test-img div6"></div>
    <div class="test-img div7"></div>
  </div>
</template>

<script>
import { fetchData } from './service';

export default {
  data () {
    return {
      tab1Data: [],
      tab2Data: []
    }
  },
  async created () {
    const res = await fetchData();
    console.log(res);
  },
  mounted () {

  },
  methods: {

  }
};
</script>

<style lang="less">
#app {
  .title {
    width: 200px;
    text-align: center;
    margin: 0 auto;
  }
  .test-img {
    width: 100px;
    height: 100px;
    margin: 10px auto 10px;
  }
  .div1 {
    background: url(//ali.static.yximgs.com/udata/pkg/doodle_static/reward.388aa2fd.png)
      no-repeat center / cover;
  }
  .div2 {
    background: url(//ali.static.yximgs.com/udata/pkg/doodle_static/header.72c51a0b.png)
      no-repeat center / cover;
  }
  .div3 {
    background: url(//ali.static.yximgs.com/udata/pkg/doodle_static/rule.30815d5b.png)
      no-repeat center / cover;
  }
  .div4 {
    background: url(//ali.static.yximgs.com/udata/pkg/doodle_static/countdownbg.de694a5f.png)
      no-repeat center / cover;
  }
  .div5 {
    background: url(//ali.static.yximgs.com/udata/pkg/doodle_static/reward.388aa2fd.png)
      no-repeat center / cover;
  }
  .div6 {
    background: url(//ali.static.yximgs.com/udata/pkg/doodle_static/activityend.1c2c5900.png)
      no-repeat center / cover;
  }
}
</style>
