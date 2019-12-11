/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
    // 有效ID检测
    //  固定ID
  const valid_map = ['kywyadmin']
return valid_map.indexOf(str.trim()) >= 0
// 自定义ID
//   let reg_valid_map = /^(?![0-9]+$(?![a-zA-Z]+$)[0-9a-zA-Z]{4,})$/
//   return reg_valid_map.test(str)
}
