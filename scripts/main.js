Vue.config.devtools = true;
const router = new VueRouter({
  routes: [
    { path: "/", component: httpVueLoader("../html/toppage.vue") },
    { path: "/toppage", component: httpVueLoader("../html/toppage.vue") },
    { path: "/page2", component: httpVueLoader("../html/page2.vue") },
  ],
});

const app = new Vue({
  el: "#app",
  router,
});
