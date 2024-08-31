<script lang="ts" setup>
import { ref, StyleValue } from "vue";
import MenuItem from "./MenuItem.vue";
import { SubMenuProps } from "./type";
const props = withDefaults(defineProps<SubMenuProps>(), {
  level:0,
  visiable: true,
});
const visiable = ref(props.visiable);
const style:StyleValue ={
  paddingLeft:`${(props.level+1)*12}px`
}
</script>
<template>
  <div class="l-submenu" v-if="children && children.length">
    <div class="submenu-title" :style="style" @click.stop="visiable = !visiable">
      <div class="submenu-name">{{ name }}</div>
      <i
        class="iconfont"
        :class="visiable ? 'icon-jiantou_shang' :  'icon-jiantou_xia'"
      ></i>
    </div>
    <div class="submenu-next" v-show="visiable">
      <template v-if="children && children.length">
        <SubMenu v-for="child in children" v-bind="child" :level="level+1"/>
      </template>
    </div>
  </div>
  <MenuItem :name="name" :level="level+1" v-else></MenuItem>
</template>
<style lang="scss" scoped>
@import "../../style/common.scss";
.l-submenu {
  background-color: #fafafa;
  .submenu-title {
    @include h-center(40px);
    @include flex(row, space-between, center);
    &:hover {
      background-color: #ebebeb;
    }
    &.is-active {
      color: blue;
    }
  }
}
</style>
