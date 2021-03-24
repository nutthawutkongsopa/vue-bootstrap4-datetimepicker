import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { $, jQuery } from "jquery";

Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "./assets/plugins/bootstrap-datetimepicker.css";
window.$ = $;
window.jQuery = jQuery;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
