<template>
<div>
    <h1>signUp</h1>
    <label for="">first name</label>
    <input v-model="register.first_name" type="text">
    <label for="">last name</label>
    <input v-model="register.last_name" type="text">
    <label for="">nickname</label>
    <input v-model="register.username" type="text">
    <label for="">Email</label>
    <input v-model="register.email" type="email">
    <label for="">Password</label>
    <input v-model="register.password" type="password">
    <button @click.prevent="userRegister">Ingresar</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      register: {
        email: 'zzz@example.com',
        password: 'password',
        first_name: 'juan',
        last_name: 'pablo',
        username: 'jpgz'
      }
    }
  },
    methods: {
      async userRegister() {
          console.log(this.register)
        try {
          const request = await this.$axios.post('users', { user: this.register })
          console.log(request)
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