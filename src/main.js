import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import "./styles/normalize.scss"
import "./styles/base.scss"
import "./styles/style.scss"
import './styles/variables.scss'
import './plugins/element.js'
