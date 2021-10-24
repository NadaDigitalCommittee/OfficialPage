Vue.config.devtools = true;
const router = new VueRouter({
  routes: [{
      path: "/",
      component: httpVueLoader("../html/toppage.vue")
    },
    {
      path: "/toppage",
      component: httpVueLoader("../html/toppage.vue")
    },
    {
      path: "/about",
      component: httpVueLoader("../html/about.vue")
    },
    {
      path: "/recruit",
      component: httpVueLoader("../html/recruit.vue")
    },
  ],
});

const app = new Vue({
  el: "#app",
  router,
});