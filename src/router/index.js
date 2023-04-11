import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NovoUsuario from '../views/NovoUsuario.vue'
import Login from '../views/Login.vue'
import Barbeiros from '../views/Barbeiros.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/barbeiros',
    name: 'barbeiros',
    component: Barbeiros
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: () => import('../views/NovoUsuario.vue'),
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  }

]

const router = new VueRouter({
  routes
})


router.beforeEach((routeTo, routeFrom, next) => {
  if(!routeTo.meta.publica && !store.state.token) {
    return next({
      path: '/login'
    });
  }
  next();
})

export default router
