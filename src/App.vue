<template>
  <div id="app">
  <BarraNavegacao />
  <router-view />
</div>
</template>

<script lang="ts">
import BarraNavegacao from './components/BarraNavegacao.vue'

export default {
  components: {
    BarraNavegacao
  },
}
</script>


