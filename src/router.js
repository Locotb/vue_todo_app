import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        }
    ]
});

export default router;