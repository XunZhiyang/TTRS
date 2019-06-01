import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
import LocalStorage from '@/utils/LocalStorage';

import ViewContainer from '@/components/ViewContainer/ViewContainer';

import Home from '@/router/Home/Home';
import TravellersAre from '@/components/TravellersAre/TravellersAre'
import UpdateNotes from '@/components/UpdateNotes/UpdateNotes'
import Exclusive from '@/components/newTicket/Exclusive'
import BookingTicket from '@/components/newTicket/BookingTicket'
import RobTickets from '@/components/RobTickets/RobTickets'
import Administrator from '@/components/Administrator/Administrator'
import Permissions from '@/components/Administrator/Permissions/Permissions'
import Add from '@/components/Administrator/Operation/Add'
import Delete from '@/components/Administrator/Operation/Delete'
import Edit from '@/components/Administrator/Operation/Edit'
import Release from '@/components/Administrator/Operation/Release'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'ViewContainer',
      component: ViewContainer,
      children: [
        {path: '', name: 'Home', component: Home},
        {path: '/TravellersAre', name: 'TravellersAre', component: TravellersAre},
        {path: '/Notes', name: 'UpdateNotes', component: UpdateNotes},
        {path: '/Exclusive', name: 'Exclusive', component: Exclusive},
        {path: '/BookingTicket', name: 'BookingTicket', component: BookingTicket},
        {path: '/RobTickets', name: 'RobTickets', component: RobTickets}
      ]
    },
    {
      path: '/Administrator',
      name: 'Administrator',
      component: Administrator,
      children: [
        {path: '', name: 'Permissions', component: Permissions},
        {path: '/Add', name: 'Add', component: Add},
        {path: '/Delete', name: 'Delete', component: Delete},
        {path: '/Edit', name: 'Edit', component: Edit},
        {path: '/Release', name: 'Release', component: Release}
      ]
    }
  ]
})


/**
 * 全局路由钩子函数
 * 每次跳转前判定token是否存在，以及当前路由
 *
 * @date 218/7/6
 * @author Axiny
 */
router.beforeEach((to, from, next) =>
{

  const LocalStorageUser = LocalStorage.get('user');

  if (LocalStorageUser)
  {
    if (LocalStorageUser.loginUser)
    {
      store.state.User.loginUser = LocalStorageUser.loginUser;
    }

    // if (Object.keys(LocalStorageUser.userSet).length !== 0) {
    //   store.state.User.userSet = LocalStorageUser.userSet;
    // }
  }

  next();
});

export default router;
