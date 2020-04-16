<template>
    <div id="app">
        <h1>简易</h1>
        hello,world
        我今天{{$store.state.age}}
        <button @click="syncAdd">syncAdd</button>
        <button @click="asyncAdd">asyncAdd</button>
        <hr>
        gettersAge:{{$store.getters.gettersAge}}
        <hr>
        <HelloWorld></HelloWorld>

        <hr>
        <h1>官方</h1>
        我的年龄{{age}}
        <br/>
        我的getter年龄 {{myAge}}
        {{$store.state.a.age}}
        {{$store.state.b.c.age}}
        {{$store.state.b.age}}
        <br/>
        {{$store.state.b.d.age}}
        <br/>
        <button @click="syncChange()">点我更改</button>
        <button @click="asyncChange()">异步更改</button>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    mounted() {
        console.log('store', this.$store)
    },
    computed: { // 只是写成了计算属性
        ...mapGetters(['myAge']),
        ...mapState(['age'])
    },
    methods: {
        syncAdd() {
            this.$store.commit('syncAdd', 1)
        },
        asyncAdd() {
            this.$store.dispatch('asyncAdd', 10)
        },
        ...mapMutations({aaa: 'syncChange'}),
        ...mapActions({bbb: 'asyncChange'}),
        syncChange() {
            // 如果父亲没有命名空间 就不要增加父亲的命名空间
            this.aaa(10);
        },
        asyncChange() {
            this.bbb(5)
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
