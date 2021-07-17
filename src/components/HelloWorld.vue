<template>
  <div class="hello">
  <img :src="'./首頁背景.JPG'">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width:60%
}
a {
  color: #42b983;
}
</style>
