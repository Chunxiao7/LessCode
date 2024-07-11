<script lang="ts" setup>
import { MenuItemProps } from "./type";
defineProps<MenuItemProps>();
</script>
<template>
  <div class="menu-item">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.menu-item {
  list-style: none;
  padding: 12px;
  text-align: center;
  background-color: $--menu-item-bg-color;
}
</style>
