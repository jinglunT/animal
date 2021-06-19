<template>
  <div class="hello">
  <img :src="'/IMG_7680.JPG.jpg'">
  <p>豹紋守宮</p>
  <p>飼養環境 : </p>
  <p>飼養豹紋守宮其實非常簡單，只要做好功課就能讓牠在你/妳身旁陪伴好幾年了，</p>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 60%;
}
</style>
