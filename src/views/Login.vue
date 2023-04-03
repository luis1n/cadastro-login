<template>
    <div class="container">
        <h1>Login</h1>
        <form>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control">
            </div>
            <v-btn type="submit" class="btn btn-primary brn-block">Entrar</v-btn>
            <router-link :to="{name: 'novo.usuario' }">
                Não possui um cadastro? Cadastre-se aqui!
            </router-link>
        </form>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            usuario: {}
        }
    }
}
</script>