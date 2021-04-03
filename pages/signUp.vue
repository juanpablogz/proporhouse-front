<template>
  <div>
      <SignUp />
      <button @click.prevent="goToPage('signUp')">Volver</button>
  </div>
</template>

<script>
import SignUp from './../components/auth/SignUp'
export default {
  middleware: ['unprotect'],
  components: {
    SignUp
  },
  methods: {
    goToPage(page) {
     this.$router.push(`/`)
    }
  }
}
</script>

<style>

</style>