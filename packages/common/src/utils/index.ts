/**
 * 查询字符串的子串是否存在数组中
 * @param arr 数组
 * @param str 字符串
 * @returns
 */
export function fuzzySearch(arr: string[], str: string) {
  for (let i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) !== -1) {
      return true;
    }
  }
  return false;
}

