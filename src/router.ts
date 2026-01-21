import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/products',
        name: 'Home',
        component: () => import('../src/views/ProductList.vue'),
        meta: {
            title: 'Buhler'
        }
    },
    {
        path: '/products/:id',
        name: 'ProductDetails',
        component: () => import('../src/views/ProductDetails.vue'),
        meta: {
            title: 'Buhler'
        }
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../src/views/Checkout.vue'),
        meta: {
            title: 'Buhler'
        }
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('../src/views/NotFound.vue'),
        meta: {
            title: '404 - Page Not Found'
        }
    },
    {
        // Catch all route - redirect to 404
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    // Scroll to top on route change
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
});

export default router