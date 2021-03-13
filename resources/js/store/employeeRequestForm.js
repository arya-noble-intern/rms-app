import axios from "axios";

const employeeRequestForm = {
    namespaced: true,
    state: {
        erfs: {}
    },

    getters: {
        ERFS(state) {
            return state.erfs;
        }
    },

    mutations: {
        SET_ERFS(state, payload) {
            state.erfs = payload;
        }
    },

    actions: {
        async GET_ERFS({ commit }, { page = 1, filter = "", search = "" }) {
            const res = await axios.get(
                `/api/employee-request-forms?page=${page}&filter=${filter}&search=${search}`
            );
            commit("SET_ERFS", res.data);
        }
    }
};

export default employeeRequestForm;
