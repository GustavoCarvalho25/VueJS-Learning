<template>
  <vagas-favoritas></vagas-favoritas>
  <topo-padrao @navegar="componente = $event"></topo-padrao>
  <alerta v-if="exibirAlerta">
    <template v-slot:titulo>
      <h5>Titulo do alerta</h5>
    </template>
    <p>Descricao do alerta</p>

  </alerta>
  <conteudo :conteudo="componente"></conteudo>
</template>

<script>
import VagasFavoritas from '@/comuns/VagasFavoritas.vue';
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'
import Alerta from '@/comuns/Alerta.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
    Alerta
  },
  data: () => ({
    componente: 'Home',
    exibirAlerta: true
  }),
  methods: {
    acao(p1, p2) {
      console.log('Função de callback definida no componente pai e chamada no componente filho')
      console.log(p1)
      console.log(p2)
    }
  },
  mounted() {
    this.emitter.on('alerta', () => {
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta = false, 4000)
      console.log('Mensagem de Alerta')
    })
  }
}
</script>

<style scoped>
h1 {
  color: red
}
</style>
