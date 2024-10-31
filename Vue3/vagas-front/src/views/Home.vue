<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga v-bind="vaga" />
<!--          :titulo="vaga.titulo"
            :descricao-vaga="vaga.descricao"
            :salario="vaga.salario"
            :modalidade="vaga.modalidade"
            :tipo="vaga.tipo"
            :publicacao="vaga.publicacao"-->
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-4">
        <indicador titulo="Vagas abertas" indicador="100" bg="bg-dark" color="text-white"></indicador>
      </div>

      <div class="col-4">
        <indicador titulo="Profissionais cadastrados" indicador="500" bg="bg-dark" color="text-white"></indicador>
      </div>

      <div class="col-4">
        <indicador titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-white" color="text-black"></indicador>
      </div>
    </div>
    <publicar-vaga></publicar-vaga>/
  </div>
</template>

<script>
import PesquisarVaga from '@/comuns/PesquisarVaga.vue'
import Indicador from '@/comuns/Indicador.vue'
import Vaga from '@/comuns/Vaga.vue'

export default {
  components: {
    PesquisarVaga,
    Indicador,
    Vaga
  },
  name: 'Home',
  data: () => ({
    usuariosOnline: 0,
    vagas: [],
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101)
    }
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000)
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'));
  }
}
</script>

<style scoped>

</style>