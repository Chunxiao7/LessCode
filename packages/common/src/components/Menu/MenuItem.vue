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
  <div class="l-menu-item" :style="style" :class="{'first-level':level===1}">
    <div class="item-name">
      <i class="iconfont" :class="icon" v-if="icon"></i>
      <slot name="content">
        <div class="content">{{ name }}</div>
      </slot>
    </div>
  <slot name="arrow"/>
  </div>
</template>
<style lang="scss" scoped>
@import "../../style/common.scss";
.l-menu-item {
  @include flex(space-between);
  @include h-center(40px);
  padding-right: 12px;
  background-color: var(--gray-lightest);
  position: relative;
  &:hover {
    background-color: var(--gray-lighter);
  }
  &.is-active {
    background-color: var(--blue-lightest);
    color: var(--blue-dark);
  }
  &.first-level{
    background-color: var(--white-color);
  }
  .item-name{
    display: flex;
    align-items: center;
    flex: 1;
  }
  .iconfont{
    margin-right: 4px;
  }
  .content{
    flex: 1;
    @include show-line(1);
  }
}
</style>
