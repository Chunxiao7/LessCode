<script lang="ts" setup>
import { watchEffect } from "vue";
import { Repl, useStore, useVueImportMap } from "@vue/repl";
import Monaco from "@vue/repl/monaco-editor";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
let vueFile;
watchEffect(() => {
  history.replaceState({}, "", store.serialize());
  vueFile = store.files["src/App.vue"].code;
  // router.addRoute({
  //   path: "test"
  // });
});
</script>
<template>
  <div class="home-page">
    <Repl :store="store" :editor="Monaco" :showCompileOutput="true" />
  </div>
</template>
<style lang="scss" scoped>
.home-page {
  height: 100vh;
}
</style>
