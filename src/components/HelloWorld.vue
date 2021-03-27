<template>
  <div class="hello">
  <vue-headful title="首頁"/>
  <img :src="'/IMG_5390.JPG'">
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
  width:80%
}
a {
  color: #42b983;
}
</style>
