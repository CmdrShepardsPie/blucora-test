import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { APIService } from "@/services/api-service";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  provide: {
    APIService: new APIService()
  }
}).$mount('#app')
