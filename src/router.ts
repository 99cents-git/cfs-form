import Vue from 'vue'
import Router from 'vue-router'
import Step1 from './views/step1/Step1.vue'

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/step1',
      name: 'step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'step2',
      component: () => import(/* webpackChunkName: "step2" */ './views/step2/Step2.vue')
    },
    {
      path: '/step3',
      name: 'step3',
      component: () => import(/* webpackChunkName: "step3" */ './views/step3/Step3.vue')
    },
    {
      path: '/step4',
      name: 'step4',
      component: () => import(/* webpackChunkName: "step4" */ './views/step4/Step4.vue')
    }
  ]
})
