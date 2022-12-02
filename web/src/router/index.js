import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Main,
  children: [{
      path: '/',
      name: 'Home',
      component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
      meta: {
        title: '首页 - zzzlight'
      }
    },
    {
      path: '/archives',
      name: 'Archive',
      component: () => import( /* webpackChunkName: "archive" */ '../views/Archive.vue'),
      meta: {
        title: '归档 - zzzlight'
      }
    },
    {
      path: '/tags',
      name: 'Tag',
      component: () => import( /* webpackChunkName: "tag" */ '../views/Tag.vue'),
      meta: {
        title: '标签 - zzzlight'
      }
    },
    {
      path: '/links',
      name: 'Link',
      component: () => import( /* webpackChunkName: "link" */ '../views/Link.vue'),
      meta: {
        title: '友链 - zzzlight'
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import( /* webpackChunkName: "message" */ '../views/Message.vue'),
      meta: {
        title: '留言 - zzzlight'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
      meta: {
        title: '关于 - zzzlight'
      }
    },
    {
      path: '/article/list/:id',
      name: 'Article',
      component: () => import( /* webpackChunkName: "article" */ '../views/Article.vue'),
      props: true,
      meta: {
        title: '文章详情 - zzzlight'
      }
    }
  ]
}, {
  path: '*',
  name:"common",
  redirect: '/'
}]

const router = new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
   //base: process.env.BASE_URL,
  routes,
  mode:"hash"
  
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
