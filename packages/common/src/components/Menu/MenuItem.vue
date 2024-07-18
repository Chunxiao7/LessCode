<script lang="ts" setup>
import { MenuItemProps } from "./type";
defineProps<MenuItemProps>();
</script>
<template>
  <li class="l-menu-item">
    <slot>{{ name }}</slot>
  </li>
</template>
