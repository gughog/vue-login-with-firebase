<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>

<style>
/* Imports */
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

/* Normalize */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/*Global CSS*/
  /* generics */
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: aliceblue;
  }
  input[type=text], input[type=password] {
    width: 50vw;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    padding: 0.2rem 0.3rem;
    font-size: 1.125rem;
  }
  input[type=button] {
    width: 50vw;
    margin: 0;
    border-radius: 0.2rem;
    padding: 0.2rem 0.3rem;
    font-size: 1.125rem;
    transition: 0.2s;
  }
  input[type=button]:hover {
    background: #ccc;
  }
  a {
    text-decoration: none;
    color: cornflowerblue;
    transition: 0.2s
  }
  a:hover {
    color: rgb(27, 99, 235)
  }
  /* classes */
  .blocky {
    display: block;
  }
  .perfect-center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .x-center {
    text-align: center;
  }
  .x-align-left {
    float: right;
    clear: both;
  }
  .margin-y-md {
    margin: 0.4rem 0;
  }

  .form-bg-1 {
    border: 4px solid #ddd;
    border-radius: 0.4rem;
    padding: 0.6rem;
  }

  /* Media queries */
  @media screen and (max-width: 576px) {
    input[type=text],
    input[type=button],
    input[type=password] {
      width: 80vw;
    }
  }

  @media screen and (min-width: 768px) {
    input[type=text],
    input[type=button],
    input[type=password] {
      width: 25vw;
    }
  }

</style>
