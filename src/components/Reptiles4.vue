<template>
  <div class="hello">
  <img :src="'./IMG_7715.JPG'">
  <h2>肥尾守宮</h2>
  <h4>簡介:</h4>
  <p>肥尾守宮與豹紋守宮的飼養方式極為相似，唯一的差別就是濕度，肥尾守宮喜愛的溼度比豹紋守宮稍高一點，飼養箱裡放個小水盆大約2~3天噴一次水就好了。</p>
  <h4>餵食:</h4>
  <p>與多數肉食性爬蟲一樣，餵食櫻桃紅蟑 蟋蟀 或是杜比亞蟑螂就OK了，食物大小不要大於守宮的頭，</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
</style>
