(self.webpackChunk=self.webpackChunk||[]).push([[246],{2533:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var a=n(4015),i=n.n(a),s=n(3645),r=n.n(s)()(i());r.push([t.id,'.v-spinner .v-dot1{-webkit-animation:v-dotRotate 2s linear 0s infinite;animation:v-dotRotate 2s linear 0s infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.v-spinner .v-dot2{-webkit-animation:v-dotBounce 2s linear 0s infinite;animation:v-dotBounce 2s linear 0s infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;position:"absolute";top:0;bottom:auto}.v-spinner .v-dot3{-webkit-animation:v-dotBounce 2s linear -1s infinite;animation:v-dotBounce 2s linear -1s infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;position:"absolute";top:auto;bottom:0}@-webkit-keyframes v-dotRotate{to{transform:rotate(1turn)}}@keyframes v-dotRotate{to{transform:rotate(1turn)}}@-webkit-keyframes v-dotBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes v-dotBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}',"",{version:3,sources:["webpack://./node_modules/vue-spinner/src/DotLoader.vue"],names:[],mappings:"AAgEA,mBAGA,mDAAA,CACA,2CAAA,CACA,oCAAA,CACA,4BACA,CAEA,mBAGA,mDAAA,CACA,2CAAA,CACA,oCAAA,CACA,4BAAA,CACA,mBAAA,CACA,KAAA,CACA,WACA,CAEA,mBAEA,oDAAA,CACA,4CAAA,CACA,oCAAA,CACA,4BAAA,CACA,mBAAA,CACA,QAAA,CACA,QACA,CAEA,+BAEA,GAGA,uBACA,CACA,CAEA,uBAEA,GAGA,uBACA,CACA,CAEA,+BAEA,MAIA,kBACA,CACA,IAGA,kBACA,CACA,CAEA,uBAEA,MAIA,kBACA,CACA,IAGA,kBACA,CACA",sourcesContent:["<template>\n<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-dot v-dot1\" v-bind:style=\"spinnerBasicStyle\">\n    <div class=\"v-dot v-dot2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-dot v-dot3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>\n</template>\n\n<script>\nexport default {\n  \n  name: 'DotLoader',\n\n  props: {\n    loading: {\n      type: Boolean,\n      default: true\n    },\n    color: { \n      type: String,\n      default: '#5dc596'\n    },\n    size: {\n      type: String,\n      default: '60px'\n    },\n    margin: {\n      type: String,\n      default: '2px'\n    },\n    radius: {\n      type: String,\n      default: '100%'\n    }\n  },\n  computed: {\n    spinnerStyle () {\n      return {\n        backgroundColor: this.color,\n        height: parseFloat(this.size)/2 + 'px',\n        width: parseFloat(this.size)/2 + 'px',\n        borderRadius: this.radius\n      }\n    },\n    spinnerBasicStyle () {\n      return {\n        height: this.size,\n        width: this.size,\n        position: 'relative'\n      }\n    }\n  }\n\n}\n<\/script>\n\n<style>\n\n.v-spinner .v-dot\n{\n          \n}\n\n.v-spinner .v-dot1\n{\n\n    -webkit-animation: v-dotRotate 2s 0s infinite linear;\n            animation: v-dotRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.v-spinner .v-dot2\n{\n\n    -webkit-animation: v-dotBounce 2s 0s infinite linear;\n            animation: v-dotBounce 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: 'absolute';\n    top: 0;\n    bottom: auto;\n}\n\n.v-spinner .v-dot3\n{\n    -webkit-animation: v-dotBounce 2s -1s infinite linear;\n            animation: v-dotBounce 2s -1s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: 'absolute';\n    top: auto;\n    bottom: 0;            \n}\n\n@-webkit-keyframes v-dotRotate\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-dotRotate\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes v-dotBounce\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n}\n\n@keyframes v-dotBounce\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n}\n</style>"],sourceRoot:""}]);const o=r},2284:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});const a={name:"DotLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},computed:{spinnerStyle(){return{backgroundColor:this.color,height:parseFloat(this.size)/2+"px",width:parseFloat(this.size)/2+"px",borderRadius:this.radius}},spinnerBasicStyle(){return{height:this.size,width:this.size,position:"relative"}}}};var i=n(3379),s=n.n(i),r=n(2533),o={insert:"head",singleton:!1};s()(r.Z,o);r.Z.locals;var l=n(1900);const d={name:"Loading",components:{DotLoader:(0,l.Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-dot v-dot1",style:t.spinnerBasicStyle},[n("div",{staticClass:"v-dot v-dot2",style:t.spinnerStyle}),n("div",{staticClass:"v-dot v-dot3",style:t.spinnerStyle})])])}),[],!1,null,null,null).exports}};const c=(0,l.Z)(d,(function(){var t=this.$createElement;return(this._self._c||t)("dot-loader",{attrs:{color:"#f77f00"}})}),[],!1,null,null,null).exports},4062:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const a={name:"PageHeading",props:{title:{type:String,default:""}}};const i=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"h3 text-uppercase mb-4"},[t._v(t._s(t.title))])])}),[],!1,null,null,null).exports},6246:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>A});var a=n(7757),i=n.n(a),s=n(629),r=n(2284),o=n(4062);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e,n,a,i,s,r){try{var o=t[s](r),l=o.value}catch(t){return void n(t)}o.done?e(l):Promise.resolve(l).then(a,i)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var s=t.apply(e,n);function r(t){u(s,a,i,r,o,"next",t)}function o(t){u(s,a,i,r,o,"throw",t)}r(void 0)}))}}const p={name:"EmployeeRequestFormShow",components:{Loading:r.Z,PageHeading:o.Z},data:function(){return{id:this.$route.params.id,loading:!1}},created:function(){var t=this;return v(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getErf();case 2:case"end":return e.stop()}}),e)})))()},computed:d(d({},(0,s.Se)({ERF:"employeeRequestForm/ERF",CANDIDATE_CARD:"candidateCard/CANDIDATE_CARD"})),{},{candidateCardCount:function(){var t;return Object.keys(this.ERF).length>0&&null!==(t=this.ERF.data.candidate_cards_count)&&void 0!==t?t:0},item:function(){return Object.keys(this.ERF).length?this.ERF.data:null},allApproved:function(){return!!this.item&&(1==this.item.approval.approval_by_pic&&1==this.item.approval.approval_by_lhc)}}),methods:d(d({},(0,s.nv)({GET_ERF:"employeeRequestForm/GET_ERF",CREATE_CANDIDATE_CARD:"candidateCard/CREATE_CANDIDATE_CARD"})),{},{getErf:function(){var t=this;return v(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.$toast.info("Loading..."),e.prev=2,e.next=5,t.GET_ERF(t.id);case 5:t.$toast.success("Data loaded..."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),t.$toast.error("Error! "+e.t0.response.statusText);case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])})))()},makeCandidateCard:function(){var t=this;return v(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,n={employee_request_form_id:t.$route.params.id},e.next=5,t.CREATE_CANDIDATE_CARD(n);case 5:return t.$toast.success("Candidate card created"),t.$toast.info("Redirecting you in 3 seconds.."),e.next=9,t.$delay(3e3);case 9:t.$router.push({name:"candidate-cards-show",params:{id:t.CANDIDATE_CARD.id}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t.$toast.error("Error! ".concat(e.t0.response.statusText));case 15:return e.prev=15,t.loading=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})))()},getStatusBadge:function(t){var e="";switch(t){case null:e="info";break;case 0:e="danger";break;default:e="success"}return"bg-".concat(e)},getStatusText:function(t){var e="";switch(t){case null:e="Needs Approval";break;case 0:e="Rejected";break;default:e="All Approved"}return e}})};const A=(0,n(1900).Z)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 d-flex align-items-center justify-content-between"},[n("page-heading",{attrs:{title:"Employee Request Form Details"}}),t._v(" "),t.loading?n("loading"):t._e()],1)]),t._v(" "),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col-12 col-xl-8"},[n("div",{staticClass:"card text-center shadow-4-strong"},[n("div",{staticClass:"card-header d-flex justify-content-between align-items-center"},[n("ul",{staticClass:"nav nav-pills card-header-tabs"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"employee-request-forms-show"},"exact-active-class":"active",href:"javascript:void(0)"}},[t._v("Form Details")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"employee-request-forms-requester"},"exact-active-class":"active",href:"javascript:void(0)"}},[t._v("Requester Details")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"employee-request-forms-approval"},"exact-active-class":"active",href:"javascript:void(0)"}},[t._v("Approvals")])],1)]),t._v(" "),n("div",[t.item?n("button",{staticClass:"btn btn-sm btn-rounded text-white",class:t.getStatusBadge(t.item.approval.approval_by_pic),attrs:{type:"button",disabled:""}},[t._v("\n                            "+t._s(t.getStatusText(t.item.approval.approval_by_pic))+"\n                        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"card-body"},[t.ERF.data?n("div",[n("router-view")],1):t._e()])])]),t._v(" "),n("div",{staticClass:"col-12 col-xl-4 mt-4 mt-xl-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"d-grid"},[n("button",{staticClass:"btn btn-primary",class:{disabled:!t.allApproved||t.loading},attrs:{type:"button",disabled:!t.allApproved||t.loading},on:{click:function(e){return t.makeCandidateCard()}}},[t._v("\n                            Make Candidate Card\n                        ")])])])]),t._v(" "),n("div",{staticClass:"card text-center shadow-4-strong mt-2"},[n("div",{staticClass:"card-header py-4"},[n("h4",{staticClass:"mb-0"},[t._v("\n                        Associated Candidate Cards\n                        "),n("span",{staticClass:"badge bg-secondary ms-2"},[t._v(t._s(t.candidateCardCount))])])]),t._v(" "),t.ERF.data?n("div",{staticClass:"card-body"},[n("div",{staticClass:"list-group shadow-2 w-75  mx-auto"},t._l(t.ERF.data.candidate_cards,(function(e){return n("a",{key:e.id,staticClass:"list-group-item list-group-item-action",attrs:{href:"javascript:void(0)","aria-current":"true"}},[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("div",[n("small",[t._v(t._s(e.created_at))])]),t._v(" "),n("div",[n("p",{staticClass:"mb-0"},[t._v("\n                                        "+t._s(e.status)+"\n                                    ")])])])])})),0)]):t._e()])])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=246.js.map