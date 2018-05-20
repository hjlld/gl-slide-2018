import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './app.vue'
import 'root/vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
