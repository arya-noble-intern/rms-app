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
        },
        SET_ERF_APPROVAL(state, payload) {
            state.erf.data.approval.notes_by_pic = payload.notes_by_pic;
            state.erf.data.approval.approval_by_pic = parseInt(
                payload.approval_by_pic
            );
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
        },
        async UPDATE_ERF_APPROVAL({ commit }, payload) {
            commit("SET_ERF_APPROVAL", payload);
        },
        async CREATE_ERF({ commit }, payload) {
            const res = await axios.post(
                `/api/employee-request-forms`,
                payload
            );
            commit("SET_ERF", res.data);
        }
    }
};

export default employeeRequestForm;
