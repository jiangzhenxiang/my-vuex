<template>
  <div id="app">
    hello,world
    我今天{{$store.state.age}}

    <button @click="syncAdd">syncAdd</button>
    <button @click="asyncAdd">asyncAdd</button>

    <hr>

    gettersAge:{{$store.getters.gettersAge}}


    <hr>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: 'App',
  components:{
    HelloWorld
  },
  mounted() {
    console.log('store', this.$store)
  },
  methods:{
    syncAdd() {
      this.$store.commit('syncAdd', 1)
    },
    asyncAdd() {
      this.$store.dispatch('asyncAdd', 10)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
