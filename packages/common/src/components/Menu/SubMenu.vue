<script lang="ts" setup>
import { inject, ref,computed } from "vue";
import MenuItem from "./MenuItem.vue";
import { SubMenuProps } from "./type";
const props = withDefaults(defineProps<SubMenuProps>(), {
  level:0,
});
const visiable = ref(true);
const collapsedVisiable = ref(false);
const isCollapsed = inject("isCollapsed") as ()=>boolean
const collapsed = computed(()=>{
  return isCollapsed()
})
const toggleVisiable = (val?:boolean)=>{
  if(typeof val !== "undefined" &&!collapsed.value) return
  if(collapsed.value){
    collapsedVisiable.value = true
    return
  }
  visiable.value = !visiable.value
}
</script>
<template>
    <div class="l-submenu"  v-if="children && children.length" @mouseleave="toggleVisiable(false)">
      <div class="submenu-title"  @click.stop="toggleVisiable()" @mouseover="toggleVisiable(true)">
        <MenuItem  :level="level+1" :icon="icon">
          <template #content>
            <Transition>
              <div class="content" v-show="!collapsed||collapsedVisiable">{{ name }}</div>
            </Transition>
          </template>
          <template #arrow>
            <Transition>
              <i
              v-show="!collapsed"
              class="iconfont"
              :class="[visiable ? 'icon-jiantou_shang' :  'icon-jiantou_xia','arrow']"
              />
            </Transition>
          </template>
        </MenuItem>
      </div>
      <div class="submenu-next" v-show="visiable&&!collapsed">
        <template v-if="children && children.length">
          <SubMenu v-for="child in children" v-bind="child" :level="level+1"/>
        </template>
      </div>
    </div>
    <MenuItem :class="{'is-collapsed':collapsed}" :name="name" :level="level+1" :icon="icon" @mouseover="toggleVisiable(true)" @mouseleave="toggleVisiable(false)" v-else>
      <template #content>
        <Transition>
          <div class="content" v-show="!collapsed||collapsedVisiable">{{ name }}</div>
        </Transition>
      </template>
    </MenuItem>
</template>
<style lang="scss" scoped>
@import "../../style/common.scss";
.v-enter-active {
  transition: all 100ms ease-out;
}
.v-leave-active {
  transition: all 100ms ease-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.content{
  @include show-line(1);
  flex:1;
}
.is-collapsed{
  .l-menu-item{
    .content{
      width: 100%;
      @include vh-center(30px);
      position: absolute;
      background-color: black;
      color: white;
      right: -120%;
      &::after{
        position: absolute;
        bottom: 150%;
        left: 50%;
        margin-left: -5px;
        width: 0;
        border-top: 5px solid #000;
        border-top: 5px solid hsla(0, 0%, 20%, 0.9);
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        content: " ";
         font-size: 0;
        line-height: 0;
      }
    }
  }
}
.l-submenu {
  .submenu-title {
    @include h-center(40px);
    &.is-active {
      color: var(--blue-dark);
    }
  }
}
</style>
