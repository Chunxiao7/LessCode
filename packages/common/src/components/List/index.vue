<script lang="ts" setup>
import { ListProps } from "./type";
defineProps<ListProps>();
</script>
<template>
  <ul class="le-list">
    <li class="le-list-item" v-for="item in list">
      <slot name="listItem" :item="item"></slot>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.le-list {
  .le-list-item {
    list-style: none;
  }
}
</style>
