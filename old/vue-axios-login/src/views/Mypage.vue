<template>
  <div>
    <h1>Welcome {{ userInfo.first_name }} {{ userInfo.last_name }}!</h1>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  beforeCreate() {
    this.$store.dispatch("getMemberInfo")
  },
  computed: {
    ...mapState(["userInfo"])
  }
}
</script>
