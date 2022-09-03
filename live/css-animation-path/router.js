import Vue from 'vue';
import Router from 'vue-router';
import Index from './index.vue';
Vue.use(Router);
const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Index,
        },
        {
            path: '/move',
            name: 'move',
            component: () => import(/* webpackChunkName: "move" */ './view/move'),
        },
        {
            path: '/curvemove',
            name: 'curvemove',
            component: () => import(/* webpackChunkName: "curvemove" */ './view/curvemove'),
        },
        {
            path: '/scale',
            name: 'scale',
            component: () => import(/* webpackChunkName: "scale" */ './view/scale'),
        },
        {
            path: '/rotate',
            name: 'rotate',
            component: () => import(/* webpackChunkName: "rotate" */ './view/rotate'),
        },
        {
            path: '/skew',
            name: 'skew',
            component: () => import(/* webpackChunkName: "skew" */ './view/skew'),
        },
        {
            path: '/other',
            name: 'other',
            component: () => import(/* webpackChunkName: "other" */ './view/other'),
        },
    ],
});

export default router;
