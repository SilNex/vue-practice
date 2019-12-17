<template>
  <div>
    <h1>{{ homeTitle }}</h1>
    <AppStatus></AppStatus>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        homeTitle: "홈 입니다."
      };
    }
  };
</script>

