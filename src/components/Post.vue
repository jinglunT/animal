<template>
  <div>
    <h3>發文規範</h3>
    <h4>發文前請先閱讀以下發文注意事項 : </h4>
   <ol>
      <li>本網站對於文章的內容是相當開放的，文章中出現少量髒話也ok，但請不要變成人身攻擊。</li>
      <li>如果出現被寵物咬傷或是寵物受傷的畫面，請在文章開頭先提醒讀者。</li>
      <li v-show="!more"><button @click="more = true">看更多</button></li>
      <li v-show="more">如果有推薦的飼料或用品或店家，都是可以分享出來的，不過請不要變成打廣告。</li>
      <li v-show="more">如要文內附圖，請用markdown語法：![替代文字](圖片網址)</li>
      <li v-show="more"><img src="螢幕擷取畫面 (389).jpg"></li>
      <li v-show="more">
        <button @click="more = false">縮回</button>
      </li>
    </ol>
    <form>
      <input type="text" name="" v-model="name" placeholder="您的大名" />
      類別:
      <select name="" v-model="type" placeholder="類別">
        <option>水族類</option>
        <option>爬蟲類</option>
        <option>昆蟲與節肢動物類</option>
      </select>

      <img :src = "previewImage" class="uploading-image" v-show="hasImage" />
      圖片:
      <image-uploader @input="setImage"></image-uploader>

      <a class ="ui green button" @click="add()">發文!</a>
    </form>

    <div id="editor">    
      <textarea v-model="input"></textarea>
      <vue-markdown :source = "input"></vue-markdown>
    </div>

  </div>
</template>

<script>

import ImageUploader from 'vue-image-upload-resize'
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
    VueMarkdown,
    ImageUploader
  },
  data(){
    return {
      more: false,
      hasImage: false,
      previewImage:null,
      post: [],
      img: '',
      type: '水族類',
      name: '訪客',
      input: '# 標題'
    }
  },
  methods: {
    setImage: function (file) {
      this.hasImage = true
      this.previewImage = file
    },
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

ol {
  width: 600px;
  margin: 0 auto;
  text-align: left;
}

ol li {
  text-align: left;
}
</style>
