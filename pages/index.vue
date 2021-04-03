<template>
  <div class="container">
    <Online />
    <SignIn />
    <SignUp />
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
  }
}
</script>

<style>
</style>
