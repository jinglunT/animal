<template>
  <div class="hello">
    <h1>
      <img class="center" :src="'./首頁背景.JPG'" />
    </h1>
    <div class="ui container">

      <div class="ui form">
        <div class="ui input">
          <input type="text" autofocus="autofocus" name="" v-model="key" placeholder="關鍵字查詢" />
        </div>
      </div>
      <br/>
      <button v-for="t in tags0" :key="t" @click="key=t">{{t}}</button>
      <br/>
      <button v-for="t in tags1" :key="t" @click="key=t">{{t}}</button>
      <br/>
      <button v-for="t in tags2" :key="t" @click="key=t">{{t}}</button>
      <br/>
      <button v-for="t in tags3" :key="t" @click="key=t">{{t}}</button>
      <br/>
      <h3 v-show="nothing()">抱歉，目前還沒有該關鍵字的文章</h3>
      <br/>
      <div v-for="(p,idx) in a" class="ui row" :key="'a' + idx" :class="{hidden: !key || key == '' || !p.i}">
        <router-link :to = "p.to" v-show="(!key || (p.t + p.type + p.p).indexOf(key) > -1 )">
          <div><img class = "tiny" :src="p.i"/>{{p.t}}</div>
        </router-link>
      </div>
      <div v-for="(p,idx) in r" class="ui row" :key="'r' + idx" :class="{hidden: !key || key == '' || !p.i}">
        <router-link :to = "p.to" v-show="(!key || (p.t + p.p).indexOf(key) > -1 )">
          <div><img class = "tiny" :src="p.i"/>{{p.t}}</div>
        </router-link>
      </div>
      <div v-for="(p,idx) in post" class="ui row" :key="'post' + idx" :class="{hidden: !key || key == '' || !p.img}">
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
    post: Array,
    a: Array,
    r: Array
  },
  data () {
    return {
      key: '',
      tags0: ['水族', '蝦虎'],
      tags1: ['昆蟲', '兜蟲', '鍬形蟲'],
      tags2: ['守宮', '睫角守宮', '豹紋', '肥尾', '瘤尾守宮'],
      tags3: ['陸龜', '澤龜', '箱龜', '蛋龜', '歐系陸龜', '蘇卡達', '紅腿', '亞達伯拉']
    }
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

.ui.container {
  padding-left: 6em;
}

.ui.row {
  margin: .5em 0;
}

</style>
