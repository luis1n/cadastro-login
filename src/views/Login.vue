<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="efetuarLogin">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <v-btn type="submit" class="btn btn-primary brn-block">Entrar</v-btn>
            <router-link :to="{name: 'novo.usuario' }">
                Não possui um cadastro? Cadastre-se aqui!
            </router-link>
        </form>
    </div>
</template>
<script>

export default {
    data() {
        return {
             usuario: {},
             mensagemErro: ""
        };
    },
    methods: {
        efetuarLogin() {
        this.$store
        .dispatch("efetuarLogin", this.usuario)
        .then(() => this.$router.push({ name: "barbeiros" }))
        .catch(err => {
          if (err.request.status == 401) {
            this.mensagemErro = "Login ou senha inválido(s)!!!";
          }
        });
        }
    }
}
</script>