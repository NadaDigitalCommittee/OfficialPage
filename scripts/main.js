Vue.config.devtools = true;
const router = new VueRouter({
  routes: [{
      path: "/",
      component: httpVueLoader("../html/toppage.vue")
    },
    {
      path: "/about",
      component: httpVueLoader("../html/about.vue")
    },
    {
      path: "/activity",
      component: httpVueLoader("../html/activity.vue")
    },
    {
      path: "/order",
      component: httpVueLoader("../html/order.vue")
    }, {
      path: "/divisions",
      component: httpVueLoader("../html/divisions.vue")
    }, {
      path: "/news",
      component: httpVueLoader("../html/news.vue")
    }, {
      path: "/order",
      component: httpVueLoader("../html/order.vue")
    }, {
      path: "/recruit",
      component: httpVueLoader("../html/recruit.vue")
    }, {
      path: "/contact",
      component: httpVueLoader("../html/contact.vue")
    },
  ],
});

const app = new Vue({
  el: "#app",
  router,
});