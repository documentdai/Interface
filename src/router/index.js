import Vue from "vue";
import Router from "vue-router";

import TopicsContainer from "@/views/Topics/Container.vue"
import Topics from "@/views/Topics/Topics.vue"
import TopicsDetail from "@/views/Topics/TopicsDetail.vue"

Vue.use(Router);

export const routes = [
  {
    path: '',
    component: TopicsContainer,
    redirect: '/topics',
    children: [
      {
        path: '/topics',
        component: Topics
      }
    ]
  },
  {
    path: '/topics/:id',
    component: TopicsDetail
  }
]

export default new Router({
  mode: 'hash',
  routes
})
