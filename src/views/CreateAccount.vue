<template>
  <div class="perfect-center">
    <div class="login form-bg-1">
      <h3 class="x-center">Crie Sua Conta</h3>
      <form @submit.prevent>
        <input
          v-model="account.email"
          class="blocky margin-y-md"
          type="text"
          placeholder="Digite seu email"
        >
        <input
          v-model="account.password"
          class="blocky margin-y-md"
          type="password"
          placeholder="Digite sua senha"
        >
        <input
          v-model="account.password2"
          class="blocky margin-y-md"
          type="password"
          placeholder="Confirme sua senha"
        >
        <input
          class="blocky margin-y-md"
          type="button"
          value="Criar Conta"
          @click="createNewUser"
        >
        <p class="x-align-left">
          <router-link to="/login">
            Fazer Login
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default {
  name: 'CreateAccount',
  data() {
    return {
      account: {
        email: '',
        password: '',
        password2: '',
      },
    };
  },
  methods: {
    createNewUser() {
      let { email, password, password2 } = this.account

      if (password !== password2) {
        this.$swal({
          title: 'Senhas divergentes!',
          text: 'Confira se sua senha foi digitada correntamente nos campos e tente novamente.',
          type: 'warning'
        })
        return
      }

      firebase.auth().createUserWithEmailAndPassword(
        email,
        password
      ).then(user => {
        this.$swal({
          title: 'Usuário criado!',
          text: `O usuário ${user.user.email} foi criado com sucesso! Redirecionando...`,
          type: 'success',
          timer: 2000,
          onClose: () => {
            this.$router.replace('login')
          }
        })
        // Apaga o conteúdo
        for (let item in this.account) {
          this.account[item] = ''
        }
        console.log(user)
      }).catch(err => {
        this.$swal({
          title: 'Houve um erro!',
          text: `${err.message}`,
          type: 'error',
        })
      })
    },
  },
};
</script>
