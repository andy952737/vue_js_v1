<template >
    <div class="hello center"> 
      <h1>{{ msg }}</h1>
      <p>{{ int_post }}</p> 
      <!-- <p>{{ isActive }}</p> -->
    </div>
</template>

<script>
export default {
  name: 'ApiPage',
  props: {
    msg: String,
    int_post: Number
    // isActive: Boolean
    // count: {
    //     type: Number,
    //     default: 0 // 你也可以設定預設值
    // },
    // isActive: Boolean
  }
}
</script>

<style scoped>
/* Add your styles here */
.center {
  text-align: center;
}
</style>