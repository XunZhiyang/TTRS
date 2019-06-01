import LocalStorage from '@/utils/LocalStorage'
import types        from './types';

export default {
  // 存储登录状态
  [types.MUTATION.STORE_LOGIN_STATE](state, user){
    state.loginUser = user;
    LocalStorage.set('user', state);
  },
  // 添加新用户
  [types.MUTATION.STORE_NEW_USER](state, newUser){
    state.userSet[newUser.username] = newUser;
    LocalStorage.set('user', state);
  }
}
