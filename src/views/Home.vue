<template>
  <div class="home">
    <HelloWorld :r="r" :a="a" msg="Welcome to Your Vue.js App" :post="post"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    post: Array,
    a: Array,
    r: Array
  },
}
</script>
