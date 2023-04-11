<template>
  <ul class="navbar-nav mr-auto" v-if="usuarioestaLogado">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/barbeiros" class="nav-link">Barbeiros</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/login" class="nav-link">Entrar</router-link>
    </li>
    <li class="nav-item">
       <a href="#" class="nav-link" @click.prevent="efetuarLogout">Logout</a>
    </li>
  </ul>
</template>
<script>
import { logoutMixin } from '@/mixins'
export default {
    mixins: [logoutMixin]
};
</script>