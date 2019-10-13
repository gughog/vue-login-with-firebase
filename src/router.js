/* eslint-disable */
import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import CreateAccount from './views/CreateAccount.vue';

Vue.use(Router);

const router = new Router({
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
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
});

export default router;
