<template>
  <div>
      <SignIn />
    <button @click.prevent="goToPage('signUp')">Volver</button>
  </div>
</template>

<script>
import SignIn from './../components/auth/SignIn'
export default {
  middleware: ['unprotect'],
  components: {
    SignIn
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