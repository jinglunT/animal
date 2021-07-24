import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { firestorePlugin } from 'vuefire'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
