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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _auth_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/global.service */ "./src/app/auth/global.service.ts");





var EmailHttpService = /** @class */ (function () {
    function EmailHttpService(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/input-systems/';
    }
    EmailHttpService.prototype.getEmailTemplates = function (inputSystemId) {
        return this.http.get(this.baseUrl + inputSystemId + '/email-templates', this.globalService.getAuthHeader());
    };
    EmailHttpService.prototype.getAllAvailableProviders = function () {
        return this.http.get(this.baseUrl + 'email-providers', this.globalService.getAuthHeader());
    };
    EmailHttpService.prototype.postNewTemplate = function (newEmailTemplate, inputSystemId) {
        console.log(newEmailTemplate);
        return this.http.post(this.baseUrl + inputSystemId + '/email-templates', newEmailTemplate, this.globalService.getAuthHeader());
    };
    EmailHttpService.prototype.deleteEmailTemplate = function (emailTemplateId, inputSystemName) {
        return this.http.delete(this.baseUrl + inputSystemName + '/email-templates/' + emailTemplateId, this.globalService.getAuthHeader());
    };
    EmailHttpService.prototype.updateEmailTemplate = function (updateTemplate, inputSystemName, emailTemplateId) {
        return this.http.put(this.baseUrl + inputSystemName + '/email-templates/' + emailTemplateId, updateTemplate, this.globalService.getAuthHeader());
    };
    EmailHttpService.prototype.postEmail = function (templateId, inputSystemId, postProperties) {
        return this.http.post(this.baseUrl + inputSystemId + '/email-templates/' + templateId + '/post', postProperties, this.globalService.getAuthHeader());
    };
    EmailHttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
    ]; };
    EmailHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], EmailHttpService);
    return EmailHttpService;
}());



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
var InputSystem = /** @class */ (function () {
    function InputSystem(inputSystemName) {
        this.name = inputSystemName;
    }
    InputSystem.ctorParameters = function () { return [
        { type: String }
    ]; };
    return InputSystem;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _input_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-system */ "./src/app/views/input-system/input-system.ts");
/* harmony import */ var _auth_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/global.service */ "./src/app/auth/global.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");






var NosyHttpService = /** @class */ (function () {
    function NosyHttpService(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].backendUrl;
    }
    NosyHttpService.prototype.getInputSystems = function () {
        // const headers: HttpHeaders = new HttpHeaders({
        //    'Authorization' : this.keycloakService.getToken().toString()
        //
        //     });
        return this.http.get(this.baseUrl + '/input-systems', this.globalService.getAuthHeader());
    };
    NosyHttpService.prototype.postInputSystemName = function (inputSystemName) {
        var inputSystem = new _input_system__WEBPACK_IMPORTED_MODULE_3__["InputSystem"](inputSystemName);
        // noinspection JSAnnotator
        delete inputSystem.id;
        return this.http.post(this.baseUrl + '/input-systems', inputSystem, this.globalService.getAuthHeader());
    };
    NosyHttpService.prototype.deleteExistingInputSystem = function (inputSystem) {
        return this.http.delete(this.baseUrl + '/input-systems/' + inputSystem, this.globalService.getAuthHeader());
    };
    NosyHttpService.prototype.updateExistingInputSystem = function (inputSystem) {
        var urlAdder = inputSystem.id;
        return this.http.put(this.baseUrl + '/input-systems/' + urlAdder, inputSystem, this.globalService.getAuthHeader());
    };
    NosyHttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _auth_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
    ]; };
    NosyHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], NosyHttpService);
    return NosyHttpService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map