<script setup lang="ts">
import Menu from "./components/Menu/index.vue";
import List from "./components/List/index.vue";
const items = [
  {
    key: "1",
    name: "1",
  },
  {
    key: "2",
    name: "2",
    children: [
      {
        key: "2-1",
        name: "2-1",
      },
    ],
  },
  {
    key: "3",
    name: "3",
  },
];
</script>

<template>
  <div>
    <Menu :items="items" :visiable="true" theme="dark"></Menu>
    <!-- <List :list="items">
      <template #listItem="{ item }">
        <div class="test">{{ item.title }}</div>
      </template>
    </List> -->
  </div>
</template>

<style scoped></style>
