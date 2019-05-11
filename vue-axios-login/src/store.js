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
    login({ commit }, loginObj) {
      axios
        .post("https://reqres.in/api/login", loginObj)
        .then(res => {
          let config = {
            headers: {
              "access-token": res.data.token
            }
          }
          axios
            .get("https://reqres.in/api/users/2", config)
            .then(res => {
              let userInfo = {
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
        })
        .catch(err => {
          console.log(err)
        })
      // let selectedUser = null
      // state.allUsers.forEach(user => {
      //   if (user.email === loginObj.email) {
      //     selectedUser = user
      //   }
      // })
      // if (
      //   selectedUser === null ||
      //   selectedUser.password !== loginObj.password
      // ) {
      //   commit("loginError")
      // } else {
      //   commit("loginSuccess", selectedUser)
      //   router.push({ name: "mypage" })
      // }
    },
    logout({ commit }) {
      commit("logout")
      router.push({ name: "home" })
    }
  }
})
