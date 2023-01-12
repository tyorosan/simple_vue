import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions :{
    increment (context) {
      context.commit("increment");
    },
    decrement (context) {
      context.commit("decrement");
    }
  }
});

new Vue({
  el: ".app",
  store,
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    increment () {
      store.dispatch("increment");
    },
    decrement () {
      store.dispatch("decrement");
    },
  },
})
