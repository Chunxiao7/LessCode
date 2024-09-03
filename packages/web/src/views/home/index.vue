<script lang="ts" setup>
import SideBar from "./components/SideBar/index.vue"
import Main from "./components/Main/index.vue"
</script>
<template>
  <div class="home-page">
    <SideBar></SideBar>
    <Main></Main>
  </div>
</template>
<style lang="scss" scoped>
.home-page {
  height: 100vh;
  display: grid;
  grid-template-columns: 200px auto;
}
</style>
