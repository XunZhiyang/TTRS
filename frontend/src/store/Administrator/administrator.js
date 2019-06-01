import {
  OPEN_DATABASE,
  CLOSE_DATABASE,
  SET_SHOW_PERMISSIONS
}from './type'
const state = {
    deleteDatabase:false,
    showPermissions:{},
}
const actions ={
  openDeleteDatabase:({commit})=>{
    commit(OPEN_DATABASE)
  },
  closeDeleteDatabase:({commit})=>{
    commit(CLOSE_DATABASE)
  },
  setShowPermissions:({commit},value)=>{
    commit(SET_SHOW_PERMISSIONS,value)
  }
}
const mutations = {
  [OPEN_DATABASE](state){
    state.deleteDatabase = true
  },
  [CLOSE_DATABASE](state){
    state.deleteDatabase = false
  },
  [SET_SHOW_PERMISSIONS](state,value){
    state.showPermissions = value
  }
}

export default {
  namespaced: true,
  mutations,
  state,
  actions
}
