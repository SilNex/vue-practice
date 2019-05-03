<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <p>{{ getDateFormat(createAt) }}</p>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail 
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
        >
        </UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"
import { dateFormat } from '../mixins/dateFormat'

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return {
      name: 'Seung',
      address: 'Korea',
      phone: '010-1234-5678',
      hasDog: false,
      createAt: new Date(),
    }
  },
  methods: {
    parents (user) {
      this.name = user.name
      this.address = user.address
      this.phone = user.phone
      this.hasDog = user.hasDog
    },
    // getDateFormat (date) {
    //   if (date) {
    //     let hours = date.getHours()
    //     let minutes = date.getMinutes()
    //     let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()} ${hours}:${(date.getMinutes()<10?'0':'')}${minutes}`
    //     return fullDate
    //   } else {
    //     return null
    //   }
    // }
  },
  mixins: [ dateFormat ]
}
</script>