<template>
  <div class="hello">
  <img :src="'./首頁背景.JPG'" />
    <div v-for="(p,idx) in post" class="ui row" :key="idx">
      <router-link :to = "'/p/' + idx">
        <div><img class = "tiny" :src="p.img"/>{{p.user}}說:{{p.text.substr(0,30)}}...</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    post: Array
  },
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
