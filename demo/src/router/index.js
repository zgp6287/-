import Vue from 'vue'
import Router from 'vue-router'
import Tbhome from '@/components/tbhome'
import Home1 from '@/components/home1'
import Home2 from '@/components/home2'
import Home3 from '@/components/home3'
import Home4 from '@/components/home4'
import Home5 from '@/components/home5'
import Home6 from '@/components/home6'
import Home7 from '@/components/home7'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tbhome',
      component: Tbhome,
      children:[{
        path: '/',
        name: 'Home1',
        component: Home1,
      },{
        path: 'home2',
        name: 'Home2',
        component: Home2,
      },
      {
        path: 'home3',
        name: 'Home3',
        component: Home3,
      },{
        path: 'home4',
        name: 'Home4',
        component: Home4,
      }
      ,{
        path: 'home5',
        name: 'Home5',
        component: Home5,
      }
      ,{
        path: 'home6',
        name: 'Home6',
        component: Home6,
      }
      ,{
        path: 'home7',
        name: 'Home7',
        component: Home7,
      }]
    }
  ]
})
