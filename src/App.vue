<template>
  <div id="app">
    <div id="nav" class="ui menu">
      <router-link class="item" to="/">首頁</router-link>|
      <router-link class="item" to="/about">影音</router-link>|
      <router-link class="item" to="/aquarium">水族類</router-link>|
      <router-link class="item" to="/reptiles">爬蟲類</router-link>|
      <router-link class="item" to="/insect">昆蟲與節肢動物</router-link>|
    </div>
    <router-view/>
    <div v-for="(p,idx) in post" :key="idx">
      <h3>{{p.user}}說:{{p.text}}</h3>
    </div>
    <form>
      <input type="text" name="" v-model="name" placeholder="您的大名" />
      <input type="text" name="" v-model="text" placeholder="內容文字" />
      <button @click="add()">發文!</button>
    </form>
  </div>
</template>

<script type="text/javascript">
  
import { db } from './db'

export default {
  data() {
    return {
      post: [],
      name: '',
      text: '',
    }
  },

  firestore: {
    post: db.collection('post'),
  },

  methods: {
    add() {
      db.collection('post').doc(new Date().toString()).set({
        user: this.name,
        text: this.text,
        time: new Date()
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      })
    }
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
  margin-left: 31%;
  margin-top: 2em
}

hr {
  width: 100%;
}
</style>
