<script lang="ts" setup>
import { ref } from "vue";
import { MenuProps } from "./type";
import MenuItem from "./MenuItem.vue";
const props = defineProps<MenuProps>();
const visiables = ref(props.items.map(() => true));
</script>
<template>
  <div v-for="(item, index) in items" class="le-menu" :key="item.key" v-show="visiable" :class="theme">
    <template v-if="item.children && item.children.length">
      {{ item.title }}
      <button @click="visiables[index] = !visiables[index]">click</button>
      <Menu :items="item.children" :visiable="visiables[index]"> </Menu>
    </template>
    <template v-else>
      <MenuItem v-bind="item">
        <template #title>
          {{ item.title }}
        </template>
      </MenuItem>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.dark {
  background-color: black;
}
.le-menu {
  // background-color: chocolate;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
