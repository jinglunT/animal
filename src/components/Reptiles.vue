<template>
  <div class="hello">
   <div class="ui grid container">
      <div class="ui row">
        <div class="six wide column">
          <img class = "small" :src="'./IMG_7680.JPG'"/>
        </div>
        <div class="ten wide column name">
          <router-link to ="/reptiles2" target="_blank">豹紋守宮 Eublepharis macularius</router-link>
          <p>豹紋守宮因外型討喜，在國內外成為了相當</p>
          <p>熱門的寵物，飼養方面也不難，只要注意好</p>
          <p>幾件事，就可以讓牠們過得很好了。</p>
        </div>
      </div>
      
      <div class="ui row">
        <div class="six wide column">
          <img class = "small" :src="'./IMG_7719.JPG'"/>
        </div>
        <div class="ten wide column name">
          <router-link to ="/reptiles3" target="_blank">肥尾守宮 Hemitheconyx caudicinctus</router-link>
          <p>肥尾守宮的個性溫和，但是較為膽小，剛入手</p>
          <p>的個體經常容易受的驚嚇，需要一段時間培養</p>
          <p>信任感才適合上手。</p>
        </div>
      </div>
      <div class="ui row">
        <div class="six wide column">
          <img class="small" :src="'./IMG_4451.jpg'">
        </div>
        <div class="ten wide column name">
          <p>睫角守宮</p>
        </div>
      </div>
      <hr/>
      <div v-for="(p,idx) in post" class="ui row" :key="idx" :class="{hidden: p.type != '爬蟲類' || !p.img}" >
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
    post: Array
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
