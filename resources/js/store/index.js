import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import candidateCard from "./candidateCard";
import employeeRequestForm from "./employeeRequestForm";
import picUserManagement from "./picUserManagement";
import talent from "./talent";
import requestApproval from "./requestApproval";
import cardStatus from "./cardStatus";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},

    getters: {},

    mutations: {},

    actions: {},
    modules: {
        user,
        candidateCard,
        employeeRequestForm,
        picUserManagement,
        talent,
        requestApproval,
        cardStatus
    }
});

export default store;
