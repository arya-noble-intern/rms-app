import axios from "axios";

const employeeRequestForm = {
    namespaced: true,
    state: {
        erfs: {},
        erf: {}
    },

    getters: {
        ERFS(state) {
            return state.erfs;
        },
        ERF(state) {
            return state.erf;
        }
    },

    mutations: {
        SET_ERFS(state, payload) {
            state.erfs = payload;
        },
        SET_ERF(state, payload) {
            state.erf = payload;
        }
    },

    actions: {
        async GET_ERFS({ commit }, { page = 1, filter = "", search = "" }) {
            const res = await axios.get(
                `/api/employee-request-forms?page=${page}&filter=${filter}&search=${search}`
            );
            commit("SET_ERFS", res.data);
        },
        async GET_ERF({ commit }, id) {
            const res = await axios.get(`/api/employee-request-forms/${id}`);
            commit("SET_ERF", res.data);
        }
    }
};

export default employeeRequestForm;
