<template>
  <div>
    <form>
      <input type="text" name="" v-model="name" placeholder="您的大名" />
      類別:
      <select name="" v-model="type" placeholder="類別">
        <option>水族類</option>
        <option>爬蟲類</option>
        <option>昆蟲與節肢動物類</option>
      </select>
      圖片:

      <img :src = "previewImage" class="uploading-image" />
      <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">

      <a @click="add()">發文!</a>
    </form>

    <div id="editor">    
      <textarea v-model="input"></textarea>
      <vue-markdown :source = "input"></vue-markdown>
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
      previewImage:null,
      post: [],
      img: '',
      type: '水族類',
      name: '訪客',
      input: '# hello'      
    }
  },
  methods: {
    uploadImage(e){
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e =>{
            this.previewImage = e.target.result;
            console.log(this.previewImage);
        };
    },
    add() {
      console.log(this.input)
      db.collection('post').doc(new Date().getTime()+"").set({
        user: this.name,
        img: this.previewImage,
        type: this.type,
        text: this.input,
        time: new Date()
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      })
      this.input = '# hello'
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

.uploading-image {
  width: 200px;
}
</style>
