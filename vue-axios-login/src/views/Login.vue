<template>
  <v-container fill-height style="max-width:450px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert class="mb-3" :value="isLoginError" type="error">
          아이디와 비밀번호를 확인해주세요
        </v-alert>
        <v-alert class="mb-3" :value="isLogin" type="success">
          로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일"> </v-text-field>
            <v-text-field v-model="password" type="password" label="패스워드">
            </v-text-field>
            <v-btn
              color="primary"
              large
              block
              depressed
              @click="
                login({
                  email,
                  password
                })
              "
              >Login</v-btn
            >
            <v-btn @click="test()">테스트</v-btn>
            <v-btn @click="postTest()">포스트테스트</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"
import axios from "axios"

export default {
  data() {
    return {
      email: null,
      password: null
      // allUsers: [
      //   { id: 1, name: "silnex", email: "silnex@silnex.kr", password: "1234" },
      //   { id: 2, name: "noone", email: "noone@silnex.kr", password: "1234" }
      // ],
      // isError: false,
      // loginSuccess: false
    }
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"]),
    test() {
      axios
        .get("https://reqres.in/api/")
        .then(res => {
          // handle success
          console.log(res)
        })
        .catch(err => {
          // handle error
          console.log(err)
        })
        .finally(() => {
          // always executed
        })
    },
    postTest() {
      axios
        .post("https://reqres.in/api/register", {
          email: "eve.holt@reqres.in",
          password: "pistol"
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
    // login() {
    //   let selectedUser = null
    //   this.allUsers.forEach(user => {
    //     if (user.email === this.email) {
    //       selectedUser = user
    //     }
    //   })
    //   selectedUser === null
    //     ? (this.isError = true)
    //     : selectedUser.password !== this.password
    //     ? (this.isError = true)
    //     : (this.loginSuccess = true)
    //   console.log(this.email, this.password)
    // }
  }
}
</script>
