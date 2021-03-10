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
        async GET_TALENTS({ commit }, page = 1) {
            const res = await axios.get(`/api/talents?page=${page}`);
            commit("SET_TALENTS", res.data);
        }
    }
};

export default talent;
