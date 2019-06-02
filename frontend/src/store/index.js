import Vue from 'vue';
import Vuex from 'vuex';
import User from './User';
import ticket from './Ticket/ticket'
import administrator from './Administrator/administrator'
import userInformation from './userInformation/userInformation'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    ticket,
    administrator,
    userInformation
  }
});


