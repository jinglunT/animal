<template>
  <div>
    <div id="editor"> 
      <div v-for="(p,idx) in post" :to = "'/p/' + idx" :key="idx" v-show="idx == $route.params.id">
        <img :src="p.img" />
        <h1>{{p.user}}說:</h1>
        <vue-markdown class="inline">{{p.text}}</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';
import { db } from '../db'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  firestore: {
    post: db.collection('post'),
  },
  components: {
    VueMarkdown
  },
  data(){
    return {
      post: [],
      name: '訪客',
      input: '# hello'      
    }
  },
  methods: {
    add() {
      console.log(this.input)
      db.collection('post').doc(new Date().getTime()+"").set({
        user: this.name,
        text: this.input,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#editor {
  margin: 0;
  width: 66vw;
  height: 80vh;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  width: 100vw;
  display: inline-block;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  color: #fff;
}

code {
  color: #f66;
}

a {
  font-size: 14px;
  cursor: pointer;
}

img {
  width: 25vw;
}

.inline {
  width: 62vw !important;
  display: block;
}
</style>
