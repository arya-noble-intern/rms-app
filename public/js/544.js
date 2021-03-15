(self.webpackChunk=self.webpackChunk||[]).push([[544],{4062:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const r={name:"PageHeading",props:{title:{type:String,default:""}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"h3 text-uppercase mb-4"},[t._v(t._s(t.title))])])}),[],!1,null,null,null).exports},5544:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>j});var r=s(7757),a=s.n(r),n=s(629);function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const c={name:"PicCards",computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,n.Se)({ERFS:"employeeRequestForm/ERFS",TALENTS:"talent/TALENTS",CANDIDATE_CARDS:"candidateCard/CANDIDATE_CARDS",ME:"user/ME"}))};var o=s(1900);const d=(0,o.Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-3 col-sm-6 col-12 mb-4"},[s("div",{staticClass:"card shadow-4"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"d-flex justify-content-between px-md-1"},[t._m(0),t._v(" "),s("div",{staticClass:"text-end"},[t.ERFS.meta?s("h3",[t._v("\n                                "+t._s(t.ERFS.meta.total)+"\n                            ")]):t._e(),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("\n                                Employee Requests\n                            ")])])])])])]),t._v(" "),s("div",{staticClass:"col-xl-3 col-sm-6 col-12 mb-4"},[s("div",{staticClass:"card shadow-4"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"d-flex justify-content-between px-md-1"},[t._m(1),t._v(" "),s("div",{staticClass:"text-end"},[t.TALENTS.meta?s("h3",[t._v("\n                                "+t._s(t.TALENTS.meta.total)+"\n                            ")]):s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Saved Talents")])])])])])]),t._v(" "),s("div",{staticClass:"col-xl-3 col-sm-6 col-12 mb-4"},[s("div",{staticClass:"card shadow-4"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"d-flex justify-content-between px-md-1"},[t._m(2),t._v(" "),s("div",{staticClass:"text-end"},[t.CANDIDATE_CARDS.meta?s("h3",[t._v("\n                                "+t._s(t.CANDIDATE_CARDS.meta.total)+"\n                            ")]):s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Candidate Cards")])])])])])]),t._v(" "),s("div",{staticClass:"col-xl-3 col-sm-6 col-12 mb-4"},[s("div",{staticClass:"card shadow-4"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"d-flex justify-content-between px-md-1"},[t._m(3),t._v(" "),s("div",{staticClass:"text-end"},[t.ME.data.role?s("h3",{staticClass:"text-uppercase"},[t._v("\n                                "+t._s(t.ME.data.role.name)+"\n                            ")]):s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Your Group")])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"align-self-center"},[e("i",{staticClass:"ri-file-paper-line text-primary ri-3x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"align-self-center"},[e("i",{staticClass:"ri-user-star-line text-warning ri-3x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"align-self-center"},[e("i",{staticClass:"ri-bookmark-3-line text-success ri-3x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"align-self-center"},[e("i",{staticClass:"ri-group-line text-primary fa-3x"})])}],!1,null,null,null).exports;const u={name:"CardTableSkeleton"};const v=(0,o.Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:" d-flex flex-column"},[s("div",{staticClass:"mb-2"},[s("skeleton-loader-vue",{attrs:{type:"rect",rounded:!0,width:100,height:15}})],1),t._v(" "),s("div",{staticClass:"mb-1"},[s("skeleton-loader-vue",{attrs:{type:"rect",rounded:!0,width:250,height:10}})],1),t._v(" "),s("div",{staticClass:"mb-2"},[s("skeleton-loader-vue",{attrs:{type:"rect",rounded:!0,width:300,height:10}})],1)])}),[],!1,null,null,null).exports;function m(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const f={name:"OverviewErfs",components:{CardTableSkeleton:v},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?m(Object(s),!0).forEach((function(e){p(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,n.Se)({ERFS:"employeeRequestForm/ERFS"}))};const b=(0,o.Z)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"overview-erf"}},[t._m(0),t._v(" "),s("div",{staticClass:"my-3 p-3 bg-white rounded shadow-1-strong"},[s("h6",{staticClass:"border-bottom pb-2 mb-0"},[t._v("\n            Recent updates\n        ")]),t._v(" "),t.ERFS.data?t._l(t.ERFS.data.slice(0,3),(function(e){return s("div",{key:e.id,staticClass:"d-flex text-muted pt-3"},[s("i",{staticClass:"ri-arrow-right-s-fill ri-2x bd-placeholder-img flex-shrink-0 me-2"}),t._v(" "),s("p",{staticClass:"pb-3 mb-0 small lh-sm border-bottom w-100"},[s("strong",{staticClass:"d-block text-gray-dark"},[t._v(t._s(e.leader.name))]),t._v("\n                    "+t._s(e.title)+" "),s("br"),t._v(" "),s("small",[t._v(t._s(e.dates.created_at_diff))])])])})):t._l(3,(function(t){return s("div",{key:t,staticClass:"mt-4"},[s("card-table-skeleton")],1)})),t._v(" "),t._m(1)],2)])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex align-items-center p-3 my-3 text-white bg-purple rounded-2 shadow-2-strong"},[s("i",{staticClass:"ri-folder-received-fill ri-2x me-3"}),t._v(" "),s("div",{staticClass:"lh-1"},[s("h1",{staticClass:"h6 mb-0 text-white lh-1"},[t._v("\n                OVERVIEW\n            ")]),t._v(" "),s("small",[t._v("Employee Request Forms")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("small",{staticClass:"d-block text-end mt-3"},[s("a",{attrs:{href:"#"}},[t._v("View all")])])}],!1,null,null,null).exports;function _(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function h(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const C={name:"OverviewTalents",components:{CardTableSkeleton:v},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?_(Object(s),!0).forEach((function(e){h(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):_(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,n.Se)({TALENTS:"talent/TALENTS"}))};function y(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function E(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?y(Object(s),!0).forEach((function(e){O(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):y(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function O(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function g(t,e,s,r,a,n,i){try{var l=t[n](i),c=l.value}catch(t){return void s(t)}l.done?e(c):Promise.resolve(c).then(r,a)}function w(t){return function(){var e=this,s=arguments;return new Promise((function(r,a){var n=t.apply(e,s);function i(t){g(n,r,a,i,l,"next",t)}function l(t){g(n,r,a,i,l,"throw",t)}i(void 0)}))}}const x={name:"home",components:{PicCards:d,OverviewErfs:b,OverviewTalents:(0,o.Z)(C,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"overview-erf"}},[t._m(0),t._v(" "),s("div",{staticClass:"my-3 p-3 bg-white rounded shadow-1-strong"},[s("h6",{staticClass:"border-bottom pb-2 mb-0"},[t._v("\n            Recent updates\n        ")]),t._v(" "),t.TALENTS.data?t._l(t.TALENTS.data.slice(0,3),(function(e){return s("div",{key:e.id,staticClass:"d-flex text-muted pt-3"},[s("i",{staticClass:"ri-arrow-right-s-fill ri-2x bd-placeholder-img flex-shrink-0 me-2"}),t._v(" "),s("p",{staticClass:"pb-3 mb-0 small lh-sm border-bottom w-100"},[s("strong",{staticClass:"d-block text-gray-dark"},[t._v(t._s(e.pic.name))]),t._v("\n                    "+t._s(e.name)+" - "+t._s(e.applied_position)),s("br"),t._v(" "),s("small",[t._v(t._s(e.dates.created_at_diff))])])])})):t._l(3,(function(t){return s("div",{key:t,staticClass:"mt-4"},[s("card-table-skeleton")],1)})),t._v(" "),s("small",{staticClass:"d-block d-flex align-items-center justify-content-end mt-3"},[s("router-link",{attrs:{to:{name:"talents"}}},[t._v("Go to Talent Pool\n            ")]),t._v(" "),s("i",{staticClass:"ri-arrow-right-s-line ms-2"})],1)],2)])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex align-items-center p-3 my-3 text-white bg-secondary rounded-2 shadow-2-strong"},[s("i",{staticClass:"ri-user-received-line ri-2x me-3"}),t._v(" "),s("div",{staticClass:"lh-1"},[s("h1",{staticClass:"h6 mb-0 text-white lh-1"},[t._v("\n                OVERVIEW\n            ")]),t._v(" "),s("small",[t._v("Talents")])])])}],!1,null,null,null).exports,PageHeading:s(4062).Z},mounted:function(){var t=this;return w(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object.keys(t.ME.data).length){e.next=3;break}return e.next=3,t.GET_ME();case 3:return e.next=5,t.initData();case 5:case"end":return e.stop()}}),e)})))()},computed:E(E({},(0,n.Se)({ME:"user/ME",ERFS:"employeeRequestForm/ERFS"})),{},{roleName:function(){return Object.keys(this.ME.data).length?this.ME.data.role.name:""}}),methods:E(E({},(0,n.nv)({GET_ERFS:"employeeRequestForm/GET_ERFS",GET_CANDIDATE_CARDS:"candidateCard/GET_CANDIDATE_CARDS",GET_TALENTS:"talent/GET_TALENTS",GET_ME:"user/GET_ME"})),{},{initData:function(){var t=this;return w(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.GET_ERFS({});case 2:return e.next=4,t.GET_CANDIDATE_CARDS({});case 4:if(t.roleName!=t.$getConst("PIC")){e.next=7;break}return e.next=7,t.GET_TALENTS({});case 7:case"end":return e.stop()}}),e)})))()}})};const j=(0,o.Z)(x,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-5"},[s("page-heading",{attrs:{title:"home"}}),t._v(" "),t.ME.data?s("div",[t.roleName==t.$getConst("PIC")?s("div",[s("pic-cards"),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6"},[s("overview-erfs")],1),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("overview-talents")],1)])],1):t._e()]):t._e()],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=544.js.map