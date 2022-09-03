/*
 * @Date: 2022-04-08 16:19:24
 * @LastEditTime: 2022-04-08 16:27:37
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



// console.log(1);

// const promise = new Promise(re => {
//   console.log(2);
//   re();
//   console.log(3);
// })

// async function foo() {
//   console.log(4);
//   await promise;
//   console.log(6);
// }

// foo();

// promise.then(() => {
//   console.log(7);
// })

// setTimeout(() => {
//   console.log(8);
// })

// console.log(5);