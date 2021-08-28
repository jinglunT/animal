<template>
  <div class="hello">
    <img class = "fat-only" :src="'./IMG_8192.JPG'"/>
    <h2>羅氏裸身蝦虎</h2>
    <div class="ui container">
      <div class="block">
    <p>羅氏裸身蝦虎是一種洄游性的小型蝦虎，牠們居住在溪流的底層，擁有相當厲害的擬態能力，羅氏裸身蝦虎有著</p>
    <p>黑白相間的體色，偽裝成溪裡的砂石，因此又被稱為熊貓蝦虎。</p>

      </div>
    </div>
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
.ui.container {
  margin: 0 auto;
}

.block {
  max-width: 800px;
  margin: 0 auto;
}
</style>
