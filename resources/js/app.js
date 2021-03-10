require("./bootstrap");

import Vue from "vue";
import AppConst from "./plugins/constants";
import VueRouter from "vue-router";

import router from "./router/index";
import store from "./store/index";
import App from "./App.vue";
import VueToast from "vue-toast-notification";
import VueSkeletonLoader from "skeleton-loader-vue";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(AppConst);
Vue.use(VueRouter);
Vue.use(VueToast);
Vue.use(VueSkeletonLoader);
Vue.use(require("vue-moment"));
import * as mdb from "mdb-ui-kit"; // lib

const app = new Vue({
    el: "#app",
    router,
    store,
    mdb,
    components: { App }
});
