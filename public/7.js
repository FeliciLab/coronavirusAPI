(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./resources/js/services/api.js");
/* harmony import */ var _charts_Line_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../charts/Line.vue */ "./resources/js/components/charts/Line.vue");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./resources/js/helpers.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  components: {
    ChartLine: _charts_Line_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      data: []
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, result, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].get('/casos-ceara-por-dia');

            case 2:
              response = _context.sent;
              result = [];
              data = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["orderByDate"])(response.data);
              data.reduce(function (res, value) {
                if (!res[value.data]) {
                  res[value.data] = {
                    data: value.data,
                    quantidade: 0
                  };
                  result.push(res[value.data]);
                }

                res[value.data].quantidade += value.quantidade; // res[value.data].obitos += value.obitos

                return res;
              }, {});
              _this.data = {
                labels: result.map(function (item) {
                  var splitted = item.data.split('-');
                  return "".concat(splitted[2], "/").concat(splitted[1]);
                }),
                datasets: [{
                  label: 'Número de Casos Confirmados',
                  data: result.map(function (item) {
                    return item.quantidade;
                  }),
                  backgroundColor: 'rgba(224, 43, 32, 0.2)',
                  borderColor: 'rgb(224, 43, 32)'
                }, {
                  label: 'Número de óbitos',
                  data: result.map(function (item) {
                    return item.obitos;
                  }),
                  backgroundColor: 'rgba(111, 111, 111, 0.2)',
                  borderColor: 'rgb(111,111,111)'
                }]
              };

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CasosEpidemiologicos.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CasosEpidemiologicos.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_visualizations_CasosPorDia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/visualizations/CasosPorDia */ "./resources/js/components/visualizations/CasosPorDia.vue");
/* harmony import */ var _components_visualizations_CurvaEpidemiologica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/visualizations/CurvaEpidemiologica */ "./resources/js/components/visualizations/CurvaEpidemiologica.vue");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CasosPorDia: _components_visualizations_CasosPorDia__WEBPACK_IMPORTED_MODULE_0__["default"],
    CurvaEpidemiologica: _components_visualizations_CurvaEpidemiologica__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=template&id=7cbd378d&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=template&id=7cbd378d& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-12" },
      [
        _vm.data.length != 0
          ? _c("ChartLine", { attrs: { data: _vm.data } })
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "row d-flex justify-content-center" }, [
        _c(
          "div",
          {
            staticClass:
              "col-12 col-md-3 d-flex align-items-center justify-content-center"
          },
          [
            _c("div", { staticClass: "legend legend-e02b20" }),
            _vm._v(" "),
            _c("span", [_vm._v("Casos Confirmados")])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CasosEpidemiologicos.vue?vue&type=template&id=378de8d4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CasosEpidemiologicos.vue?vue&type=template&id=378de8d4& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("CasosPorDia"), _vm._v(" "), _c("CurvaEpidemiologica")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/visualizations/CurvaEpidemiologica.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/visualizations/CurvaEpidemiologica.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CurvaEpidemiologica_vue_vue_type_template_id_7cbd378d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurvaEpidemiologica.vue?vue&type=template&id=7cbd378d& */ "./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=template&id=7cbd378d&");
/* harmony import */ var _CurvaEpidemiologica_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurvaEpidemiologica.vue?vue&type=script&lang=js& */ "./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CurvaEpidemiologica_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CurvaEpidemiologica_vue_vue_type_template_id_7cbd378d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CurvaEpidemiologica_vue_vue_type_template_id_7cbd378d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/visualizations/CurvaEpidemiologica.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurvaEpidemiologica_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CurvaEpidemiologica.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurvaEpidemiologica_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=template&id=7cbd378d&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=template&id=7cbd378d& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurvaEpidemiologica_vue_vue_type_template_id_7cbd378d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CurvaEpidemiologica.vue?vue&type=template&id=7cbd378d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visualizations/CurvaEpidemiologica.vue?vue&type=template&id=7cbd378d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurvaEpidemiologica_vue_vue_type_template_id_7cbd378d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurvaEpidemiologica_vue_vue_type_template_id_7cbd378d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/CasosEpidemiologicos.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/CasosEpidemiologicos.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CasosEpidemiologicos_vue_vue_type_template_id_378de8d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CasosEpidemiologicos.vue?vue&type=template&id=378de8d4& */ "./resources/js/views/CasosEpidemiologicos.vue?vue&type=template&id=378de8d4&");
/* harmony import */ var _CasosEpidemiologicos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CasosEpidemiologicos.vue?vue&type=script&lang=js& */ "./resources/js/views/CasosEpidemiologicos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CasosEpidemiologicos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CasosEpidemiologicos_vue_vue_type_template_id_378de8d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CasosEpidemiologicos_vue_vue_type_template_id_378de8d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CasosEpidemiologicos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CasosEpidemiologicos.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/CasosEpidemiologicos.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CasosEpidemiologicos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CasosEpidemiologicos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CasosEpidemiologicos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CasosEpidemiologicos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CasosEpidemiologicos.vue?vue&type=template&id=378de8d4&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/CasosEpidemiologicos.vue?vue&type=template&id=378de8d4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CasosEpidemiologicos_vue_vue_type_template_id_378de8d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CasosEpidemiologicos.vue?vue&type=template&id=378de8d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CasosEpidemiologicos.vue?vue&type=template&id=378de8d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CasosEpidemiologicos_vue_vue_type_template_id_378de8d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CasosEpidemiologicos_vue_vue_type_template_id_378de8d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);