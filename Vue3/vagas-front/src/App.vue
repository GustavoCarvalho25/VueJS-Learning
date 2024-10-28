<template>
  <h1>Componente APP</h1>
  <topo-padrao></topo-padrao>
  <conteudo></conteudo>
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao
  }
}
</script>

<style scoped>
h1 {
  color: red
}
</style>
