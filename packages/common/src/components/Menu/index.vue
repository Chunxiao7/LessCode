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
