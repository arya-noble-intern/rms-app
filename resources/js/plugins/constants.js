const AppConst = {
    PIC: "pic",
    LEADER: "leader",
    CANDIDATE: "candidate",
    ERF_FILTER_OPTIONS: [
        "all-status",
        "waiting-pic-approval",
        "all-approved",
        "rejected"
    ]
};

AppConst.install = function(Vue) {
    Vue.prototype.$getConst = key => {
        return AppConst[key];
    };
};

export default AppConst;
