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
          v-model="login.senha"
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
        <p class="x-align-left">
          <router-link to="/create-account">
            Criar nova conta
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: {
        email: null,
        senha: null,
      },
    };
  },
  methods: {
    makeLogin() {
      this.$router.replace('home');
    },
  },
};
</script>
