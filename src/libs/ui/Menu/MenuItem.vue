<script lang="ts" setup>
import { useAttrs } from "vue";
import { MenuItemProps } from "./type";
defineProps<MenuItemProps>();
const attrs = useAttrs();
</script>
<template>
  <option v-bind="attrs" class="menu-item">
    <slot></slot>
  </option>
</template>
<style lang="scss" scoped>
.menu-item {
  list-style: none;
  padding: 12px;
  text-align: center;
  background-color: $--menu-item-bg-color;
}
</style>
