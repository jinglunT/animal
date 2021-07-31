<template>
  <div class="hello">
   <div class="ui grid container">
      <div class="ui stackable row" v-for="(p,idx) in r" :key="idx">
        <div class="six wide column">
          <router-link :to = "p.to">
            <img class = "small" :src="p.i"/>
          </router-link>
        </div>

        <div class="ten wide column name">
          <router-link :to = "p.to">{{p.t}}
          </router-link>
          <p>{{p.p}}</p>
        </div>
       <hr/>
      </div>
      <div v-for="(p,idx) in post" class="ui stackable row" :key="idx" :class="{hidden: p.type != '爬蟲類' || !p.img}" >
        <div class="six wide column">
          <router-link :to = "'/p/' + idx">
            <img class = "small" :src="p.img"/>
          </router-link>
        </div>

        <div class="ten wide column name">
          <router-link :to = "'/p/' + idx">{{getTitle(p.text)}}
          </router-link>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    post: Array,
    r: Array
  },
  methods: {
    getTitle(t) {
      return (t.match((/^\s*#\s*(\S+)\n?/)) || ['',''])[1]
    }
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
  width: 300px;
}

.hidden {
  margin: 0 !important;
  padding: 0 !important;
  height: 0 !important;
}

.hidden * {
  display: none !important;
}

img.tiny {
  height: 6em;
  width: auto;
}
</style>
