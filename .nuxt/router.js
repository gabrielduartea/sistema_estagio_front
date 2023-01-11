import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _59affdb1 = () => interopDefault(import('../pages/companies/index.vue' /* webpackChunkName: "pages/companies/index" */))
const _acacf880 = () => interopDefault(import('../pages/coordinators.vue' /* webpackChunkName: "pages/coordinators" */))
const _70486fcb = () => interopDefault(import('../pages/courses.vue' /* webpackChunkName: "pages/courses" */))
const _3f0bf5e7 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _3f33930a = () => interopDefault(import('../pages/internships/index.vue' /* webpackChunkName: "pages/internships/index" */))
const _51eb1dbc = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _11aa4bdc = () => interopDefault(import('../pages/loginError.vue' /* webpackChunkName: "pages/loginError" */))
const _13c16615 = () => interopDefault(import('../pages/students.vue' /* webpackChunkName: "pages/students" */))
const _102d0cce = () => interopDefault(import('../pages/teachers.vue' /* webpackChunkName: "pages/teachers" */))
const _5800d81c = () => interopDefault(import('../pages/companies/_id/index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _980cc834 = () => interopDefault(import('../pages/internships/_id/index.vue' /* webpackChunkName: "pages/internships/_id/index" */))
const _ef790ab6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _59affdb1,
    name: "companies"
  }, {
    path: "/coordinators",
    component: _acacf880,
    name: "coordinators"
  }, {
    path: "/courses",
    component: _70486fcb,
    name: "courses"
  }, {
    path: "/dashboard",
    component: _3f0bf5e7,
    name: "dashboard"
  }, {
    path: "/internships",
    component: _3f33930a,
    name: "internships"
  }, {
    path: "/login",
    component: _51eb1dbc,
    name: "login"
  }, {
    path: "/loginError",
    component: _11aa4bdc,
    name: "loginError"
  }, {
    path: "/students",
    component: _13c16615,
    name: "students"
  }, {
    path: "/teachers",
    component: _102d0cce,
    name: "teachers"
  }, {
    path: "/companies/:id",
    component: _5800d81c,
    name: "companies-id"
  }, {
    path: "/internships/:id",
    component: _980cc834,
    name: "internships-id"
  }, {
    path: "/",
    component: _ef790ab6,
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
