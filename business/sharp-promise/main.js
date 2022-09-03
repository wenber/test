import Vue from 'vue';
import App from './App.vue';

import sharpPromise from './components/sharp-promise';

Vue.component('sharp-promise',sharpPromise);


new Vue({
  render: h => h(App),
}).$mount('#app')
