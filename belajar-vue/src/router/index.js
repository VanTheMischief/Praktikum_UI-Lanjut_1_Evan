<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
=======
import { createRouter, createWebHistory } from 'vue-router'
>>>>>>> fe8196a (first commit)
import AppLayout from '@/layouts/App.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
<<<<<<< HEAD
        component: () => import('@/views/Home.vue'),
        meta: {breadcrumb: 'Home'}
=======
        component: () => import('@/views/HomeView.vue'),
        meta: { breadcrumb: 'Home' }
>>>>>>> fe8196a (first commit)
      },
      {
        path: 'about',
        name: 'about',
<<<<<<< HEAD
        component: () => import('@/views/About.vue'),
        meta: {breadcrumb: 'About'}
=======
        component: () => import('@/views/AboutView.vue'),
        meta: { breadcrumb: 'About' }
>>>>>>> fe8196a (first commit)
      },
      {
        path: 'browse',
        name: 'browse',
        component: () => import('@/views/Browse.vue'),
        meta: { breadcrumb: 'Browse' },
        redirect: '/browse/events',
        children: [
          {
            path: 'events',
            name: 'events',
            component: () => import('@/views/EventList.vue'),
<<<<<<< HEAD
            meta: {breadcrumb: 'Event List'}
=======
            meta: { breadcrumb: 'Event List' }
>>>>>>> fe8196a (first commit)
          },
          {
            path: 'events/:id',
            name: 'event-detail',
            component: () => import('@/views/EventDetail.vue'),
<<<<<<< HEAD
            meta: {breadcrumb: 'Event Detail'}
=======
            meta: { breadcrumb: 'Event Detail' }
>>>>>>> fe8196a (first commit)
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/Category.vue'),
<<<<<<< HEAD
            meta: {breadcrumb: 'Category'}
=======
            meta: { breadcrumb: 'Category' }
>>>>>>> fe8196a (first commit)
          }
        ]
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
<<<<<<< HEAD
        meta: {breadcrumb: 'Contact'}
=======
        meta: { breadcrumb: 'Contact' }
>>>>>>> fe8196a (first commit)
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router