import axios from "axios";

const talent = {
    namespaced: true,
    state: {
        talents: {}
    },

    getters: {
        TALENTS(state) {
            return state.talents;
        }
    },

    mutations: {
        SET_TALENTS(state, payload) {
            state.talents = payload;
        }
    },

    actions: {
        async GET_TALENTS({ commit }) {
            const res = await axios.get("/api/talents");
            commit("SET_TALENTS", res.data);
        }
    }
};

export default talent;
