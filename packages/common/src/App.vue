<script setup lang="ts">
import Menu from "./components/Menu/index.vue";
import { SubMenuProps } from "./components/Menu/type";
const items: SubMenuProps[] = [
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
        children: [
          {
            key: "3-1",
            name: "3-1",
          },
        ],
      },
      {
        key: "2-2",
        name: "2-2",
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
    <Menu :items="items" :visiable="true"></Menu>
    <!-- <List :list="items">
      <template #listItem="{ item }">
        <div class="test">{{ item.title }}</div>
      </template>
    </List> -->
  </div>
</template>

<style scoped></style>
