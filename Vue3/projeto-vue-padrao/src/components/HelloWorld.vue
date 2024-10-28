<template>
  <h1 :class="classe">{{ variavel }}</h1>
  <p>URL da API: {{ url_api }}</p>
  <br>
  <p>MODO: {{ modo }}</p>
  <p>Token: {{ token }}</p>
</template>

<script>
export default {
  data: () => ({
    variavel: process.env.VUE_APP_AS,
    url_api: process.env.VUE_APP_API_URL,
    modo: process.env.VUE_APP_MODO,
    token: process.env.VUE_APP_TOKEN,
    classe: 'fundoVerde red'
  }),
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: red
}

.fundoVerde {
  background-color: green;
}

</style>
