import Vue from "vue"
import Vuex from "vuex"
import router from "./router"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: "silnex", email: "silnex@silnex.kr", password: "1234" },
      { id: 2, name: "noone", email: "noone@silnex.kr", password: "1234" }
    ],
    isLogin: false,
    isLoginError: false
  },
  subscribe: mutation => {
    // this.dispatch("getMemberInfo")
    console.log(mutation)
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
    login({ dispatch }, loginObj) {
      axios
        .post("https://reqres.in/api/login", loginObj)
        .then(res => {
          let token = res.data.token
          localStorage.setItem("access_token", token)
          dispatch("getMemberInfo")
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout({ commit }) {
      commit("logout")
      localStorage.removeItem("access_token")
      router.push({ name: "home" })
    },
    getMemberInfo({ commit }) {
      let token = localStorage.getItem("access_token")
      let userInfo = {}
      let config = {
        headers: {
          "access-token": token
        }
      }
      axios
        .get("https://reqres.in/api/users/2", config)
        .then(res => {
          userInfo = {
            id: res.data.data.id,
            first_name: res.data.data.first_name,
            last_name: res.data.data.last_name,
            avatar: res.data.data.avatar
          }
          commit("loginSuccess", userInfo)
        })
        .catch(err => {
          alert("이메일과 비밀번호를 확인해주세요")
          console.log(err)
        })
      console.log(userInfo)
    }
  }
})
