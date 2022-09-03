import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { createWebLogger } from '@ks/directive-log';

import { loggerPlugin, sendShow, sendClick } from '@ks/directive-log';

createWebLogger('24424');

Vue.use(loggerPlugin, {
    onClick: sendClick,
    onShow: sendShow,
});

new Vue({
  render: h => h(App),
}).$mount('#app')
