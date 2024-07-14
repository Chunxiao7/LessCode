<script lang="ts" setup>
import { MenuItemProps } from "./type";
defineProps<MenuItemProps>();
</script>
<template>
  <div class="le-menu-item">
    <div class="title"><slot name="title"></slot></div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped></style>
