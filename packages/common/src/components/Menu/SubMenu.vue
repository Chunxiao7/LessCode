<script lang="ts" setup>
import { ref } from "vue";
import MenuItem from "./MenuItem.vue";
import { SubMenuProps } from "./type";
const props = withDefaults(defineProps<SubMenuProps>(), {
  visiable: true,
});
const visiable = ref(props.visiable);
</script>
<template>
  <div class="l-submenu" v-if="children && children.length">
    <div class="submenu-title">
      <div class="submenu-name">{{ name }}</div>
      <i
        class="iconfont"
        :class="visiable ? 'icon-jiantou_xia' : 'icon-jiantou_shang'"
        @click="visiable = !visiable"
      ></i>
    </div>
    <ul v-show="visiable">
      <template v-if="children && children.length">
        <SubMenu v-for="child in children" v-bind="child" />
      </template>
    </ul>
  </div>
  <MenuItem :name="name" v-else></MenuItem>
</template>
