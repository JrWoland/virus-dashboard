import Vue from 'vue'
import './assets/scss/style.scss'
import ElementUI from 'element-ui'
import './assets/scss/element-ui/theme/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
