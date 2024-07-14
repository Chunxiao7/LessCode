<script lang="ts" setup>
import { Button } from "@lesscode/common";
import { ElButton } from "element-plus";
</script>
<template>
  <div class="side-bar">
    <Button size="mini" type="primary"></Button>
    <Menu :items="data"></Menu>
  </div>
</template>
<style lang="scss" scoped></style>
