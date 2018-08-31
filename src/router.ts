import Vue from 'vue'
import Router from 'vue-router'
import Step1 from './views/step1/Step1.vue'
import Step2 from './views/step2/Step2.vue'
import Step3 from './views/step3/Step3.vue'
import Step4 from './views/step4/Step4.vue'

Vue.use(Router);


export default new Router({
  base: './',
  routes: [
    {
      path: '/',
      redirect: '/step1'
    },
    {
      path: '/step1',
      name: 'step1',
      component: Step1
    },
    {
      path: '/step2',
      name: 'step2',
      component: Step2
    },
    {
      path: '/step3',
      name: 'step3',
      component: Step3
    },
    {
      path: '/step4',
      name: 'step4',
      component: Step4
    }
  ]
})
