import types from './types';

export default {
  /**
   * 是否为注册用户
   * @param state
   * @returns {function(*): boolean}
   */
  [types.GETTER.IS_SIGN_UP_USER]: state => username => {
    return !!state.userSet[username];
  },
  /**
   * 检查登录密码是否正确
   * @param state
   * @returns {function(*): boolean}
   */
  [types.GETTER.PASSWORD_CHECK]: state => user => {
    const __user = state.userSet[user.username];
    return __user && __user.password === user.password;
  }
}
