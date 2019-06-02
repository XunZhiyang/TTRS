import {
  SHOW_USER,
  CLOSE_USER
}from './type'
const state = {
  userShow:false
}
const actions ={
  showUserNow:({commit})=>{
    commit(SHOW_USER)
  },
  closeUserNow:({commit}) =>{
    commit(CLOSE_USER)
  }
}
const mutations = {
  [SHOW_USER](state){
    state.userShow = true
  },
  [CLOSE_USER](state){
    state.userShow = false
  }
}
export default {
  namespaced: true,
  mutations,
  state,
  actions
}
