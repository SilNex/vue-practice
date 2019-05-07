<template>
  <v-container>
    <h1>Home</h1>
    <h4>모든 유저의 수: ({{ $store.getters.allUsersCount }})</h4>
    <h1>서울 유저의 수: ({{ $store.getters.countOfSeoul }})({{ $store.getters.percentOfSeoul }}%)</h1>
  </v-container>
</template>
