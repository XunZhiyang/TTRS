import {
  SHOW_USER,
  CLOSE_USER,
  OPEN_ORDER,
  CLOSE_ORDER
}from './type'
const state = {
  userShow:false,
  orderShow:false
}
const actions ={
  showUserNow:({commit})=>{
    commit(SHOW_USER)
  },
  closeUserNow:({commit}) =>{
    commit(CLOSE_USER)
  },
  openOrder:({commit}) =>{
    commit(OPEN_ORDER)
  },
  closeOrder:({commit}) =>{
    commit(CLOSE_ORDER)
  }
}
const mutations = {
  [SHOW_USER](state){
    state.userShow = true
  },
  [CLOSE_USER](state){
    state.userShow = false
  },
  [OPEN_ORDER](state){
    state.orderShow = true
  },
  [CLOSE_ORDER](state){
    state.orderShow =false
  }
}
export default {
  namespaced: true,
  mutations,
  state,
  actions
}
