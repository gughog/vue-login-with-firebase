import Vue from 'vue';
import Router from 'vue-router';
import Home from './App.vue';
import Login from './views/Login.vue';
import CreateAccount from './views/CreateAccount.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
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
  ],
});
