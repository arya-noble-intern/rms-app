import axios from "axios";

const picUserManagement = {
    namespaced: true,
    state: {
        users: {}
    },

    getters: {
        USERS(state) {
            return state.users;
        }
    },

    mutations: {
        SET_USERS(state, payload) {
            state.users = payload;
        }
    },

    actions: {
        async GET_USERS({ commit }) {
            const res = await axios.get("/api/pic-user-managements");
            commit("SET_USERS", res.data);
        }
    }
};

export default picUserManagement;
