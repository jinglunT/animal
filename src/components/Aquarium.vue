<template>
  <div class="hello">
    <div class="ui grid container">
      <div v-for="(p,idx) in post" class="ui row" :key="idx" :class="{hidden: p.type != '水族類' }" >
        <router-link :to = "'/p/' + idx">
          <div>{{p.user}}說:{{p.text.substr(0,30)}}...</div>
        </router-link>
      </div>
      <div class="ui row">
        <div class="six wide column">
          <img class = "small" :src="'./IMG_9503.JPG'"/>
        </div>
        <div class="ten wide column name">
          <router-link to ="/aquarium2" target="_blank">羅氏裸身蝦虎</router-link>
        </div>
      </div>
      <hr>
      <div class="ui row">
        <div class="six wide column">
          <img class = "small" :src="'./IMG_9503.JPG'"/>
        </div>
        <div class="ten wide column name">
          <router-link to ="/aquarium3" target="_blank">短吻紅斑吻蝦虎</router-link>
        </div>
      </div>
      <div class="ui row">
        <img class = "fat-only" :src="'./IMG_9503.JPG'"/>
        <p>紫身枝牙蝦虎</p>
      </div>
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

.hidden {
  margin: 0 !important;
  padding: 0 !important;
  height: 0 !important;
}

.hidden * {
  color: transparent !important;
}
</style>
