<script lang="ts" setup>
import { ButtonProps } from "./type";
defineProps<ButtonProps>();
</script>
<template>
  <div>
    <button>
      <slot></slot>
    </button>
  </div>
</template>
<style lang="scss" scoped></style>
