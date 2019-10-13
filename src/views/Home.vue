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
      Usuário logado: {{ getUsername }}
    </div>
    <h3>Sobre este projeto:</h3>
    <div class="text-body">
      <p>
        Se você está vendo esta tela e o gatinho fofinho, você está autenticado no sistema e
        logou com sucesso, consequentemente sua sessão está ativa.
        Este projeto tem como objetivo fazer funcionar a implementação
        do sistema de login do firebase.
      </p>
      <p>
        Serviu de estudos e como boilerplate para projetos futuros. Então, se você está
        logado, curta o gif do gatinho e ao terminar tente fazer um logout,
        se tudo der certo, sua sessão se encerrou com sucesso! Obrigado por ler até aqui!
      </p>
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
  computed: {
    getUsername: function () {
      // Caso o user não houver nome cadastrado, mostra o email
      if (firebase.auth().currentUser.displayName !== null) {
        return firebase.auth().currentUser.displayName
      } else {
        return firebase.auth().currentUser.email
      }
    }
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
