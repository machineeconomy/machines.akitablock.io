import Vue from 'vue'
import Router from 'vue-router'
import Header from './akita/header/Header'
import Main from './akita/main/Main'
import Footer from './akita/footer/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'akita',
      components: {
        header: Header,
        default: Main,
        footer: Footer
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
