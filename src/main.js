import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { firestorePlugin } from 'vuefire'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueMarkdown from 'vue-markdown'

Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  components: {
    VueMarkdown
  },
  router,
  render: h => h(App)
}).$mount('#app')
