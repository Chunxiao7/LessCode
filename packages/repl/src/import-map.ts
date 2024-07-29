import { computed, version as currentVersion, ref } from 'vue'

export function useVueImportMap(
  defaults: {
    runtimeDev?: string | (() => string) //开发环境cdn地址
    runtimeProd?: string | (() => string) //生产环境cdn地址
    serverRenderer?: string | (() => string) //vue服务端渲染cdn地址
    vueVersion?: string | null //vue版本
  } = {},
) {
  //如果为函数，返回执行结果，如果为字符串则直接返回
  function normalizeDefaults(defaults?: string | (() => string)) {
    if (!defaults) return
    return typeof defaults === 'string' ? defaults : defaults()
  }
  //是否为生产环境
  const productionMode = ref(false)
  //vue版本
  const vueVersion = ref<string | null>(defaults.vueVersion || null)
  const importMap = computed<ImportMap>(() => {
    //vue的cdn
    const vue =
      (!vueVersion.value &&
        normalizeDefaults(
          productionMode.value ? defaults.runtimeProd : defaults.runtimeDev,
        )) ||
      `https://cdn.jsdelivr.net/npm/@vue/runtime-dom@${
        vueVersion.value || currentVersion
      }/dist/runtime-dom.esm-browser${productionMode.value ? `.prod` : ``}.js`
    //服务端渲染cdn
    const serverRenderer =
      (!vueVersion.value && normalizeDefaults(defaults.serverRenderer)) ||
      `https://cdn.jsdelivr.net/npm/@vue/server-renderer@${
        vueVersion.value || currentVersion
      }/dist/server-renderer.esm-browser.js`
    return {
      imports: {
        vue,
        'vue/server-renderer': serverRenderer,
      },
    }
  })

  return {
    productionMode,
    importMap,
    vueVersion,
    defaultVersion: currentVersion,
  }
}

export interface ImportMap {
  imports?: Record<string, string | undefined>
  scopes?: Record<string, Record<string, string>>
}

// 合并imports和scopes
export function mergeImportMap(a: ImportMap, b: ImportMap): ImportMap {
  return {
    imports: { ...a.imports, ...b.imports },
    scopes: { ...a.scopes, ...b.scopes },
  }
}
