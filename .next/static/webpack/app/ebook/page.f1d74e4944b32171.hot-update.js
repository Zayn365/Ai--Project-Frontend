"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/ebook/page",{

/***/ "(app-pages-browser)/./app/ebook/page.tsx":
/*!****************************!*\
  !*** ./app/ebook/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AiEbookPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_pages_sections_AiEbookForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/pages/sections/AiEbookForm */ \"(app-pages-browser)/./components/pages/sections/AiEbookForm.tsx\");\n/* harmony import */ var _utils_ToastMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ToastMessages */ \"(app-pages-browser)/./utils/ToastMessages.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AiEbookPage() {\n    _s();\n    const [submittedData, setSubmittedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function handleSubmit(values) {\n        console.log(\"\\uD83D\\uDE80 ~ handleSubmit ~ values:\", values);\n        console.log(\"\\uD83D\\uDE80 ~ handleSubmit ~ !values.level && values.audience.length === 0 && !values.theme:\", !values.level && values.audience.length === 0 && !values.theme);\n        if ((values.audience.length || values.theme) === 0) {\n            (0,_utils_ToastMessages__WEBPACK_IMPORTED_MODULE_3__.fail)(\"Please Define All Values\");\n            return;\n        }\n        try {\n            // const res = await Axios.post(\"/ebook/ai\", {\n            //   prompt: {\n            //     title: values.title,\n            //     audience: `${values.audience.concat()}`,\n            //     theme: `${values.theme.concat()}`,\n            //     level: values.level[0].toLowerCase(),\n            //   },\n            // });\n            // const image = await Axios.post(\"/images/ai\", {\n            //   userId: 1,\n            //   imagedetails: {\n            //     title: values.title,\n            //     size: values.size,\n            //     noOfImagesL: 1,\n            //   },\n            //   imagesurl: { url: values.imagesurl },\n            // });\n            // setImages(image?.data?.message?.imagesurl?.url);\n            // setSubmittedData(values as any);\n            // setContent(res?.data?.message?.content);\n            (0,_utils_ToastMessages__WEBPACK_IMPORTED_MODULE_3__.success)(\"Successfully Created\");\n        } catch (err) {\n            console.log(err);\n            (0,_utils_ToastMessages__WEBPACK_IMPORTED_MODULE_3__.fail)(\"Submission failed\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container pt-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_sections_AiEbookForm__WEBPACK_IMPORTED_MODULE_2__.AiEbookForm, {\n                onSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            submittedData && content && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                        className: \"text-primary text-2xl\",\n                        children: \"Submitted eBook\"\n                    }, void 0, false, {\n                        fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__.CardContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-bold\",\n                                children: submittedData.title\n                            }, void 0, false, {\n                                fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: (images === null || images === void 0 ? void 0 : images.length) > 0 && images.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"rounded-md\",\n                                        src: item,\n                                        alt: \"\".concat(key),\n                                        width: 500,\n                                        height: 500\n                                    }, key, false, {\n                                        fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Theme: \",\n                                    submittedData.theme\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Audience: \",\n                                    submittedData.audience\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Difficulty: \",\n                                    submittedData.level\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ebook:\"\n                            }, void 0, false, {\n                                fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: content ? content : \"Sorry! Something went wrong\"\n                            }, void 0, false, {\n                                fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zayn/Applications/Ai-Project-Frontend/app/ebook/page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(AiEbookPage, \"ZaSsrU6gdU25Yjim84pJZeF/Bnk=\");\n_c = AiEbookPage;\nvar _c;\n$RefreshReg$(_c, \"AiEbookPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lYm9vay9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBSWdCO0FBRUs7QUFFZTtBQUN0QztBQVdoQixTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQXFCO0lBQ3ZFLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBUztJQUMvQyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQVcsRUFBRTtJQUNqRCxlQUFlZSxhQUFhQyxNQUF5QztRQUNuRUMsUUFBUUMsR0FBRyxDQUFDLHlDQUErQkY7UUFDM0NDLFFBQVFDLEdBQUcsQ0FDVCxpR0FDQSxDQUFDRixPQUFPRyxLQUFLLElBQUlILE9BQU9JLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEtBQUssQ0FBQ0wsT0FBT00sS0FBSztRQUVoRSxJQUFJLENBQUNOLE9BQU9JLFFBQVEsQ0FBQ0MsTUFBTSxJQUFJTCxPQUFPTSxLQUFLLE1BQU0sR0FBRztZQUNsRG5CLDBEQUFJQSxDQUFDO1lBQ0w7UUFDRjtRQUNBLElBQUk7WUFDRiw4Q0FBOEM7WUFDOUMsY0FBYztZQUNkLDJCQUEyQjtZQUMzQiwrQ0FBK0M7WUFDL0MseUNBQXlDO1lBQ3pDLDRDQUE0QztZQUM1QyxPQUFPO1lBQ1AsTUFBTTtZQUNOLGlEQUFpRDtZQUNqRCxlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLDJCQUEyQjtZQUMzQix5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLE9BQU87WUFDUCwwQ0FBMEM7WUFDMUMsTUFBTTtZQUNOLG1EQUFtRDtZQUNuRCxtQ0FBbUM7WUFDbkMsMkNBQTJDO1lBQzNDRCw2REFBT0EsQ0FBQztRQUNWLEVBQUUsT0FBT3FCLEtBQUs7WUFDWk4sUUFBUUMsR0FBRyxDQUFDSztZQUNacEIsMERBQUlBLENBQUM7UUFDUDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNxQjtRQUFRQyxXQUFVOzswQkFDakIsOERBQUN4QiwrRUFBV0E7Z0JBQUN5QixVQUFVWDs7Ozs7O1lBQ3RCTixpQkFBaUJFLHlCQUNoQiw4REFBQ1AscURBQUlBO2dCQUFDcUIsV0FBVTs7a0NBQ2QsOERBQUNuQiwyREFBVUE7d0JBQUNtQixXQUFVO2tDQUF3Qjs7Ozs7O2tDQUc5Qyw4REFBQ3BCLDREQUFXQTs7MENBQ1YsOERBQUNzQjtnQ0FBR0YsV0FBVTswQ0FBcUJoQixjQUFjbUIsS0FBSzs7Ozs7OzBDQUN0RCw4REFBQ0M7Z0NBQUlKLFdBQVU7MENBQ1paLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUVEsTUFBTSxJQUFHLEtBQ2hCUixPQUFPaUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLG9CQUNoQiw4REFBQ3pCLGtEQUFLQTt3Q0FFSmtCLFdBQVU7d0NBQ1ZRLEtBQUtGO3dDQUNMRyxLQUFLLEdBQU8sT0FBSkY7d0NBQ1JHLE9BQU87d0NBQ1BDLFFBQVE7dUNBTEhKOzs7Ozs7Ozs7OzBDQVNiLDhEQUFDSzs7b0NBQUU7b0NBQVE1QixjQUFjYSxLQUFLOzs7Ozs7OzBDQUM5Qiw4REFBQ2U7O29DQUFFO29DQUFXNUIsY0FBY1csUUFBUTs7Ozs7OzswQ0FDcEMsOERBQUNpQjs7b0NBQUU7b0NBQWE1QixjQUFjVSxLQUFLOzs7Ozs7OzBDQUNuQyw4REFBQ2tCOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNBOzBDQUFHMUIsVUFBVUEsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDO0dBMUV3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Vib29rL3BhZ2UudHN4PzMxMTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWlFYm9va0Zvcm0sXG4gIGZvcm1BaUVib29rU2NoZW1hLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VzL3NlY3Rpb25zL0FpRWJvb2tGb3JtXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgc3VjY2VzcywgZmFpbCB9IGZyb20gXCJAL3V0aWxzL1RvYXN0TWVzc2FnZXNcIjtcbmltcG9ydCB7IEF4aW9zIH0gZnJvbSBcIkAvdXRpbHMvQXhpb3NcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxudHlwZSBlYm9va1NjaGVtYSA9IHtcbiAgdGhlbWU6XG4gICAgfCBbXCJEcmFtYVwiLCBcIlRocmlsbGVyXCIsIFwiVHJhZ2ljXCIsIFwiQWR2ZW50dXJlXCIsIFwiQ29tZWR5XCIsIFwiSG9ycm9yXCIsIFwiR29yZVwiXTtcbiAgdGl0bGU6IFN0cmluZztcbiAgY29udGVudDogU3RyaW5nO1xuICBhdWRpZW5jZTogW1wiQWR1bHRzXCIsIFwiVGVlbnNcIiwgXCJDaGlsZHJlblwiXTtcbiAgbGV2ZWw6IFwiQmVnaW5uZXJcIiB8IFwiSW50ZXJtZWRpYXRlXCIgfCBcIlByb2Zlc3Npb25hbFwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWlFYm9va1BhZ2UoKSB7XG4gIGNvbnN0IFtzdWJtaXR0ZWREYXRhLCBzZXRTdWJtaXR0ZWREYXRhXSA9IHVzZVN0YXRlPGVib29rU2NoZW1hIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlPFN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQodmFsdWVzOiB6LmluZmVyPHR5cGVvZiBmb3JtQWlFYm9va1NjaGVtYT4pIHtcbiAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBoYW5kbGVTdWJtaXQgfiB2YWx1ZXM6XCIsIHZhbHVlcyk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIvCfmoAgfiBoYW5kbGVTdWJtaXQgfiAhdmFsdWVzLmxldmVsICYmIHZhbHVlcy5hdWRpZW5jZS5sZW5ndGggPT09IDAgJiYgIXZhbHVlcy50aGVtZTpcIixcbiAgICAgICF2YWx1ZXMubGV2ZWwgJiYgdmFsdWVzLmF1ZGllbmNlLmxlbmd0aCA9PT0gMCAmJiAhdmFsdWVzLnRoZW1lXG4gICAgKTtcbiAgICBpZiAoKHZhbHVlcy5hdWRpZW5jZS5sZW5ndGggfHwgdmFsdWVzLnRoZW1lKSA9PT0gMCkge1xuICAgICAgZmFpbChcIlBsZWFzZSBEZWZpbmUgQWxsIFZhbHVlc1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoXCIvZWJvb2svYWlcIiwge1xuICAgICAgLy8gICBwcm9tcHQ6IHtcbiAgICAgIC8vICAgICB0aXRsZTogdmFsdWVzLnRpdGxlLFxuICAgICAgLy8gICAgIGF1ZGllbmNlOiBgJHt2YWx1ZXMuYXVkaWVuY2UuY29uY2F0KCl9YCxcbiAgICAgIC8vICAgICB0aGVtZTogYCR7dmFsdWVzLnRoZW1lLmNvbmNhdCgpfWAsXG4gICAgICAvLyAgICAgbGV2ZWw6IHZhbHVlcy5sZXZlbFswXS50b0xvd2VyQ2FzZSgpLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSk7XG4gICAgICAvLyBjb25zdCBpbWFnZSA9IGF3YWl0IEF4aW9zLnBvc3QoXCIvaW1hZ2VzL2FpXCIsIHtcbiAgICAgIC8vICAgdXNlcklkOiAxLFxuICAgICAgLy8gICBpbWFnZWRldGFpbHM6IHtcbiAgICAgIC8vICAgICB0aXRsZTogdmFsdWVzLnRpdGxlLFxuICAgICAgLy8gICAgIHNpemU6IHZhbHVlcy5zaXplLFxuICAgICAgLy8gICAgIG5vT2ZJbWFnZXNMOiAxLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBpbWFnZXN1cmw6IHsgdXJsOiB2YWx1ZXMuaW1hZ2VzdXJsIH0sXG4gICAgICAvLyB9KTtcbiAgICAgIC8vIHNldEltYWdlcyhpbWFnZT8uZGF0YT8ubWVzc2FnZT8uaW1hZ2VzdXJsPy51cmwpO1xuICAgICAgLy8gc2V0U3VibWl0dGVkRGF0YSh2YWx1ZXMgYXMgYW55KTtcbiAgICAgIC8vIHNldENvbnRlbnQocmVzPy5kYXRhPy5tZXNzYWdlPy5jb250ZW50KTtcbiAgICAgIHN1Y2Nlc3MoXCJTdWNjZXNzZnVsbHkgQ3JlYXRlZFwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBmYWlsKFwiU3VibWlzc2lvbiBmYWlsZWRcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTI0XCI+XG4gICAgICA8QWlFYm9va0Zvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz5cbiAgICAgIHtzdWJtaXR0ZWREYXRhICYmIGNvbnRlbnQgJiYgKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHRleHQtMnhsXCI+XG4gICAgICAgICAgICBTdWJtaXR0ZWQgZUJvb2tcbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e3N1Ym1pdHRlZERhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICB7aW1hZ2VzPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7a2V5fWB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+VGhlbWU6IHtzdWJtaXR0ZWREYXRhLnRoZW1lfTwvcD5cbiAgICAgICAgICAgIDxwPkF1ZGllbmNlOiB7c3VibWl0dGVkRGF0YS5hdWRpZW5jZX08L3A+XG4gICAgICAgICAgICA8cD5EaWZmaWN1bHR5OiB7c3VibWl0dGVkRGF0YS5sZXZlbH08L3A+XG4gICAgICAgICAgICA8cD5FYm9vazo8L3A+XG4gICAgICAgICAgICA8cD57Y29udGVudCA/IGNvbnRlbnQgOiBcIlNvcnJ5ISBTb21ldGhpbmcgd2VudCB3cm9uZ1wifTwvcD5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFpRWJvb2tGb3JtIiwic3VjY2VzcyIsImZhaWwiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiSW1hZ2UiLCJBaUVib29rUGFnZSIsInN1Ym1pdHRlZERhdGEiLCJzZXRTdWJtaXR0ZWREYXRhIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwibGV2ZWwiLCJhdWRpZW5jZSIsImxlbmd0aCIsInRoZW1lIiwiZXJyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaDMiLCJ0aXRsZSIsImRpdiIsIm1hcCIsIml0ZW0iLCJrZXkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ebook/page.tsx\n"));

/***/ })

});