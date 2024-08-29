<script lang="ts" setup>
import { ref, onMounted } from "vue";
import SubMenu from "./SubMenu.vue";
import { MenuProps } from "./type";
defineProps<MenuProps>();
let childrenDom: HTMLElement[] = [];
const classNames = ["l-menu-item", "submenu-title"];
const menuDom = ref<HTMLElement>();
const handleClick = (e: Event) => {
  let dom = e.target as HTMLElement | null;
  childrenDom.forEach((dom) => {
    dom.classList.remove("is-active");
  });
  while (dom && dom !== menuDom.value) {
    if (dom.className.indexOf("l-menu-item") !== -1)
      dom.classList.add("is-active");
    dom = dom.parentElement;
    if (dom?.className === "l-submenu") {
      dom.firstElementChild?.classList.add("is-active");
    }
  }
};
onMounted(() => {
  classNames.forEach((cn) => {
    const doms = menuDom.value?.querySelectorAll<HTMLElement>(`.${cn}`);
    if (doms && doms[Symbol.iterator]) childrenDom.push(...doms);
  });
});
</script>
<template>
  <div ref="menuDom" class="l-menu" :class="theme" @click="handleClick">
    <SubMenu v-for="item in items" v-bind="item" :key="item.key"></SubMenu>
  </div>
</template>
<style lang="scss" scoped>
.l-menu {
  & > div {
    background-color: #fff;
  }
}
</style>
