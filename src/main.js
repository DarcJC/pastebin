import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/reset.css'

import DirectusSDK from '@directus/sdk-js';

Vue.config.productionTip = false

const directus = new DirectusSDK('https://cms.darc.pro');
Vue.prototype.$cms = directus;

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min'
import 'prismjs/plugins/autolinker/prism-autolinker.min'
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min'
Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
});

import Beian from "@/components/Beian";
Vue.use(Beian);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
