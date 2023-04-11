<template>
  <div class="col-3">
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title">{{ barbeiro.nome }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ barbeiro.agencia }}</h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['barbeiro']
}
</script>