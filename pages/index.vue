<template>
  <div class="container">
    <Online />
    <SignIn />
  </div>
</template>

<script>
import SignIn from './../components/auth/SignIn'
export default {
  middleware: ['unprotect'],
  components: {
    SignIn
  }
}
</script>

<style>
</style>
