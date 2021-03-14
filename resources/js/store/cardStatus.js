import axios from "axios";

const cardStatus = {
    namespaced: true,
    state: {
        card_statuses: []
    },

    getters: {
        CARD_STATUSES(state) {
            return state.card_statuses;
        }
    },

    mutations: {
        CARD_SET_STATUSES(state, payload) {
            state.card_statuses = payload;
        }
    },

    actions: {
        async GET_CARD_STATUSES({ commit }) {
            const res = await axios.get("/api/statuses");
            commit("CARD_SET_STATUSES", res.data);
        }
    }
};

export default cardStatus;
