import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
// import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;
window.$ = window.jQuery = jQuery;

// import "popper.js";
// import "bootstrap";

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// import "bootstrap/dist/css/bootstrap.css";

import "bootstrap-icons/font/bootstrap-icons.css";
// import "boxicons/css/boxicons.min.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
