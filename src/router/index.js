import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import newfile from '@/components/newfile'
import newfile2 from '@/components/newfile/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/newfile',
      name: 'newfile',
      component: newfile
    },{
      path: '/newfile2',
      name: 'newfile2',
      component: newfile2
    }
  ]
})
