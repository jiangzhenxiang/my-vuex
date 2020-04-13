import Vue from 'vue'
// 官方vuex
// import Vuex from 'vuex';

// 简易vuex
import Vuex from '../vuex/simpleVuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        age: 18,
    },
    strict:true,
    getters:{ // computed
        gettersAge(state){ // 以前用vue中的计算属性
            return state.age + '岁'
        }
    },
    mutations: {
        syncAdd(state, payload) {
            state.age += payload;
        }
    },
    actions: {
        asyncAdd({commit}, payload) {
            setTimeout(() => {
                commit('syncAdd', payload)
            }, 500);
        }
    },
    modules: {}
})
