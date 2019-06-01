/**
 * ocalStorage 封装类
 */
const LocalStorage = {
  /**
   * 将指定内容写入本地缓存
   * @param {string} key - 要保存的内容key
   * @param {*} param - 要保存的内容，参数任意
   */
  set (key, param) {
    localStorage.setItem(key, JSON.stringify(param))
  },

  /**
   * 从本地缓存中取出指定的内容
   * @param {string} key - 要获取的内容key
   * @return {Object} - res
   */
  get (key) {
    return JSON.parse(localStorage.getItem(key));
  }
};

export default LocalStorage
