
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
    mode:'history',
    linkActiveClass: "active",
    routes: [

        {
            path: "/test",
            component: { template: '<div><h1>TEST</h1></div>' }
        },
        {
            path: "/dev",
            component: { template: '<div><h1>404</h1></div>' }
        }
    ]
});

export default router;