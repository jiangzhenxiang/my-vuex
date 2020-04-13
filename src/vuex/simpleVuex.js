let Vue;

class Store {
    constructor(options) {
        // options是new Vuex.Store()时的传参：state、mutations、actions、getters
        // console.log('options', options);

        // 创建vue的实例 保证状态更新可以刷新视图,会被使用Object.defineProperty重新定义
        this.vm = new Vue({
            data: {
                state: options.state
            }
        });

        // getters:{
        //    gettersAge(state){
        //         return state.age + '岁'
        //    }
        //}
        let getters = options.getters;
        this.getters = {};
        const that = this;
        Object.keys(getters).forEach((getterName) => {
            // 重新定义 this.getters上的每一个属性
            Object.defineProperty(this.getters, getterName, {
                get() {
                    // 执行用户传入的getter方法 ，并传入state状态
                    return getters[getterName](that.state)
                }
            })
        });

        let mutations = options.mutations;
        this.mutations = {};
        Object.keys(mutations).forEach((mutationName) => {
            // 重新定义 this.getters上的每一个属性
            this.mutations[mutationName] = (payload) => { // 订阅
                mutations[mutationName](this.state, payload);
            }
        });

        let actions = options.actions;
        this.actions = {};
        Object.keys(actions).forEach((actionName) => {
            // 重新定义 this.getters上的每一个属性
            this.actions[actionName] = (payload) => { // 订阅
                actions[actionName](this, payload);
            }
        });
    }

    commit = (mutationName, payload) => {
        this.mutations[mutationName](payload); // 发布
    };

    dispatch = (actionName, payload) => {
        this.actions[actionName](payload)
    };

    // this.$store.state调用此方法
    get state() {
        return this.vm.state;
    }
}

const install = (_Vue) => {
    // vue的构造函数
    Vue = _Vue;

    Vue.mixin({
        // 组件的创建过程是先父后子
        beforeCreate() {
            // $options是new Vue()时的传参
            // 给实例增加$store。
            // console.log('this.$options', this.$options)
            if (this.$options.store) {
                this.$store = this.$options.store
            } else {
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    })

};

export default {
    Store,
    install,
}
