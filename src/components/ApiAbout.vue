<template>
  <div class="center">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ApiAbout',
  props: {
    msg: String
  }
}
</script>

<style scoped>
/* Add your styles here */
.center {
  text-align: center;
}
</style>