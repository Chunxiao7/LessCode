<script lang="ts" setup>
import SubMenu from "./SubMenu.vue";
import { MenuProps } from "./type";
defineProps<MenuProps>();
</script>
<template>
  <div class="menu">
    <template v-if="items.length">
      <template v-for="item in items">
        <SubMenu v-bind="item"></SubMenu>
      </template>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
<style lang="scss" scoped></style>
