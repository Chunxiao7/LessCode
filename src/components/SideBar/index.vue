<script lang="ts" setup>
import { SideBarProps } from "./type";
defineProps<SideBarProps>();
const data = [
  {
    title: "目录一",
    children: [{ title: "1-1" }, { title: "1-2" }]
  },
  {
    title: "目录二"
  },
  {
    title: "目录三"
  }
];
</script>
<template>
  <select>
  <optgroup label="水果">
    <option value="apple">苹果</option>
    <optgroup label="热带水果">
      <option value="banana">香蕉</option>
      <option value="mango">芒果</option>
    </optgroup>
  </optgroup>
  <MenuItem n></MenuItem>
  <optgroup label="蔬菜">
    <option value="tomato">西红柿</option>
    <optgroup label="绿叶蔬菜">
      <option value="spinach">菠菜</option>
      <option value="lettuce">生菜</option>
    </optgroup>
  </optgroup>
</select>
</template>
<style lang="scss" scoped></style>
