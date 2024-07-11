<script lang="ts" setup>
import { SideBarProps } from "./type";
defineProps<SideBarProps>();
const data: SubMenuProps[] = [
  {
    key: "menu1",
    title: "目录一",
    children: [
      { key: "1-1", title: "1-1" },
      { key: "1-2", title: "1-2" }
    ]
  },
  { key: "menu2", title: "目录二" },
  { key: "menu3", title: "目录三" }
];
</script>
<template>
  <div class="side-bar">
    <Menu :items="data"></Menu>
  </div>
</template>
<style lang="scss" scoped></style>
