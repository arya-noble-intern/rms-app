import axios from "axios";

const candidateCard = {
    namespaced: true,
    state: {
        candidateCards: {},
        candidateCard: {}
    },

    getters: {
        CANDIDATE_CARDS(state) {
            return state.candidateCards;
        },
        CANDIDATE_CARD(state) {
            return state.candidateCard;
        }
    },

    mutations: {
        SET_CANDIDATE_CARDS(state, payload) {
            state.candidateCards = payload;
        },
        SET_CANDIDATE_CARD(state, payload) {
            state.candidateCard = payload;
        }
    },

    actions: {
        async GET_CANDIDATE_CARDS(
            { commit },
            { page = 1, sortBy = "", sortDir = "", statusOrder = "" }
        ) {
            const res = await axios.get(
                `/api/candidate-cards?page=${page}&sortBy=${sortBy}&sortDir=${sortDir}&statusOrder=${statusOrder}`
            );
            commit("SET_CANDIDATE_CARDS", res.data);
        },
        async CREATE_CANDIDATE_CARD({ commit }, payload) {
            const res = await axios.post("/api/candidate-cards", payload);
            commit("SET_CANDIDATE_CARD", res.data);
        },
        async GET_CANDIDATE_CARD({ commit }, id) {
            const res = await axios.get(`/api/candidate-cards/${id}`);
            commit("SET_CANDIDATE_CARD", res.data);
        },
        async UPDATE_CANDIDATE_CARD({ commit }, { id, payload }) {
            const res = await axios.patch(
                `/api/candidate-cards/${id}`,
                payload
            );
        }
    }
};

export default candidateCard;
