import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import CreateAccount from './views/CreateAccount.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    {
      name: 'CreateAccount',
      path: '/create-account',
      component: CreateAccount,
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta: {
        requireAuth: true,
      },
    },
  ],
});
