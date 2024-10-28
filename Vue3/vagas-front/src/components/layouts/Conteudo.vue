<template>
  <div>
    <p>Conteudo</p>
    <button @click="atualizarComponente()">Atualizar</button>
    <button @click="conteudo = 'home'">Home</button>
    <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
    <!--    <home></home>-->
    <!--    <publicar-vaga></publicar-vaga>-->
    <keep-alive>
      <component :is="conteudo"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
import PublicarVaga from "@/views/PublicarVaga.vue";

export default {
  name: 'Conteudo',
  components: {
    Home,
    PublicarVaga,
  },
  data: () => ({
    conteudo: 'home',
  }),
  methods: {},
  beforeCreate() {
    console.log('BeforeCreate')
  },
  created() {
    console.log('Create')
  },
  beforeMount() {
    console.log('BeforeMount')
  },
  mounted() {
    console.log('Component mounted')
  },
  beforeUpdate() {
    console.log('BeforeUpdate')
  },
  updated() {
    console.log('Component updated')
  },
  beforeUnmount() {
    console.log('BeforeUnmount')
  },
  unmount() {
    console.log('Component unmount')
  },
  errorCaptured() {
    console.log('ErrorCaptured')
  },
  renderTracked() {
    console.log('RenderTracked')
  },
  renderTriggered() {
    console.log('RenderTriggered')
  },
  activated() {
    console.log('Activated')
  },
  deactivated() {
    console.log('Deactivated')
  }
}
</script>

<style></style>