<template>
  <div>
    <h1>{{ title }}</h1>
    <div>{{ count }}</div>
    <button @click="count++">추가</button>
    <AppStatus></AppStatus>
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
  import HomeComponent from './Home'

  export default {
    components: {
      HomeComponent
    },
    data() {
      return {
        title: "안녕하세요.",
        count: 0
      }
    }
  }
</script>
