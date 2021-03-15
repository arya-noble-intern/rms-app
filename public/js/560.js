(self.webpackChunk=self.webpackChunk||[]).push([[560],{2533:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});var r=e(4015),a=e.n(r),i=e(3645),s=e.n(i)()(a());s.push([n.id,'.v-spinner .v-dot1{-webkit-animation:v-dotRotate 2s linear 0s infinite;animation:v-dotRotate 2s linear 0s infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.v-spinner .v-dot2{-webkit-animation:v-dotBounce 2s linear 0s infinite;animation:v-dotBounce 2s linear 0s infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;position:"absolute";top:0;bottom:auto}.v-spinner .v-dot3{-webkit-animation:v-dotBounce 2s linear -1s infinite;animation:v-dotBounce 2s linear -1s infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;position:"absolute";top:auto;bottom:0}@-webkit-keyframes v-dotRotate{to{transform:rotate(1turn)}}@keyframes v-dotRotate{to{transform:rotate(1turn)}}@-webkit-keyframes v-dotBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes v-dotBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}',"",{version:3,sources:["webpack://./node_modules/vue-spinner/src/DotLoader.vue"],names:[],mappings:"AAgEA,mBAGA,mDAAA,CACA,2CAAA,CACA,oCAAA,CACA,4BACA,CAEA,mBAGA,mDAAA,CACA,2CAAA,CACA,oCAAA,CACA,4BAAA,CACA,mBAAA,CACA,KAAA,CACA,WACA,CAEA,mBAEA,oDAAA,CACA,4CAAA,CACA,oCAAA,CACA,4BAAA,CACA,mBAAA,CACA,QAAA,CACA,QACA,CAEA,+BAEA,GAGA,uBACA,CACA,CAEA,uBAEA,GAGA,uBACA,CACA,CAEA,+BAEA,MAIA,kBACA,CACA,IAGA,kBACA,CACA,CAEA,uBAEA,MAIA,kBACA,CACA,IAGA,kBACA,CACA",sourcesContent:["<template>\n<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-dot v-dot1\" v-bind:style=\"spinnerBasicStyle\">\n    <div class=\"v-dot v-dot2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-dot v-dot3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>\n</template>\n\n<script>\nexport default {\n  \n  name: 'DotLoader',\n\n  props: {\n    loading: {\n      type: Boolean,\n      default: true\n    },\n    color: { \n      type: String,\n      default: '#5dc596'\n    },\n    size: {\n      type: String,\n      default: '60px'\n    },\n    margin: {\n      type: String,\n      default: '2px'\n    },\n    radius: {\n      type: String,\n      default: '100%'\n    }\n  },\n  computed: {\n    spinnerStyle () {\n      return {\n        backgroundColor: this.color,\n        height: parseFloat(this.size)/2 + 'px',\n        width: parseFloat(this.size)/2 + 'px',\n        borderRadius: this.radius\n      }\n    },\n    spinnerBasicStyle () {\n      return {\n        height: this.size,\n        width: this.size,\n        position: 'relative'\n      }\n    }\n  }\n\n}\n<\/script>\n\n<style>\n\n.v-spinner .v-dot\n{\n          \n}\n\n.v-spinner .v-dot1\n{\n\n    -webkit-animation: v-dotRotate 2s 0s infinite linear;\n            animation: v-dotRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.v-spinner .v-dot2\n{\n\n    -webkit-animation: v-dotBounce 2s 0s infinite linear;\n            animation: v-dotBounce 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: 'absolute';\n    top: 0;\n    bottom: auto;\n}\n\n.v-spinner .v-dot3\n{\n    -webkit-animation: v-dotBounce 2s -1s infinite linear;\n            animation: v-dotBounce 2s -1s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: 'absolute';\n    top: auto;\n    bottom: 0;            \n}\n\n@-webkit-keyframes v-dotRotate\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-dotRotate\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes v-dotBounce\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n}\n\n@keyframes v-dotBounce\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n}\n</style>"],sourceRoot:""}]);const o=s},6505:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});var r=e(4015),a=e.n(r),i=e(3645),s=e.n(i)()(a());s.push([n.id,".disabled{pointer-events:none}","",{version:3,sources:["webpack://./resources/js/pages/talents/index.vue"],names:[],mappings:"AAiQA,UACA,mBACA",sourcesContent:['<template>\r\n    <div>\r\n        <page-heading title="talents" />\r\n        <div v-if="TALENTS.data && !loading">\r\n            <div class="row mb-2">\r\n                <div class="col-12 d-flex justify-content-between">\r\n                    <div class="dropdown">\r\n                        <button\r\n                            class="btn btn-info text-white btn-sm dropdown-toggle"\r\n                            type="button"\r\n                            id="dropdownSort"\r\n                            data-mdb-toggle="dropdown"\r\n                            aria-expanded="false"\r\n                        >\r\n                            Sort By\r\n                        </button>\r\n                        <ul\r\n                            class="dropdown-menu"\r\n                            aria-labelledby="dropdownSort"\r\n                        >\r\n                            <li\r\n                                v-for="(item, index) in sortBySelection"\r\n                                :key="index"\r\n                            >\r\n                                <a\r\n                                    class="dropdown-item"\r\n                                    :class="{\r\n                                        active: currentSort(item.name, item.dir)\r\n                                    }"\r\n                                    href="javascript:void(0)"\r\n                                    @click="sortTalents(item.name, item.dir)"\r\n                                    >{{ item.name }} - {{ item.dir }}</a\r\n                                >\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <router-link\r\n                        :to="{ name: \'talents-create\' }"\r\n                        type="button"\r\n                        class="btn btn-primary btn-sm btn-rounded"\r\n                        ><i class="ri-user-add-line me-2"></i>Create\r\n                        Talent</router-link\r\n                    >\r\n                </div>\r\n            </div>\r\n            <div class="table-responsive">\r\n                <table class="table table-hover align-middle">\r\n                    <thead class="table-dark">\r\n                        <tr class="text-nowrap">\r\n                            <th scope="col">ID</th>\r\n                            <th scope="col">Name</th>\r\n                            <th scope="col">Position</th>\r\n                            <th scope="col">University</th>\r\n                            <th scope="col">Created By</th>\r\n                            <th scope="col">Created At</th>\r\n                            <th scope="col"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr v-for="item in TALENTS.data" :key="item.id">\r\n                            <th scope="row">{{ item.id }}</th>\r\n                            <td>{{ item.name }}</td>\r\n                            <td>{{ item.applied_position }}</td>\r\n                            <td>\r\n                                {{ item.university }}\r\n                            </td>\r\n                            <td>{{ item.pic.name }}</td>\r\n                            <td>\r\n                                {{\r\n                                    item.dates.created_at\r\n                                        | moment("dddd, DD/MM/YYYY")\r\n                                }}\r\n                            </td>\r\n                            <td>\r\n                                <div class="d-flex justify-content-end">\r\n                                    <router-link\r\n                                        :to="{\r\n                                            name: \'talents-show\',\r\n                                            params: { id: item.id }\r\n                                        }"\r\n                                        type="button"\r\n                                        class="btn btn-info text-white btn-sm px-3 mx-2 d-flex align-items-center"\r\n                                    >\r\n                                        <i class="ri-eye-line me-2"></i>\r\n                                        <span>Details</span>\r\n                                    </router-link>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan="7">\r\n                                <div class="d-flex justify-content-between">\r\n                                    <div>\r\n                                        <p>\r\n                                            Page\r\n                                            {{ TALENTS.meta.current_page }} of\r\n                                            {{ TALENTS.meta.last_page }}\r\n                                        </p>\r\n                                    </div>\r\n                                    <nav aria-label="pagination">\r\n                                        <ul\r\n                                            class="pagination justify-content-end mb-0"\r\n                                        >\r\n                                            <li\r\n                                                class="page-item"\r\n                                                :class="{\r\n                                                    disabled:\r\n                                                        !TALENTS.links.prev &&\r\n                                                        !loading\r\n                                                }"\r\n                                                :disabled="loading"\r\n                                                @click="changePage(\'prev\')"\r\n                                            >\r\n                                                <a\r\n                                                    class="page-link"\r\n                                                    href="#"\r\n                                                    tabindex="-1"\r\n                                                    >Previous</a\r\n                                                >\r\n                                            </li>\r\n                                            <li class="page-item active">\r\n                                                <a\r\n                                                    class="page-link pe-none"\r\n                                                    href="javascript:void(0)"\r\n                                                    >{{\r\n                                                        TALENTS.meta\r\n                                                            .current_page\r\n                                                    }}</a\r\n                                                >\r\n                                            </li>\r\n                                            <li\r\n                                                class="page-item"\r\n                                                :class="{\r\n                                                    disabled:\r\n                                                        !TALENTS.links.next &&\r\n                                                        !loading\r\n                                                }"\r\n                                                :disabled="loading"\r\n                                                @click="changePage(\'next\')"\r\n                                            >\r\n                                                <a\r\n                                                    class="page-link"\r\n                                                    href="javascript:void(0)"\r\n                                                    >Next</a\r\n                                                >\r\n                                            </li>\r\n                                        </ul>\r\n                                    </nav>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div v-else>\r\n            <div class="row">\r\n                <div class="col d-flex justify-content-center">\r\n                    <loading />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport PageHeading from "../../components/Core/PageHeading.vue";\r\nimport Loading from "../../components/Core/Loading.vue";\r\nimport { mapActions, mapGetters } from "vuex";\r\n\r\nexport default {\r\n    name: "TalentsPage",\r\n    components: { PageHeading, Loading },\r\n    async mounted() {\r\n        await this.getTalents();\r\n\r\n        this.parameters.page = this.TALENTS.meta.current_page;\r\n    },\r\n    data() {\r\n        return {\r\n            loading: false,\r\n            error: true,\r\n            parameters: {\r\n                page: 1,\r\n                sortBy: "created_at",\r\n                sortDir: "desc"\r\n            },\r\n            sortBySelection: [\r\n                { name: "name", dir: "asc" },\r\n                { name: "name", dir: "desc" },\r\n                { name: "applied_position", dir: "asc" },\r\n                { name: "applied_position", dir: "desc" },\r\n                { name: "university", dir: "asc" },\r\n                { name: "university", dir: "desc" },\r\n                { name: "created_at", dir: "asc" },\r\n                { name: "created_at", dir: "desc" }\r\n            ]\r\n        };\r\n    },\r\n    computed: {\r\n        ...mapGetters({\r\n            TALENTS: "talent/TALENTS"\r\n        })\r\n    },\r\n    methods: {\r\n        ...mapActions({\r\n            GET_TALENTS: "talent/GET_TALENTS"\r\n        }),\r\n        async changePage(direction) {\r\n            this.parameters.page = this.TALENTS.meta.current_page;\r\n\r\n            if (direction == "next") {\r\n                if (this.TALENTS.links.next) {\r\n                    this.parameters.page += 1;\r\n                    this.getTalents();\r\n                }\r\n            } else {\r\n                if (this.TALENTS.links.prev) {\r\n                    this.parameters.page -= 1;\r\n                    this.getTalents();\r\n                }\r\n            }\r\n        },\r\n        async getTalents() {\r\n            this.loading = true;\r\n            this.$toast.info("Loading...");\r\n            try {\r\n                await this.GET_TALENTS({\r\n                    page: this.parameters.page,\r\n                    sort: this.parameters.sortBy,\r\n                    sortDir: this.parameters.sortDir\r\n                });\r\n                this.$toast.success("Data updated");\r\n            } catch (err) {\r\n                this.$toast.error("Fail to fetched...");\r\n            } finally {\r\n                this.loading = false;\r\n            }\r\n        },\r\n        sortTalents(name, dir) {\r\n            this.parameters.sortBy = name;\r\n            this.parameters.sortDir = dir;\r\n            this.parameters.page = 1;\r\n            this.getTalents();\r\n        },\r\n        currentSort(name, dir) {\r\n            return (\r\n                name == this.parameters.sortBy && dir == this.parameters.sortDir\r\n            );\r\n        }\r\n    }\r\n};\r\n<\/script>\r\n\r\n<style>\r\n.disabled {\r\n    pointer-events: none;\r\n}\r\n</style>\r\n'],sourceRoot:""}]);const o=s},2284:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});const r={name:"DotLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},computed:{spinnerStyle(){return{backgroundColor:this.color,height:parseFloat(this.size)/2+"px",width:parseFloat(this.size)/2+"px",borderRadius:this.radius}},spinnerBasicStyle(){return{height:this.size,width:this.size,position:"relative"}}}};var a=e(3379),i=e.n(a),s=e(2533),o={insert:"head",singleton:!1};i()(s.Z,o);s.Z.locals;var d=e(1900);const l={name:"Loading",components:{DotLoader:(0,d.Z)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:n.loading,expression:"loading"}],staticClass:"v-spinner"},[e("div",{staticClass:"v-dot v-dot1",style:n.spinnerBasicStyle},[e("div",{staticClass:"v-dot v-dot2",style:n.spinnerStyle}),e("div",{staticClass:"v-dot v-dot3",style:n.spinnerStyle})])])}),[],!1,null,null,null).exports}};const c=(0,d.Z)(l,(function(){var n=this.$createElement;return(this._self._c||n)("dot-loader",{attrs:{color:"#f77f00"}})}),[],!1,null,null,null).exports},4062:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});const r={name:"PageHeading",props:{title:{type:String,default:""}}};const a=(0,e(1900).Z)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h1",{staticClass:"h3 text-uppercase mb-4"},[n._v(n._s(n.title))])])}),[],!1,null,null,null).exports},560:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>h});var r=e(7757),a=e.n(r),i=e(4062),s=e(2284),o=e(629);function d(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){c(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t,e,r,a,i,s){try{var o=n[i](s),d=o.value}catch(n){return void e(n)}o.done?t(d):Promise.resolve(d).then(r,a)}function m(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function s(n){p(i,r,a,s,o,"next",n)}function o(n){p(i,r,a,s,o,"throw",n)}s(void 0)}))}}const u={name:"TalentsPage",components:{PageHeading:i.Z,Loading:s.Z},mounted:function(){var n=this;return m(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getTalents();case 2:n.parameters.page=n.TALENTS.meta.current_page;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!1,error:!0,parameters:{page:1,sortBy:"created_at",sortDir:"desc"},sortBySelection:[{name:"name",dir:"asc"},{name:"name",dir:"desc"},{name:"applied_position",dir:"asc"},{name:"applied_position",dir:"desc"},{name:"university",dir:"asc"},{name:"university",dir:"desc"},{name:"created_at",dir:"asc"},{name:"created_at",dir:"desc"}]}},computed:l({},(0,o.Se)({TALENTS:"talent/TALENTS"})),methods:l(l({},(0,o.nv)({GET_TALENTS:"talent/GET_TALENTS"})),{},{changePage:function(n){var t=this;return m(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.parameters.page=t.TALENTS.meta.current_page,"next"==n?t.TALENTS.links.next&&(t.parameters.page+=1,t.getTalents()):t.TALENTS.links.prev&&(t.parameters.page-=1,t.getTalents());case 2:case"end":return e.stop()}}),e)})))()},getTalents:function(){var n=this;return m(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.loading=!0,n.$toast.info("Loading..."),t.prev=2,t.next=5,n.GET_TALENTS({page:n.parameters.page,sort:n.parameters.sortBy,sortDir:n.parameters.sortDir});case 5:n.$toast.success("Data updated"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),n.$toast.error("Fail to fetched...");case 11:return t.prev=11,n.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[2,8,11,14]])})))()},sortTalents:function(n,t){this.parameters.sortBy=n,this.parameters.sortDir=t,this.parameters.page=1,this.getTalents()},currentSort:function(n,t){return n==this.parameters.sortBy&&t==this.parameters.sortDir}})};var v=e(3379),A=e.n(v),f=e(6505),g={insert:"head",singleton:!1};A()(f.Z,g);f.Z.locals;const h=(0,e(1900).Z)(u,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("page-heading",{attrs:{title:"talents"}}),n._v(" "),n.TALENTS.data&&!n.loading?e("div",[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-12 d-flex justify-content-between"},[e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn btn-info text-white btn-sm dropdown-toggle",attrs:{type:"button",id:"dropdownSort","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[n._v("\n                        Sort By\n                    ")]),n._v(" "),e("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownSort"}},n._l(n.sortBySelection,(function(t,r){return e("li",{key:r},[e("a",{staticClass:"dropdown-item",class:{active:n.currentSort(t.name,t.dir)},attrs:{href:"javascript:void(0)"},on:{click:function(e){return n.sortTalents(t.name,t.dir)}}},[n._v(n._s(t.name)+" - "+n._s(t.dir))])])})),0)]),n._v(" "),e("router-link",{staticClass:"btn btn-primary btn-sm btn-rounded",attrs:{to:{name:"talents-create"},type:"button"}},[e("i",{staticClass:"ri-user-add-line me-2"}),n._v("Create\n                    Talent")])],1)]),n._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover align-middle"},[n._m(0),n._v(" "),e("tbody",n._l(n.TALENTS.data,(function(t){return e("tr",{key:t.id},[e("th",{attrs:{scope:"row"}},[n._v(n._s(t.id))]),n._v(" "),e("td",[n._v(n._s(t.name))]),n._v(" "),e("td",[n._v(n._s(t.applied_position))]),n._v(" "),e("td",[n._v("\n                            "+n._s(t.university)+"\n                        ")]),n._v(" "),e("td",[n._v(n._s(t.pic.name))]),n._v(" "),e("td",[n._v("\n                            "+n._s(n._f("moment")(t.dates.created_at,"dddd, DD/MM/YYYY"))+"\n                        ")]),n._v(" "),e("td",[e("div",{staticClass:"d-flex justify-content-end"},[e("router-link",{staticClass:"btn btn-info text-white btn-sm px-3 mx-2 d-flex align-items-center",attrs:{to:{name:"talents-show",params:{id:t.id}},type:"button"}},[e("i",{staticClass:"ri-eye-line me-2"}),n._v(" "),e("span",[n._v("Details")])])],1)])])})),0),n._v(" "),e("tfoot",[e("tr",[e("td",{attrs:{colspan:"7"}},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",[e("p",[n._v("\n                                        Page\n                                        "+n._s(n.TALENTS.meta.current_page)+" of\n                                        "+n._s(n.TALENTS.meta.last_page)+"\n                                    ")])]),n._v(" "),e("nav",{attrs:{"aria-label":"pagination"}},[e("ul",{staticClass:"pagination justify-content-end mb-0"},[e("li",{staticClass:"page-item",class:{disabled:!n.TALENTS.links.prev&&!n.loading},attrs:{disabled:n.loading},on:{click:function(t){return n.changePage("prev")}}},[e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"}},[n._v("Previous")])]),n._v(" "),e("li",{staticClass:"page-item active"},[e("a",{staticClass:"page-link pe-none",attrs:{href:"javascript:void(0)"}},[n._v(n._s(n.TALENTS.meta.current_page))])]),n._v(" "),e("li",{staticClass:"page-item",class:{disabled:!n.TALENTS.links.next&&!n.loading},attrs:{disabled:n.loading},on:{click:function(t){return n.changePage("next")}}},[e("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"}},[n._v("Next")])])])])])])])])])])]):e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col d-flex justify-content-center"},[e("loading")],1)])])],1)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("thead",{staticClass:"table-dark"},[e("tr",{staticClass:"text-nowrap"},[e("th",{attrs:{scope:"col"}},[n._v("ID")]),n._v(" "),e("th",{attrs:{scope:"col"}},[n._v("Name")]),n._v(" "),e("th",{attrs:{scope:"col"}},[n._v("Position")]),n._v(" "),e("th",{attrs:{scope:"col"}},[n._v("University")]),n._v(" "),e("th",{attrs:{scope:"col"}},[n._v("Created By")]),n._v(" "),e("th",{attrs:{scope:"col"}},[n._v("Created At")]),n._v(" "),e("th",{attrs:{scope:"col"}})])])}],!1,null,null,null).exports}}]);
//# sourceMappingURL=560.js.map