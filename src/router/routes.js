
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/PageTodo.vue') },
      { path: '/settings', component: () => import('pages/PageSettings.vue') },


      { path: '/lesson1', component: () => import('pages/exer/lesson1.vue') },
      { path: '/exercise1', component: () => import('pages/exer/Exercise1.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
