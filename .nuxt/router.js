import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _872b0ed6 = () => interopDefault(import('../pages/companies/index.vue' /* webpackChunkName: "pages/companies/index" */))
const _7d70d948 = () => interopDefault(import('../pages/coordinators.vue' /* webpackChunkName: "pages/coordinators" */))
const _c2e3e2a2 = () => interopDefault(import('../pages/courses.vue' /* webpackChunkName: "pages/courses" */))
const _1b35286a = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _7e6d885f = () => interopDefault(import('../pages/internships/index.vue' /* webpackChunkName: "pages/internships/index" */))
const _2bd9b4c0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6d00db10 = () => interopDefault(import('../pages/loginError.vue' /* webpackChunkName: "pages/loginError" */))
const _a3a0b89e = () => interopDefault(import('../pages/students.vue' /* webpackChunkName: "pages/students" */))
const _aac96b2c = () => interopDefault(import('../pages/teachers.vue' /* webpackChunkName: "pages/teachers" */))
const _dd097e00 = () => interopDefault(import('../pages/companies/_id/index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _787d5bca = () => interopDefault(import('../pages/internships/_id/index.vue' /* webpackChunkName: "pages/internships/_id/index" */))
const _206b8289 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/companies",
    component: _872b0ed6,
    name: "companies"
  }, {
    path: "/coordinators",
    component: _7d70d948,
    name: "coordinators"
  }, {
    path: "/courses",
    component: _c2e3e2a2,
    name: "courses"
  }, {
    path: "/dashboard",
    component: _1b35286a,
    name: "dashboard"
  }, {
    path: "/internships",
    component: _7e6d885f,
    name: "internships"
  }, {
    path: "/login",
    component: _2bd9b4c0,
    name: "login"
  }, {
    path: "/loginError",
    component: _6d00db10,
    name: "loginError"
  }, {
    path: "/students",
    component: _a3a0b89e,
    name: "students"
  }, {
    path: "/teachers",
    component: _aac96b2c,
    name: "teachers"
  }, {
    path: "/companies/:id",
    component: _dd097e00,
    name: "companies-id"
  }, {
    path: "/internships/:id",
    component: _787d5bca,
    name: "internships-id"
  }, {
    path: "/",
    component: _206b8289,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
