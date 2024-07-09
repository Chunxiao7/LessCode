import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"]
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/libs/style/index.scss"; 
        `
      }
    }
  }
});
