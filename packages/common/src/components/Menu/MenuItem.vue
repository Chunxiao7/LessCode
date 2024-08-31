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
  background-color: #fafafa;
  &:hover {
    background-color: #ebebeb;
  }
  &.is-active {
    background-color: skyblue;
    color: blue;
  }
}
</style>
