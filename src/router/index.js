import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    
    routes: [
        {
          path: "/user",
          name: "user",
          component: () => import("../components/User")
        },
        {
          path: "/",
          name: "search",
          component: () => import("../components/Search")
        }
      ],

})
  
export default router
