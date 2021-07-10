<template>
  <div>
    <router-link v-for="(p,idx) in post" :to = "'/p/' + idx" :key="idx">
      <div>{{p.user}}說:{{p.text.substr(0,20)}}</div>
    </router-link>
    
    <div id="editor">    
      <textarea v-model="input"></textarea>
      <vue-markdown :source = "input"></vue-markdown>
    </div>

    <form>
      <input type="text" name="" v-model="name" placeholder="您的大名" />
      <a @click="add()">發文!</a>
    </form>
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
  height: 80vh;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  color: #fff;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
  color: #333;
}

code {
  color: #f66;
}

a {
  font-size: 14px;
  cursor: pointer;
}
</style>
