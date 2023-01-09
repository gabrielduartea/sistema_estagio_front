import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c4905ba6 = () => interopDefault(import('../pages/companies/index.vue' /* webpackChunkName: "pages/companies/index" */))
const _741a60c4 = () => interopDefault(import('../pages/coordinators.vue' /* webpackChunkName: "pages/coordinators" */))
const _a38aff72 = () => interopDefault(import('../pages/courses.vue' /* webpackChunkName: "pages/courses" */))
const _6e88513a = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _41cadbf7 = () => interopDefault(import('../pages/internships/index.vue' /* webpackChunkName: "pages/internships/index" */))
const _7cdf1d38 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _8412cc40 = () => interopDefault(import('../pages/loginError.vue' /* webpackChunkName: "pages/loginError" */))
const _d7dd35ce = () => interopDefault(import('../pages/students.vue' /* webpackChunkName: "pages/students" */))
const _df05e85c = () => interopDefault(import('../pages/teachers.vue' /* webpackChunkName: "pages/teachers" */))
const _1a5be2d0 = () => interopDefault(import('../pages/companies/_id/index.vue' /* webpackChunkName: "pages/companies/_id/index" */))
const _4151b93c = () => interopDefault(import('../pages/internships/_id/index.vue' /* webpackChunkName: "pages/internships/_id/index" */))
const _99910bbe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _c4905ba6,
    name: "companies"
  }, {
    path: "/coordinators",
    component: _741a60c4,
    name: "coordinators"
  }, {
    path: "/courses",
    component: _a38aff72,
    name: "courses"
  }, {
    path: "/dashboard",
    component: _6e88513a,
    name: "dashboard"
  }, {
    path: "/internships",
    component: _41cadbf7,
    name: "internships"
  }, {
    path: "/login",
    component: _7cdf1d38,
    name: "login"
  }, {
    path: "/loginError",
    component: _8412cc40,
    name: "loginError"
  }, {
    path: "/students",
    component: _d7dd35ce,
    name: "students"
  }, {
    path: "/teachers",
    component: _df05e85c,
    name: "teachers"
  }, {
    path: "/companies/:id",
    component: _1a5be2d0,
    name: "companies-id"
  }, {
    path: "/internships/:id",
    component: _4151b93c,
    name: "internships-id"
  }, {
    path: "/",
    component: _99910bbe,
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
