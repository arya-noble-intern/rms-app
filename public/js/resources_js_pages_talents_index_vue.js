(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_talents_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Core/PageHeading.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Core/PageHeading.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PageHeading",
  props: {
    title: {
      type: String,
      "default": ""
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/talents/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/talents/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Core_PageHeading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Core/PageHeading.vue */ "./resources/js/components/Core/PageHeading.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TalentsPage",
  components: {
    PageHeading: _components_Core_PageHeading_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  mounted: function mounted() {
    if (!Object.keys(this.TALENTS).length) {
      this.GET_TALENTS();
    }
  },
  data: function data() {
    return {
      loading: false,
      error: true
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    TALENTS: "talent/TALENTS"
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    GET_TALENTS: "talent/GET_TALENTS"
  })), {}, {
    changePage: function changePage(direction) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var page;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                page = parseInt(_this.TALENTS.meta.current_page);
                _context.prev = 2;

                if (!(direction == "next")) {
                  _context.next = 10;
                  break;
                }

                if (!_this.TALENTS.links.next) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return _this.GET_TALENTS(page + 1);

              case 7:
                _this.$toast.success("Data updated");

              case 8:
                _context.next = 14;
                break;

              case 10:
                if (!_this.TALENTS.links.prev) {
                  _context.next = 14;
                  break;
                }

                _context.next = 13;
                return _this.GET_TALENTS(page - 1);

              case 13:
                _this.$toast.success("Data updated");

              case 14:
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](2);
                _this.error = true;

                _this.$toast.error("Fail to fetch data");

              case 20:
                _context.prev = 20;
                _this.loading = false;
                _this.error = false;
                return _context.finish(20);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 16, 20, 24]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./resources/js/components/Core/PageHeading.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Core/PageHeading.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageHeading_vue_vue_type_template_id_3046aa64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeading.vue?vue&type=template&id=3046aa64& */ "./resources/js/components/Core/PageHeading.vue?vue&type=template&id=3046aa64&");
/* harmony import */ var _PageHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeading.vue?vue&type=script&lang=js& */ "./resources/js/components/Core/PageHeading.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PageHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PageHeading_vue_vue_type_template_id_3046aa64___WEBPACK_IMPORTED_MODULE_0__.render,
  _PageHeading_vue_vue_type_template_id_3046aa64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Core/PageHeading.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/talents/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/talents/index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2f96a39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2f96a39e& */ "./resources/js/pages/talents/index.vue?vue&type=template&id=2f96a39e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/talents/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_2f96a39e___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_2f96a39e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/talents/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Core/PageHeading.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Core/PageHeading.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHeading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Core/PageHeading.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/talents/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/talents/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/talents/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Core/PageHeading.vue?vue&type=template&id=3046aa64&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Core/PageHeading.vue?vue&type=template&id=3046aa64& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeading_vue_vue_type_template_id_3046aa64___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeading_vue_vue_type_template_id_3046aa64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeading_vue_vue_type_template_id_3046aa64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageHeading.vue?vue&type=template&id=3046aa64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Core/PageHeading.vue?vue&type=template&id=3046aa64&");


/***/ }),

/***/ "./resources/js/pages/talents/index.vue?vue&type=template&id=2f96a39e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/talents/index.vue?vue&type=template&id=2f96a39e& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f96a39e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f96a39e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f96a39e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=2f96a39e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/talents/index.vue?vue&type=template&id=2f96a39e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Core/PageHeading.vue?vue&type=template&id=3046aa64&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Core/PageHeading.vue?vue&type=template&id=3046aa64& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", { staticClass: "h3 text-uppercase mb-4" }, [
      _vm._v(_vm._s(_vm.title))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/talents/index.vue?vue&type=template&id=2f96a39e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/talents/index.vue?vue&type=template&id=2f96a39e& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page-heading", { attrs: { title: "talents" } }),
      _vm._v(" "),
      _vm.TALENTS.data
        ? _c("div", [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover align-middle" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.TALENTS.data, function(item, index) {
                    return _c("tr", { key: item.id }, [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(index + 1))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.applied_position))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.university) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.pic.name))]),
                      _vm._v(" "),
                      _vm._m(1, true)
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c("tfoot", [
                  _c("tr", [
                    _c("td", { attrs: { colspan: "6" } }, [
                      _c(
                        "nav",
                        {
                          staticClass: "w-100",
                          attrs: { "aria-label": "pagination" }
                        },
                        [
                          _c(
                            "ul",
                            {
                              staticClass: "pagination justify-content-end mb-0"
                            },
                            [
                              _c(
                                "li",
                                {
                                  staticClass: "page-item",
                                  class: {
                                    disabled:
                                      !_vm.TALENTS.links.prev && !_vm.loading
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changePage("prev")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "page-link",
                                      attrs: {
                                        href: "#",
                                        tabindex: "-1",
                                        "aria-disabled": "true"
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("li", { staticClass: "page-item active" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link pe-none",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.TALENTS.meta.current_page)
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass: "page-item",
                                  class: {
                                    disabled:
                                      !_vm.TALENTS.links.next && !_vm.loading
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changePage("next")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "page-link",
                                      attrs: { href: "javascript:void(0)" }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Position")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("University")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Created By")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", { staticClass: "d-flex justify-content-around" }, [
        _c(
          "button",
          {
            staticClass:
              "btn btn-primary btn-sm px-3 d-flex align-items-center",
            attrs: { type: "button" }
          },
          [
            _c("i", { staticClass: "ri-eye-line me-2" }),
            _vm._v(" "),
            _c("span", [_vm._v("Details")])
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-danger btn-sm px-3",
            attrs: { type: "button" }
          },
          [_c("i", { staticClass: "fas fa-times" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);