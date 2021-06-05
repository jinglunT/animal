<template>
  <div class="hello">
    <vue-headful title="首頁"/>
    <div class="ui grid container">
      <div class="ui row">
        <div class="six wide column">
          <img class = "small" :src="'./DSC09821.JPG'"/>
        </div>
        <div class="ten wide column name">
          <router-link to ="/insect2" target="_blank">印尼金鍬</router-link>
        </div>
      </div>
      <div class="ui row">
        <div class="six wide column name">
          <img class = "small" :src="'./DSC09821.JPG'"/>
        </div>
        <div class="ten wide column name">
          <router-link to ="/insect3" target="_blank">櫻桃紅蟑</router-link>
        </div>
      </div>
      <div class="ui row">
        <img class = "fat-only" :src="'./DSC09821.JPG'"/>
        <p>白條綠金龜</p>
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

img.small {
  width: 100%;
}
</style>
