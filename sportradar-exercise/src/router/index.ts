import { createRouter, createWebHistory } from 'vue-router'
import EventCalendar from '../views/EventCalendar.vue'
import AddEvent from '../views/AddEvent.vue'
import EventDetails from '../views/EventDetails.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventCalendar,
    },
    {
      path: '/add-event',
      name: 'add-event',
      component: AddEvent,
    },
    {
      path: '/event-details/:id',
      name: 'event-details',
      component: EventDetails,
    },
  ],
})



export default router
