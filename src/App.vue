<template>
  <div id="app">
    <div id="nav" class="ui menu fat-only">
      <router-link class="item" to="/">首頁</router-link>
      <router-link class="item" to="/about">影音</router-link>
      <router-link class="item" to="/aquarium">水族類</router-link>
      <router-link class="item" to="/reptiles">兩棲與爬蟲類</router-link>
      <router-link class="item" to="/insect">昆蟲與節肢動物</router-link>
      <router-link class="item" to="/post">發文</router-link>
      <div class="item">
        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fjinglunt.github.io%2Fanimal%2F&layout=button_count&size=small&width=71&height=20&appId" width="71" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
      <div class="right menu">
        <div class="item">
          <div class="ui form">
            <div class="ui input">
              <input type="text" autofocus="autofocus" name="" v-model="key" placeholder="關鍵字查詢" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="nav" class="thin-only ui vertical menu">
      <router-link class="item" to="/">首頁</router-link>
      <router-link class="item" to="/about">影音</router-link>
      <router-link class="item" to="/aquarium">水族類</router-link>
      <router-link class="item" to="/reptiles">爬蟲類</router-link>
      <router-link class="item" to="/insect">昆蟲與節肢動物</router-link>
      <router-link class="item" to="/post">發文</router-link>
    </div>
    <div v-for="(p,idx) in a" class="ui row" :key="'a' + idx" :class="{hidden: !key || key == '' || !p.i}">
        <router-link target="_blank" :to = "p.to" v-show="(!key || (p.t + p.type + p.p).indexOf(key) > -1 )">
          <div><img class = "tiny" :src="p.i"/>{{p.t}}</div>
        </router-link>
      </div>
      <div v-for="(p,idx) in r" class="ui row" :key="'r' + idx" :class="{hidden: !key || key == '' || !p.i}">
        <router-link target="_blank" :to = "p.to" v-show="(!key || (p.t + p.p).indexOf(key) > -1 )">
          <div><img class = "tiny" :src="p.i"/>{{p.t}}</div>
        </router-link>
      </div>
      <div v-for="(p,idx) in post" class="ui row" :key="'post' + idx" :class="{hidden: !key || key == '' || !p.img}">
        <router-link target="_blank" :to = "'/p/' + idx" v-show="(!key || (p.user + p.text).indexOf(key) > -1 )">
          <div><img class = "tiny" :src="p.img"/>{{getTitle(p.text)}}</div>
        </router-link>
      </div>
    <div id ="main">
      <router-view :post="post" :r="r" :a="a" :i="i"/>
    </div>
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
      i: [],
      key: '',
      name: '',
      text: '',
    }
  },
  firestore: {
    post: db.collection('post'),
  },
  methods: {
    nothing() {
      const arr = this.a.concat(this.r).concat(this.post);
      const k = this.key;
      return arr.filter((o) => { return (o.t + o.type + o.p).indexOf(k) > -1 }).length == 0
    },
    getTitle(t) {
      return (t.match((/^\s*#\s*(\S+)\n?/)) || ['',''])[1]
    }
  },
  mounted () {
    this.axios.get('./r.json').then((response) => {
      this.r = response.data
    })
    this.axios.get('./a.json').then((response) => {
      this.a = response.data
    })
    this.axios.get('./i.json').then((response) => {
      this.i = response.data
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

#nav a:hover {
  background-color: #999;
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

#main a:hover {
  text-decoration: underline;
}

img {
  width: 120px;
}

#main a img:hover {
  opacity: 0.8;
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

.hidden {
  display: none;
}

</style>
