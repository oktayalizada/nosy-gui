(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/input-system/input-system.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/input-system/input-system.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <form (ngSubmit)=\"updateExistingSystem(a)\" #a=\"ngForm\">\n\n        <div class=\"card-header\">\n          <strong>Input Systems</strong>\n        </div>\n        <div class=\"card-body\">\n\n\n          <div class=\"form-group row\">\n\n            <div class=\"col-sm-12\">\n\n              <div class=\"form-group row\">\n                <div class=\"col-md-12\">\n                  <label>Input System Name</label>\n\n                  <ng-select #inputSystemNgSelect [(items)]=\"inputSystems\"\n                             bindLabel=\"name\"\n                             bindValue=\"id\"\n                             name=\"inputSystemNameNg\"\n                             [(ngModel)]=\"selectedInputSystemId\"\n                             (change)=\"onChange($event)\"\n                             (clear)=\"onClear()\">\n                  </ng-select>\n                </div>\n\n              </div>\n\n            </div>\n\n          </div><!--/.row-->\n\n\n\n\n<!--\n\n            <div class=\"form-group row\">\n\n              <div class=\"col-sm-12\">\n\n                <div class=\"form-group row\">\n                  <div class=\"col-md-12\">\n                    <label for=\"firstFormSelectDropdownInputSystem\">Input System Name</label>\n\n                    <select id=\"firstFormSelectDropdownInputSystem\" #firstFormSelectDropdownInputSystem\n                            name=\"firstFormSelectDropdownInputSystem\" class=\"form-control\"\n                            (change)=\"onChange($event.target.value)\">\n                      <option [hidden]=\"firstFormEnable\" value=\"\">Please choose One</option>\n\n                      <option *ngFor=\"let inputSystem of inputSystems\" #updateSystemName>\n                        {{ inputSystem.inputSystemName }}\n                      </option>\n                    </select>\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>/.row-->\n            <div *ngIf=\"firstFormEnable\">\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"updateExistingInputSystemName\">Input System Name</label>\n                    <input type=\"text\" class=\"form-control\" #updateExistingInputSystemName\n                           id=\"updateExistingInputSystemName\" name=\"updateExistingInputSystemName\"\n                           ngModel=\"{{firstFormUpdatableInputSystem.name}}\">\n\n                  </div>\n                </div>\n              </div><!--/.row-->\n            </div>\n          <div [hidden]=\"!isOperationsUpdateAndDelete\" [style.color]=\"colourOperationsUpdateAndDelete\">{{operationsUpdateAndDelete}}</div>\n\n        </div>\n\n\n        <div class=\"card-footer\">\n          <button type=\"submit\" [disabled]=\"!firstFormEnable\" class=\"btn btn-sm btn-success\"><i class=\"fa fa-dot-circle-o\"></i>\n            Update\n          </button>\n          <button type=\"button\" [disabled]=\"!firstFormEnable\" class=\"btn btn-sm btn-danger\"\n                  (click)=\"deleteExistingSystem()\"><i class=\"fa fa-dot-circle-o\"></i>\n            Delete\n          </button>\n        </div>\n        </form>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong> New Input System</strong>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"newInputSystemName\">Input System Name</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"newInputSystemName\" #newInputSystemName name=\"newInputSystemName\" class=\"form-control\"\n                       placeholder=\"New Input System Name\">\n                <span class=\"help-block\"><i>Should be unique</i></span>\n\n              </div>\n            </div>\n          <div [hidden]=\"!isPostSuccess\" [style.color]=\"colourPostSuccessMessage\">{{postSuccessMessage}}</div>\n\n        </div>\n        <div class=\"card-footer\">\n\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"newInputSystem(newInputSystemName.value)\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div><!--/.col-->\n    </div><!--/.row-->\n\n    <!--/.row-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/input-system/input-system-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/input-system/input-system-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InputSystemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSystemRoutingModule", function() { return InputSystemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _input_system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-system.component */ "./src/app/views/input-system/input-system.component.ts");




var routes = [
    {
        path: '',
        component: _input_system_component__WEBPACK_IMPORTED_MODULE_3__["InputSystemComponent"],
        data: {
            title: 'Input System'
        }
    }
];
var InputSystemRoutingModule = /** @class */ (function () {
    function InputSystemRoutingModule() {
    }
    InputSystemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InputSystemRoutingModule);
    return InputSystemRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/input-system/input-system.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/input-system/input-system.component.ts ***!
  \**************************************************************/
/*! exports provided: InputSystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSystemComponent", function() { return InputSystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nosy_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nosy-http.service */ "./src/app/views/input-system/nosy-http.service.ts");



var InputSystemComponent = /** @class */ (function () {
    function InputSystemComponent(nosyHttpService) {
        this.nosyHttpService = nosyHttpService;
    }
    InputSystemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nosyHttpService.getInputSystems().subscribe(function (data) {
            _this.inputSystems = data;
        });
    };
    InputSystemComponent.prototype.onChange = function (inputSystemName) {
        this.allFormReset();
        this.firstFormEnable = true;
        this.firstFormUpdatableInputSystem = inputSystemName;
    };
    InputSystemComponent.prototype.firstForm = function (colour, message, isEnabled) {
        this.colourOperationsUpdateAndDelete = colour;
        this.isOperationsUpdateAndDelete = isEnabled;
        this.operationsUpdateAndDelete = message;
    };
    InputSystemComponent.prototype.secondForm = function (colour, message, isEnabled) {
        this.colourPostSuccessMessage = colour;
        this.isPostSuccess = isEnabled;
        this.postSuccessMessage = message;
    };
    InputSystemComponent.prototype.onClear = function () {
        this.firstFormEnable = false;
    };
    InputSystemComponent.prototype.updateExistingSystem = function (updatedForm) {
        var _this = this;
        this.allFormReset();
        updatedForm = updatedForm.value;
        if (updatedForm['updateExistingInputSystemName'] === null || updatedForm['updateExistingInputSystemName'] === '') {
            this.firstForm('red', 'System Name cannot be null or empty', true);
        }
        else {
            this.firstForm('', '', false);
            var inputSystem = {
                id: this.selectedInputSystemId,
                name: updatedForm['updateExistingInputSystemName'],
                emailTemplate: null
            };
            this.nosyHttpService.updateExistingInputSystem(inputSystem).subscribe(function (response) {
                _this.inputSystems.find(function (x) { return x.id === response.id; }).name = response.name;
                _this.firstForm('green', 'Successfully updated input system name to' + updatedForm['updateExistingInputSystemName'], true);
                _this.inputSystems = _this.inputSystems.slice();
            }, function (err) {
                _this.firstForm('red', err.error.message, true);
            });
        }
    };
    InputSystemComponent.prototype.deleteExistingSystem = function () {
        var _this = this;
        this.allFormReset();
        this.nosyHttpService.deleteExistingInputSystem(this.selectedInputSystemId).subscribe(function (response) {
            _this.firstForm('green', 'Input System ' + _this.firstFormUpdatableInputSystem.name + ' deleted!', true);
            _this.inputSystems.splice(_this.inputSystems.indexOf(_this.inputSystems.find(function (x) { return x.id === _this.selectedInputSystemId; })), 1);
            _this.inputSystems = _this.inputSystems.slice();
        });
    };
    InputSystemComponent.prototype.newInputSystem = function (inputSystemName) {
        var _this = this;
        if (inputSystemName === null || inputSystemName === '') {
            this.secondForm('red', 'System Name cannot be null or empty', true);
        }
        else {
            this.allFormReset();
            this.nosyHttpService.postInputSystemName(inputSystemName).subscribe(function (response) {
                _this.secondForm('green', 'successfully created Input System ' + inputSystemName, true);
                _this.inputSystems = _this.inputSystems.concat([response]);
            }, function (err) {
                _this.secondForm('red', err.error.message, true);
            });
        }
    };
    InputSystemComponent.prototype.allFormReset = function () {
        this.secondForm('', '', false);
        this.firstForm('', '', false);
    };
    InputSystemComponent.ctorParameters = function () { return [
        { type: _nosy_http_service__WEBPACK_IMPORTED_MODULE_2__["NosyHttpService"] }
    ]; };
    InputSystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-system',
            template: __webpack_require__(/*! raw-loader!./input-system.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/input-system/input-system.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nosy_http_service__WEBPACK_IMPORTED_MODULE_2__["NosyHttpService"]])
    ], InputSystemComponent);
    return InputSystemComponent;
}());



/***/ }),

/***/ "./src/app/views/input-system/input-system.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/input-system/input-system.module.ts ***!
  \***********************************************************/
/*! exports provided: InputSystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSystemModule", function() { return InputSystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _input_system_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-system.component */ "./src/app/views/input-system/input-system.component.ts");
/* harmony import */ var _input_system_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-system-routing.module */ "./src/app/views/input-system/input-system-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _nosy_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nosy-http.service */ "./src/app/views/input-system/nosy-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var InputSystemModule = /** @class */ (function () {
    function InputSystemModule() {
    }
    InputSystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _input_system_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputSystemRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [_nosy_http_service__WEBPACK_IMPORTED_MODULE_8__["NosyHttpService"]],
            declarations: [_input_system_component__WEBPACK_IMPORTED_MODULE_4__["InputSystemComponent"]]
        })
    ], InputSystemModule);
    return InputSystemModule;
}());



/***/ })

}]);
//# sourceMappingURL=8-es5.js.map