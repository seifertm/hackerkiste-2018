import Vue from 'vue'
import App from './App.vue'

import Eagle from 'eagle.js'
import 'eagle.js/dist/eagle.css'
import 'eagle.js/dist/themes/gourmet/gourmet.css'
import 'animate.css'

import hljs from 'highlight.js'
import { Options } from 'eagle.js'
Options.hljs = hljs

Vue.use(Eagle)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
