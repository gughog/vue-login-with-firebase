<template>
  <div>
    <nav class="x-align-right blocky">
      <a @click="doLogout" href="#" class="x-padding-sm">Logout</a>
    </nav>
    <br />
    <h1 class="x-center">Yey, você achou o gatineo fofineo!</h1>
    <div class="x-center">
      <img src="https://media.giphy.com/media/5UVFr72cJmnoQ/giphy.gif" alt="Cute Kitty">
    </div>
    <hr />
    <div>
      Usuário logado: {{ user }}
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase';

export default {
  name: 'Home',
  data() {
    return {
      user: firebase.auth().currentUser.email,
    };
  },
  methods: {
    doLogout () {
      firebase.auth().signOut()
        .then(() => {
          this.$swal({
            title: `Desconectado!`,
            text: `Até a próxima! Redirecionando...`,
            type: 'success',
            timer: 2000,
            onClose: () => {
              this.$router.replace('login')
            }
          })
        })
    },
  },
};
</script>
