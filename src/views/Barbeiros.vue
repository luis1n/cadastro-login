<template>
  <div class="container">
    <h1>Barbeiros</h1>
    <div class="row">
      <Barbeiros v-for="barbeiro in barbeiros" :key="barbeiro.numero" :barbeiro="barbeiro" />
    </div>
  </div>
</template>

<script>
import Barbeiros from '@/components/Barbeiros.vue'

export default {
  components: {
    Barbeiros
  },
  data() {
    return {
      barbeiros: []
    }
  },
  mounted () {
    this.$http.get('gerentes')
      .then(response => (this.barbeiros = response.data))
      .catch(erro => console.log(erro));
  }
}
</script>
