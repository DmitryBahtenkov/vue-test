import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Toast from 'vue-toastification';
import "vue-toastification/dist/index.css";
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Toast);
Vue.use(VueRouter);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

axios.interceptors.response.use(undefined, error => {
  if(error?.response?.status) {
      console.log(error?.response?.status);
      switch (error.response.status) {
          case 400:
              Vue.$toast.error(error.response.data.message)
              break;
          default:
              break;
      }
  }
})

