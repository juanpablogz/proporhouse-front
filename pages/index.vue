<template>
  <div class="container">
    <Online />
    <button @click.prevent="goToPage('signIn')">Iniciar sesión</button>
    <button @click.prevent="goToPage('signUp')">Registrarme</button>
  </div>
</template>

<script>
import SignIn from './../components/auth/SignIn'
import SignUp from './../components/auth/SignUp'
export default {
  middleware: ['unprotect'],
  components: {
    SignIn,
    SignUp
  },
  methods: {
    goToPage(page) {
     this.$router.push(`/${page}`)
    }
  }
}
</script>

<style>
</style>
