import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: ["vue"]
    }
  },
  plugins: [vue(), dts({ insertTypesEntry: true, copyDtsFiles: false })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "src/style/index.scss"; 
        `
      }
    }
  }
});
