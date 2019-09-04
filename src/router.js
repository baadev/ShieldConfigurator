import Vue from 'vue'
import Router from 'vue-router'
import DevApp from '@/views/DevApp.vue'
import Configurator from '@/views/Configurator.vue'

Vue.use(Router)

export default new Router({
 mode: 'hash',
 routes: [
  {
   path: '/',
   components: { page: Configurator }
  },
  {
   path: '/dev**',
   components: { page: DevApp }
  }
 ]
})
