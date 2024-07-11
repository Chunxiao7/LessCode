<script lang="ts" setup>
import { SubMenuProps } from "./type";
defineProps<SubMenuProps>();
</script>
<template>
  <div class="sub-menu">
    <slot name="desc">{{ desc }}</slot>
    <template v-if="children && children.length">
      <SubMenu v-for="child in children" v-bind="child"> </SubMenu>
    </template>
    <MenuItem></MenuItem>
  </div>
</template>
<style lang="scss" scoped></style>
