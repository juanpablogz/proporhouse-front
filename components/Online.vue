<template>
  <div>
    <p v-if="online">Conexion exitosa</p>
    <p v-else>sin conexion</p>
    <p v-if="error != ''">{{error}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      online: false,
      error: ''
    }
  },
  async mounted () {
    try {
    const request = await  this.$axios.get('status', {})
    this.online = request.data.online
    console.log(request)
    console.log(process.env.NODE_ENV)
    } catch (error) {
      this.error = error
    }
  },
}
</script>

<style scoped>

</style>