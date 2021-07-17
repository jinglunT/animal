<template>
  <div class="hello">
    <h1>
      <img class="center" :src="'./首頁背景.JPG'" />
    </h1>
    <div class="ui container">

      <div class="ui form">
        <div class="ui input">
          <input type="text" name="" v-model="key" placeholder="關鍵字查詢" />
        </div>
      </div>
      <div v-for="(p,idx) in post" class="ui row" :key="idx" :class="{hidden: !p.img}">
        <router-link :to = "'/p/' + idx" v-show="(!key || (p.user + p.text).indexOf(key) > -1 )">
          <div><img class = "tiny" :src="p.img"/>{{getTitle(p.text)}}</div>
        </router-link>
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
  data () {
    return {
      key: ''
    }
  },
  methods: {
    getTitle(t) {
      return t.match(/^#\s*(\w*)\s/)[1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  text-align: center;
}

img {
  width:60%;
}

img.tiny {
    width: 2em;
}

a {
  color: #42b983;
}

div {
  line-height: 1.2;
  text-align: left;
}

.hidden {
  margin: 0 !important;
  padding: 0 !important;
  height: 0 !important;
}

.hidden * {
  display: none !important;
}

.center {
  float: none;
  margin: 0 auto;
}
</style>
