import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
export default defineConfig({
  build: {
    target: "modules",
    //打包文件目录
    outDir: "dist/es",
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["src/index.ts"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "dist/es",
          preserveModulesRoot: "src"
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "dist/lib",
          preserveModulesRoot: "src"
        }
      ]
    },
    lib: {
      entry: "./index.ts",
      formats: ["es", "cjs"]
    }
  },
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.app.json"
    }),
    dts({
      outDir: "dist/lib",
      tsconfigPath: "./tsconfig.app.json"
    })
  ]
});
