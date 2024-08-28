<script setup>
import { watchEffect } from "vue";
import { Repl, useStore } from "@vue/repl";
import Monaco from "@vue/repl/monaco-editor";

const store = useStore();
watchEffect(() => history.replaceState({}, "", store.serialize()));
</script>

<template>
  <Repl :store="store" :editor="Monaco" :showCompileOutput="true" />
</template>
