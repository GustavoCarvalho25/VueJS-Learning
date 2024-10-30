<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      {{titulo}}
    </div>
    <div class="card-body">
      <p>{{descricao}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        {{salario}} | {{modalidade}} | {{tipo}} | {{publicacao}}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vaga',
  // props: ['titulo', 'descricaoVaga', 'salario', 'modalidade', 'tipo', 'publicacao'],
  /*props: {
    titulo: String,
    descricaoVaga: String,
    salario: [Number, String],
    modalidade: String,
    tipo: String,
    publicacao: String,
  }*/
  props: {
    titulo: {
      type: String,
      required: true,
      validator(p) {
        console.log('Prop', p)
        if(p.length > 5) return true
        return false
      }
    },
    descricao: {
      type: String,
      required: true,
      // default: 'O contratante não adicionou uma descrição para essa vaga'
      default() {
        return '*'.repeat(20)
      }
    },
    salario: {
      type: Number,
      required: true
    },
    modalidade: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    publicacao: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
</style>/