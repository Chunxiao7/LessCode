<script lang="ts" setup>
import SubMenu from "./SubMenu.vue";
import { MenuProps } from "./type";
defineProps<MenuProps>();
</script>
<template>
  <div class="l-menu" :key="item.key" :class="theme" v-for="item in items">
    <SubMenu v-bind="item"></SubMenu>
  </div>
</template>
<style lang="scss" scoped>
.dark {
  background-color: rgb(94, 73, 73);
  color: #fff;
}
.l-menu {
  // background-color: chocolate;
  padding: var(--padding-size);
  &:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
