Vue.config.devtools = true;
// メインページ
const router = new VueRouter({
    routes: [{
            path: "/",
            component: httpVueLoader("../html/about.vue")
        },
        {
            path: "/about",
            component: httpVueLoader("../html/about.vue")
        },
        {
            path: "/divisions",
            component: httpVueLoader("../html/divisions.vue")
        },
        {
            path: "/news",
            component: httpVueLoader("../html/news.vue")
        },
        {
            path: "/recruit",
            component: httpVueLoader("../html/recruit.vue")
        },
        {
            path: "/contact",
            component: httpVueLoader("../html/contact.vue")
        },
    ],
});

const app = new Vue({
    el: "#app",
    router,
    data: {
        open: false
    },
});