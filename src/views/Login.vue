<template>
  <div class="perfect-center">
    <div class="login">
      <h3 class="x-center">Faça Login</h3>
      <form @submit.prevent>
        <input class="blocky margin-y-md" type="text" placeholder="Digite seu email">
        <input class="blocky margin-y-md" type="password" placeholder="Digite sua senha">
        <input class="blocky margin-y-md" type="button" value="Logar">
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
    };
  },
};
</script>

<style>

</style>
