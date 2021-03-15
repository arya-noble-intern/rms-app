import axios from "axios";

const user = {
    namespaced: true,
    state: {
        me: {},
        isLoggedIn: false
    },

    getters: {
        ME(state) {
            return state.me;
        },
        ROLE_NAME(state) {
            return state.me.data.role.name;
        },
        IS_LOGGED_IN(state) {
            return state.isLoggedIn;
        }
    },

    mutations: {
        SET_ME(state, payload) {
            state.me = payload;
        },
        SET_IS_LOGGED_IN(state, payload) {
            state.isLoggedIn = payload;
        }
    },

    actions: {
        async GET_ME({ commit, state }) {
            if (!Object.keys(state.me).length || !state.isLoggedIn) {
                const res = await axios.get("/api/me");
                commit("SET_ME", res.data);
                commit("SET_IS_LOGGED_IN", true);
            }
        }
    }
};

export default user;
