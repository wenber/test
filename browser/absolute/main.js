import Vue from 'vue'
import App from './App.vue'



new Vue({
  render: h => h(App),
}).$mount('#app')


// absolute 和文档流在同一个层中,可以看到，absolute虽然可以脱离普通文档流，但是无法脱离默认复合层。
// 所以，就算absolute中信息改变时不会改变普通文档流中render树，
// 但是，浏览器最终绘制时，是整个复合层绘制的，所以absolute中信息的改变，仍然会影响整个复合层的绘制
// 图层过多卡顿演示  http://udacity.github.io/60fps/lesson6/willChange/index.html