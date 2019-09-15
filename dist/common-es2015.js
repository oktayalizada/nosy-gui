(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/views/components/email/email-http.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/components/email/email-http.service.ts ***!
  \**************************************************************/
/*! exports provided: EmailHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailHttpService", function() { return EmailHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _auth_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/global.service */ "./src/app/auth/global.service.ts");





let EmailHttpService = class EmailHttpService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/input-systems/';
    }
    getEmailTemplates(inputSystemId) {
        return this.http.get(this.baseUrl + inputSystemId + '/email-templates', this.globalService.getAuthHeader());
    }
    getAllAvailableProviders() {
        return this.http.get(this.baseUrl + 'email-providers', this.globalService.getAuthHeader());
    }
    postNewTemplate(newEmailTemplate, inputSystemId) {
        console.log(newEmailTemplate);
        return this.http.post(this.baseUrl + inputSystemId + '/email-templates', newEmailTemplate, this.globalService.getAuthHeader());
    }
    deleteEmailTemplate(emailTemplateId, inputSystemName) {
        return this.http.delete(this.baseUrl + inputSystemName + '/email-templates/' + emailTemplateId, this.globalService.getAuthHeader());
    }
    updateEmailTemplate(updateTemplate, inputSystemName, emailTemplateId) {
        return this.http.put(this.baseUrl + inputSystemName + '/email-templates/' + emailTemplateId, updateTemplate, this.globalService.getAuthHeader());
    }
    postEmail(templateId, inputSystemId, postProperties) {
        return this.http.post(this.baseUrl + inputSystemId + '/email-templates/' + templateId + '/post', postProperties, this.globalService.getAuthHeader());
    }
};
EmailHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
];
EmailHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
], EmailHttpService);



/***/ }),

/***/ "./src/app/views/input-system/input-system.ts":
/*!****************************************************!*\
  !*** ./src/app/views/input-system/input-system.ts ***!
  \****************************************************/
/*! exports provided: InputSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSystem", function() { return InputSystem; });
class InputSystem {
    constructor(inputSystemName) {
        this.name = inputSystemName;
    }
}
InputSystem.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/views/input-system/nosy-http.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/input-system/nosy-http.service.ts ***!
  \*********************************************************/
/*! exports provided: NosyHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosyHttpService", function() { return NosyHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _input_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-system */ "./src/app/views/input-system/input-system.ts");
/* harmony import */ var _auth_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/global.service */ "./src/app/auth/global.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");






let NosyHttpService = class NosyHttpService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].backendUrl;
    }
    getInputSystems() {
        // const headers: HttpHeaders = new HttpHeaders({
        //    'Authorization' : this.keycloakService.getToken().toString()
        //
        //     });
        return this.http.get(this.baseUrl + '/input-systems', this.globalService.getAuthHeader());
    }
    postInputSystemName(inputSystemName) {
        const inputSystem = new _input_system__WEBPACK_IMPORTED_MODULE_3__["InputSystem"](inputSystemName);
        // noinspection JSAnnotator
        delete inputSystem.id;
        return this.http.post(this.baseUrl + '/input-systems', inputSystem, this.globalService.getAuthHeader());
    }
    deleteExistingInputSystem(inputSystem) {
        return this.http.delete(this.baseUrl + '/input-systems/' + inputSystem, this.globalService.getAuthHeader());
    }
    updateExistingInputSystem(inputSystem) {
        const urlAdder = inputSystem.id;
        return this.http.put(this.baseUrl + '/input-systems/' + urlAdder, inputSystem, this.globalService.getAuthHeader());
    }
};
NosyHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
];
NosyHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
], NosyHttpService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map