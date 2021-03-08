const AppConst = {
    PIC: "pic",
    LEADER: "leader",
    CANDIDATE: "candidate"
};

AppConst.install = function(Vue) {
    Vue.prototype.$getConst = key => {
        return AppConst[key];
    };
};

export default AppConst;
