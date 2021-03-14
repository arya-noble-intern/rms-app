import axios from "axios";

const picUserManagement = {
    namespaced: true,
    state: {},

    getters: {},

    mutations: {},

    actions: {
        async UPDATE_APPROVAL({}, { id, payload }) {
            await axios.patch(`/api/request-approvals/${id}`, payload);
        }
    }
};

export default picUserManagement;
