import axios from "axios";

const talent = {
    namespaced: true,
    state: {
        talents: {},
        talent: {}
    },

    getters: {
        TALENTS(state) {
            return state.talents;
        },
        TALENT(state) {
            return state.talent;
        }
    },

    mutations: {
        SET_TALENTS(state, payload) {
            state.talents = payload;
        },
        SET_TALENT(state, payload) {
            state.talent = payload;
        }
    },

    actions: {
        async GET_TALENTS(
            { commit },
            { page = 1, sort = "created_at", sortDir = "desc" }
        ) {
            const res = await axios.get(
                `/api/talents?page=${page}&sortBy=${sort}&sortDir=${sortDir}`
            );
            commit("SET_TALENTS", res.data);
        },
        async SAVE_TALENT({}, formData) {
            await axios.post(`/api/talents`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
        },
        async GET_TALENT({ commit }, id) {
            const res = await axios.get(`/api/talents/${id}`);
            commit("SET_TALENT", res.data);
        }
    }
};

export default talent;
