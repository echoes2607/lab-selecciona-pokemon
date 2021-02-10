import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Page404 from '../views/Page404.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/error-404'
  },
  {
    path: '/error-404',
    name: 'PageError',
    component: Page404
  },
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      authenticated: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser,
      autorization = to.matched.some(record => record.meta.authenticated);


  if(autorization && !user){
    
    next('/');

  } else if(!autorization && user){
    
    next('home');

  } else{
    
    next();

  }
})


export default router
