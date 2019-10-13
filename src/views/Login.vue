<template>
  <div class="perfect-center">
    <div class="login form-bg-1">
      <h3 class="x-center">Faça Login</h3>
      <form @submit.prevent>
        <input
          v-model="login.email"
          class="blocky margin-y-md"
          type="text"
          placeholder="Digite seu email"
        >
        <input
          v-model="login.password"
          class="blocky margin-y-md"
          type="password"
          placeholder="Digite sua senha"
        >
        <input
          class="blocky margin-y-md"
          type="button"
          value="Logar"
          @click="makeLogin"
        >
        <p class="x-align-right">
          <router-link to="/create-account">
            Criar nova conta
          </router-link>
        </p>

        <hr class="float-clear separator"/>

        <div class="x-center">
          <a @click="googleLogin" class="color-red" href="#">
            Logar com o Google
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    /* eslint-disable */
    makeLogin() {
      // Login com Email e senha
      let { email, password } = this.login

      firebase.auth().signInWithEmailAndPassword(
        email,
        password
      ).then(user => {
        this.$swal({
          title: `Logado!`,
          text: `Seja bem vindo, ${user.user.email}! Redirecionando...`,
          type: 'success',
          timer: 2000,
          onClose: () => {
            this.$router.replace('home')
            console.log(firebase.auth().currentUser)
          }
        })
      }).catch(err => {
        this.$swal({
          title: `Oops, houve algum erro...`,
          text: `Erro: ${err.message}!`,
          type: 'error'
        })
      })
    },
    googleLogin () {
      // Login com o Google
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.replace('home')
        console.log(result)
        console.log(firebase.auth().currentUser)
      }).catch(err => {
        this.$swal({
          title: `Oops, houve algum erro...`,
          text: `Erro: ${err.message}!`,
          type: 'error'
        })
      })
    },
  },
};
</script>
