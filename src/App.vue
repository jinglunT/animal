<template>
  <div id="app">
    <div id="nav" class="ui menu fat-only">
      <router-link class="item" to="/">首頁</router-link>
      <router-link class="item" to="/about">影音</router-link>
      <router-link class="item" to="/aquarium">水族類</router-link>
      <router-link class="item" to="/reptiles">兩棲與爬蟲類</router-link>
      <router-link class="item" to="/insect">昆蟲與節肢動物</router-link>
      <router-link class="item" to="/post">發文</router-link>
    </div>
    <div id="nav" class="thin-only ui vertical menu">
      <router-link class="item" to="/">首頁</router-link>
      <router-link class="item" to="/about">影音</router-link>
      <router-link class="item" to="/aquarium">水族類</router-link>
      <router-link class="item" to="/reptiles">爬蟲類</router-link>
      <router-link class="item" to="/insect">昆蟲與節肢動物</router-link>
      <router-link class="item" to="/post">發文</router-link>
    </div>
    <router-view :post="post" :r="r" :a="a"/>
  </div>
</template>

<script type="text/javascript">
  
import { db } from './db'

export default {
  data() {
    return {
      post: [],
      r: [],
      a: [],
      name: '',
      text: '',
    }
  },
  firestore: {
    post: db.collection('post'),
  },
  methods: {
  },
  mounted () {
    this.axios.get('./r.json').then((response) => {
      this.r = response.data
    })
    this.axios.get('./a.json').then((response) => {
      this.a = response.data
    })
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav a {
  font-weight: bold;
  color: #272a29;
  font-size: 20px
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-color: #272a29
}

.ui.grid>.row>.column>img, .ui.grid>.row>img{
  max-width: 100vw;
}

img, iframe {
  border-radius: 15px;
}
a {
  font-size: 23px
}
.name {
  padding-top: 2em
}


h2, h4 {
  text-align: left;
  margin-left: 31%;
}

p {
  text-align: left;
  /* margin-left: 31%; */
  margin-top: 2em;
  white-space: pre-line;
  font-size: 16px;
}

hr {
  width: 100%;
}

@media screen and (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
}

@media screen and (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}
body {
  width: 100vw;
}
hr {
  border-color: #67706A
}
</style>
