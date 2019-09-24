import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

Vue.use(BootstrapVue)
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'
import "./style/style.css";

import VueSocketIO from 'vue-socket.io'
 
Vue.use(new VueSocketIO({
    connection: 'http://localhost:2020'
}))


// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
