import axios from "axios";

const user = {
    namespaced: true,
    state: {
        me: {}
    },

    getters: {
        ME(state) {
            return state.me;
        }
    },

    mutations: {
        SET_ME(state, payload) {
            state.me = payload;
        }
    },

    actions: {
        async GET_ME({ commit }) {
            const res = await axios.get("/api/me");
            commit("SET_ME", res.data);
        }
    }
};

export default user;
