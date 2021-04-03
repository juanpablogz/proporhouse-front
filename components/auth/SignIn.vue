<template>
<div>
    <h1>SignIn</h1>
    <label for="">Email</label>
    <input v-model="login.email" type="email">
    <label for="">Password</label>
    <input v-model="login.password" type="email">
    <button @click.prevent="userLogin">Ingresar</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        email: 'admin@example.com',
        password: 'password'
      }
    }
  },
    methods: {
      async userLogin() {
        try {
          const request = await this.$axios.post('users/sign_in', { user: this.login })
          if (request.status == 200) {
            const headers = request.headers
            console.log(headers)
            this.$cookies.set('auth', true, {})
            this.$cookies.set('accessToken', headers['access-token'], {})
            this.$cookies.set('client', headers['client'], {})
            this.$cookies.set('uid', headers['uid'], {})
            this.$router.push('/auth')
          }
        } catch (error) {
          console.log(`error => ${error}`)
        }
      }
    }

}
</script>

<style scoped>

</style>