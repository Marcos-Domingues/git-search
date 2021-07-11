import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    
    routes: [
        {
          path: "/user",
          name: "user",
          component: () => import("../views/User")
        },
        {
          path: "/",
          name: "search",
          component: () => import("../views/Search")
        },
        {
          path: "/recent",
          name: "recent",
          component: () => import("../views/RecentSearches")
        },
      ],

})
  
export default router
