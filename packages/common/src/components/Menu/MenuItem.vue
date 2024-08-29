<script lang="ts" setup>
import { MenuItemProps } from "./type";
defineProps<MenuItemProps>();
</script>
<template>
  <div class="l-menu-item">
    <slot>{{ name }}</slot>
  </div>
</template>
<style lang="scss" scoped>
@import "../../style/common.scss";
.l-menu-item {
  padding-left: 12px;
  @include h-center(40px);
  background-color: #fafafa;
  &:hover {
    background-color: #ebebeb;
  }
  &.is-active {
    background-color: skyblue;
  }
}
</style>
