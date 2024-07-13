<script lang="ts" setup>
import { useAttrs } from "vue";
import { SubMenuProps } from "./type";
defineProps<SubMenuProps>();
const attrs = useAttrs();
</script>
<template>
  <optgroup class="sub-menu" v-bind="attrs">
    <slot></slot>
  </optgroup>
</template>
<style lang="scss" scoped></style>
