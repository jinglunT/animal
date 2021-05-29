<template>
  <div class="hello">
  <vue-headful title="首頁"/>
   <div class="ui grid container">
      <div class="ui row">
        <div class="column">
          <img class = "small" :src="'./IMG_4451.JPG'"/>
        </div>
        <div class="ten wide column">
          <router-link to ="/reptiles2" target="_blank">豹紋守宮</router-link>
        </div>
      </div>
      <div class="ui row">
        <div class="column">
          <img class = "small" :src="'./IMG_7719.JPG'"/>
        </div>
        <div class="ten wide column">
          <router-link to ="/reptiles3" target="_blank">肥尾守宮</router-link>
        </div>
      </div>
      <div class="ui row">
  <img :src="'/IMG_4451.jpg'">
  <p>睫角守宮</p>
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
</style>
