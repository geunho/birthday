import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import LazyLoad from 'vue-lazyload'
import App from './App'

import Invite from './components/Invite'
import About from './components/About'
import Photos from './components/Photos'
import Location from './components/Location'

Vue.use(Router)
Vue.use(Resource)
Vue.use(LazyLoad, {
  preload: 2.0,
  error: false,
  loading: false,
  attempt: 3,
  listenerEvents: ['scroll', 'resize', 'touchend', 'touchmove']
})

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/invite', component: Invite },
    { path: '/about', component: About },
    { path: '/photos', component: Photos },
    { path: '/location', component: Location },
    { path: '*', redirect: '/invite'}
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')

// load assets
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('src/assets/images/', true));