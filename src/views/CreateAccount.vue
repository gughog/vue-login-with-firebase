<template>
  <div class="perfect-center">
    <div class="login form-bg-1">
      <h3 class="x-center">Crie Sua Conta</h3>
      <form @submit.prevent>
        <input
          v-model="createAccount.email"
          class="blocky margin-y-md"
          type="text"
          placeholder="Digite seu email"
        >
        <input
          v-model="createAccount.senha"
          class="blocky margin-y-md"
          type="password"
          placeholder="Digite sua senha"
        >
        <input
          v-model="createAccount.senha2"
          class="blocky margin-y-md"
          type="password"
          placeholder="Confirme sua senha"
        >
        <input
          class="blocky margin-y-md"
          type="button"
          value="Criar Conta"
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
export default {
  name: 'CreateAccount',
  data() {
    return {
      createAccount: {
        email: null,
        senha: null,
        senha2: null,
      },
    };
  },
  methods: {
  },
};
</script>
