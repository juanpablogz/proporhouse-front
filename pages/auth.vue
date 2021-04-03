<template>
  <div>
    <div>content protected</div>
    <button @click.prevent="logout()"> logout</button>
  </div>
</template>

<script>
export default {
  middleware: ['protect'],
  methods: {
    logout() {
      this.$router.push('/')
      this.$cookies.removeAll()
    }
  }
}
</script>

<style scoped>

</style>