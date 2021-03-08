import axios from "axios";

const candidateCard = {
    namespaced: true,
    state: {
        candidateCards: {}
    },

    getters: {
        CANDIDATE_CARDS(state) {
            return state.candidateCards;
        }
    },

    mutations: {
        SET_CANDIDATE_CARDS(state, payload) {
            state.candidateCards = payload;
        }
    },

    actions: {
        async GET_CANDIDATE_CARDS({ commit }) {
            const res = await axios.get("/api/candidate-cards");
            commit("SET_CANDIDATE_CARDS", res.data);
        }
    }
};

export default candidateCard;
