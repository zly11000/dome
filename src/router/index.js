import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/list"
    },
    {
      path: '/list',
      name: 'List',
      component: ()=>import("@/view/list/index.vue")
    }
  ]
})
