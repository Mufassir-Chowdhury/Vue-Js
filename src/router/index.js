import { createRouter, createWebHistory } from 'vue-router'
import DcHeros from '../pages/DcHeros';
import Calendar from '../pages/Calendar';
// import Home from '../pages/Home';
import Markdown from '../pages/Markdown';

const routes = [
  {
    path: '/dc-heros',
    name: 'DcHeros',
    component: DcHeros
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: './markdown',
    name: 'Markdown',
    component: Markdown
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
