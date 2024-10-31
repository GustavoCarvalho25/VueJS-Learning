<template>
  <vagas-favoritas></vagas-favoritas>
  <topo-padrao @navegar="componente = $event"></topo-padrao>
  <conteudo :conteudo="componente"></conteudo>
</template>

<script>
import VagasFavoritas from '@/comuns/VagasFavoritas.vue';
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao,
    VagasFavoritas
  },
  data: () => ({
    componente: 'Home'
  }),
  methods: {
    acao(p1, p2) {
      console.log('Função de callback definida no componente pai e chamada no componente filho')
      console.log(p1)
      console.log(p2)
    }
  }
}
</script>

<style scoped>
h1 {
  color: red
}
</style>
