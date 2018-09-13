/* eslint-disable no-new */
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '初期メッセージ'
  },
  getters: {
    // メッセージを使用するゲッター
    // stateに直接アクセスすることもできるが、使う側が混乱しないようにgettersに統一するのもおすすめ
    message (state) {
      return state.message
    }
  },
  mutations: {
    // メッセージを変更するmutation
    setMessage (state, payload) {
      state.message = payload.message
    },
    actions: {
      doUpdata ({
        commit
      }, message) {
        commit('setMessage', {
          message
        })
      }
    }
  }
})
export default store
