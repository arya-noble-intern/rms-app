import store from "../store/index.js";

export default async (to, from, next) => {
    await store.dispatch("user/GET_ME");
    if (store.getters["user/IS_LOGGED_IN"]) {
        next();
    } else {
        window.location.href = "/login";
    }
};
