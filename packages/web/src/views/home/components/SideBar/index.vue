<script lang="ts" setup>
import {Menu,SubMenuProps} from "@lesscode/common";
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
  <div class="side-bar">
    <Menu :items="items"></Menu>
  </div>
</template>
<style lang="scss" scoped></style>
