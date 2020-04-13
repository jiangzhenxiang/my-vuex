import Vue from 'vue'
// import Vuex from 'vuex';
import Vuex from '../vuex';

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
