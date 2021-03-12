import store from "../store/index.js";

export default async (to, from, next) => {
    await store.dispatch("user/GET_ME");
    const me = store.getters["user/ME"].data;
    if (me.role.name == "pic") {
        next();
    } else {
        next({ name: "home" });
    }
};
