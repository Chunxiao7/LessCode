<script lang="ts" setup>
import {  StyleValue, withDefaults } from "vue";
import { MenuItemProps } from "./type";
const props = withDefaults(defineProps<MenuItemProps>(),{
  level:1
})
const style:StyleValue = {
  paddingLeft:`${props.level*12}px`
}
</script>
<template>
  <div class="l-menu-item" :style="style">
    <slot>{{ name }}</slot>
  </div>
</template>
<style lang="scss" scoped>
@import "../../style/common.scss";
.l-menu-item {
  @include h-center(40px);
  background-color: var(--gray-lightest);
  &:hover {
    background-color: var(--gray-lighter);
  }
  &.is-active {
    background-color: var(--blue-lightest);
    color: var(--blue-dark);
  }
}
</style>
