// 生成vue组件
function generateVueComponents(vueFragment) {
  // 提取 script 部分和 template 部分
  const scriptMatch = vueFragment.match(/<script setup>([\s\S]*?)<\/script>/);
  const templateMatch = vueFragment.match(/<template>([\s\S]*?)<\/template>/);

  if (scriptMatch && templateMatch) {
    const scriptContent = scriptMatch[1];
    const templateContent = templateMatch[1];

    // 拼接完整的.vue 文件内容
    const vueFileContent = `
<template>
${templateContent}
</template>

<script setup>
${scriptContent}
</script>
`;

    // 在这里可以将 vueFileContent 保存到一个.vue 文件中
    // 例如，使用文件写入操作或其他适合你项目的方式
    console.log(vueFileContent);
  } else {
    console.error("无法正确解析 Vue 片段中的 script 和 template 部分");
  }
}

generateVueFile(vueFragment);
