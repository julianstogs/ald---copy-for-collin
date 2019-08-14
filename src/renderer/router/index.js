import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: require('@/components/Dashboard').default
    },
    {
      path: '/manual-control',
      name: 'manual-control',
      component: require('@/components/ManualControl').default
    },
    {
      path: '/Parameters-template',
      name: 'Parameters-template',
      component: require('@/components/Parameters-template').default
    },
	{
      path: '/parameters1',
      name: 'parameters1',
      component: require('@/components/Parameters1').default
    },
  {
      path: '/parameters2',
      name: 'parameters2',
      component: require('@/components/Parameters2').default
    },
  {
      path: '/parameters3',
      name: 'parameters3',
      component: require('@/components/Parameters3').default
    },
  {
      path: '/parameters4',
      name: 'parameters4',
      component: require('@/components/Parameters4').default
    },
  {
      path: '/parameters5',
      name: 'parameters5',
      component: require('@/components/Parameters5').default
    },
  {
      path: '/parameters6',
      name: 'parameters6',
      component: require('@/components/Parameters6').default
    },
	{
      path: '/automation',
      name: 'automation',
      component: require('@/components/Automation').default
    },
    {
      path: '/saved-growths',
      name: 'saved-growths',
      component: require('@/components/SavedGrowths').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
