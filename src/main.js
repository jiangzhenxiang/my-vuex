import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import store from './store/full'

Vue.config.productionTip = false

new Vue({
  store, // 在vue初始化的过程中 注入了一个store属性, 内部会将这个属性放到每个组件的$store上
  render: h => h(App)
}).$mount('#app')
