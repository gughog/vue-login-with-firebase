import Vue from 'vue';
import firebase from 'firebase';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';

Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDouGab7opQh7F4u928qN-oX0zwLt00YYE',
  authDomain: 'vue-login-firebase-730f0.firebaseapp.com',
  databaseURL: 'https://vue-login-firebase-730f0.firebaseio.com',
  projectId: 'vue-login-firebase-730f0',
  storageBucket: 'vue-login-firebase-730f0.appspot.com',
  messagingSenderId: '850324685619',
  appId: '1:850324685619:web:f67a0c0a91bfb8de2cf446',
  measurementId: 'G-82CWVVFG06',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
