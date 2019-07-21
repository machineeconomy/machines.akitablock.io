import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import VueWow from 'vue-wow';
import VAnimateCss from 'v-animate-css';
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(VueWow);
Vue.use(VAnimateCss);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
