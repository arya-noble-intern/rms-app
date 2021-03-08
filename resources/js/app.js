require("./bootstrap");

import Vue from "vue";
import AppConst from "./plugins/constants";
import VueRouter from "vue-router";

import router from "./router/index";
import store from "./store/index";
import App from "./App.vue";

Vue.use(AppConst);
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    store,
    components: { App }
});
