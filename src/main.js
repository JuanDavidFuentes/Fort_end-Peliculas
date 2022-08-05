import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Carousel3d from 'vue-carousel-3d'
import {store} from './store/store'
import {routes} from './routes/routes.js'


Vue.use(VueRouter)
Vue.use(Carousel3d)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
