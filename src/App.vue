<template>
  <v-app-bar>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-company">
      <a class="navbar-brand" href="#">Company</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gerentes" class="nav-link">
              Gerentes
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              Entrar
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</v-app-bar>
</template>

<style>
.navbar {
  background: #00008b;
}
.navbar-company a {
  color: #fff;
}
.navbar-company a:hover {
  color: #000;
}
</style>
