<template>
  <div id="app">
    <div id="nav" class="ui menu">
      <router-link class="item" to="/">首頁</router-link>|
      <router-link class="item" to="/about">關於</router-link>|
      <router-link class="item" to="/aquarium">水族類</router-link>|
      <router-link class="item" to="/reptiles">爬蟲類</router-link>|
      <router-link class="item" to="/insect">昆蟲與節肢動物</router-link>|
    </div>
    <router-view/>
  </div>
</template>

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
  color: #272a29
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-color: #272a29
}
</style>
