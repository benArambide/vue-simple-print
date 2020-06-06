import Vue from 'vue'
import App from './App.vue'
import VueSimplePrintPlugin from './plugins/VueSimplePrintPlugin.js';

Vue.use(VueSimplePrintPlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
