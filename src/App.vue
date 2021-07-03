<template>
  <div id="app">
    <div id="nav" class="ui menu">
      <router-link class="item" to="/">首頁</router-link>|
      <router-link class="item" to="/about">影音</router-link>|
      <router-link class="item" to="/aquarium">水族類</router-link>|
      <router-link class="item" to="/reptiles">爬蟲類</router-link>|
      <router-link class="item" to="/insect">昆蟲與節肢動物</router-link>|
      <router-link class="item" to="/post">發文</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  

export default {
  data() {
    return {
      post: [],
      name: '',
      text: '',
    }
  },

  methods: {
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
  margin-top: 2em
}

hr {
  width: 100%;
}
</style>
