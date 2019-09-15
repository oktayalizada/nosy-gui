(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/components/manual-email-sender/manual-email-sender.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/components/manual-email-sender/manual-email-sender.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <form (ngSubmit)=\"sendEmail()\" #a=\"ngForm\">\n\n          <div class=\"card-header\">\n            <strong>Email Template</strong>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n\n                <div class=\"form-group\">\n                  <label>Input System Name</label>\n\n\n                  <ng-select [(items)]=\"inputSystems\"\n                             bindLabel=\"inputSystemName\"\n                             bindValue=\"inputSystemId\"\n                             name=\"inputSystemNameNg\"\n                             [(ngModel)]=\"selectedInputSystemId\"\n                             (change)=\"onChangeInputSystemFirstForm($event)\"\n                             (clear)=\"onClearInputSystem()\">\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <!--<div class=\"row\">\n              <div class=\"col-sm-12\">\n\n                <div class=\"form-group\">\n                  <label for=\"inputSystemName\">Input System Name</label>\n                  <select id=\"inputSystemName\" #inputSystemName name=\"inputSystemName\" class=\"form-control\"\n                          (change)=\"onChangeInputSystemFirstForm($event.target.value)\" #selectedInputSystem ngModel>\n                    <option [hidden]=\"isSelectedInputSystem\" value=\"\">Please choose One</option>\n\n                    <option *ngFor=\"let inputSystem of inputSystems\" #updateSystemName>\n                      {{ inputSystem.inputSystemName }}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>&lt;!&ndash;/.row&ndash;&gt;\n            -->\n            <div>\n\n            </div>\n            <div [hidden]=\"!isSelectedInputSystem\">\n\n              <!-- <div class=\"row\">\n                 <div class=\"col-sm-12\">\n                   <div class=\"form-group\">\n                     <label for=\"dropdownEmailTemplateName\">Email Templates</label>\n                     <select id=\"dropdownEmailTemplateName\" #dropdownEmailTemplateName name=\"dropdownEmailTemplateName\"\n                             class=\"form-control\"\n                             (change)=\"onChangeEmailTemplateFirstForm($event.target.value, selectedInputSystem.value)\"\n                             #selectedEmailTemplateName ngModel>\n                       <option [hidden]=\"isSelectedEmailTemplate\" value=\"\">Please choose One</option>\n\n                       <option *ngFor=\"let emailTemplate of emailTemplates\" #selectedEmailTemplateOption>\n                         {{emailTemplate.emailTemplateName }}\n\n\n                       </option>\n                     </select>\n                   </div>\n                 </div>\n               </div>/.row-->\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label>Email Templates</label>\n                    <ng-select  #chosenuser [(items)]=\"emailTemplates\"\n\n                                bindLabel=\"emailTemplateName\"\n                                bindValue=\"emailTemplateId\"\n                                name=\"inputSystemNameNg\"\n                                [(ngModel)]=\"selectedEmailTemplateId\"\n                                (change)=\"onChangeEmailTemplateFirstForm($event)\"\n                                (clear)=\"onClearEmailTemplate()\">\n\n                    </ng-select>\n                    <!--  <select id=\"dropdownEmailTemplateName\" #dropdownEmailTemplateName name=\"dropdownEmailTemplateName\"\n                              class=\"form-control\"\n                              (change)=\"onChangeEmailTemplateFirstForm($event.target.value, selectedInputSystem.value)\"\n                              #selectedEmailTemplateName ngModel>\n                        <option [hidden]=\"isSelectedEmailTemplate\" value=\"\">Please choose One</option>\n\n                        <option *ngFor=\"let emailTemplate of emailTemplates\" #selectedEmailTemplateOption>\n                          {{emailTemplate.emailTemplateName }}\n\n\n                        </option>\n                      </select>-->\n                  </div>\n                </div>\n              </div>\n\n\n\n            </div>\n            <div *ngIf=\"isSelectedEmailTemplate\">\n              <form [formGroup]=\"mailSender\">\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input id=\"username\" type=\"text\" class=\"form-control\"\n                           formControlName=\"username\">\n                  </div>\n\n                </div>\n              </div><!--/.row-->\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" id=\"password\" class=\"form-control\"\n                           formControlName=\"password\">\n                  </div>\n\n                </div>\n              </div><!--/.row-->\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\" formArrayName=\"placeholders\">\n\n                    <label>Placeholder</label>\n\n\n                    <div class=\"row\" *ngFor=\"let place of mailSender.get('placeholders').controls;\n                    let i = index\"\n                      [formGroupName]=\"i\"\n                      style=\"margin-top: 10px;\">\n                        <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"form-control\"\n                               id=\"placeholderName\"\n                                placeholder=\"name\" formControlName=\"name\" >\n                        </div>\n                        <div class=\"col-sm-6\">\n\n                        <input type=\"text\" class=\"form-control\"\n                               id=\"\" name=\"value\"\n                                placeholder=\"value\"  formControlName=\"value\">\n                        </div>\n                      </div>\n                      <hr>\n                    <button type=\"button\" (click)=\"addPlaceHolder()\"\n                            class=\"btn btn-sm btn-success\"\n                    ><i class=\"fa fa-dot-circle-o\"></i>\n                      Add Placeholder\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-sm btn-danger\"\n                      (click)=\"onDeleteIngredient()\"><i class=\"fa fa-dot-circle-o\"></i>Remove Placeholder</button>\n\n                  </div>\n                </div>\n              </div><!--/.row-->\n              </form>\n            </div>\n            <div [hidden]=\"!isOperationsSend\"\n                 [style.color]=\"colourOperationsSend\">{{operationsSend}}\n            </div>\n\n          </div>\n\n          <div class=\"card-footer\">\n            <button type=\"submit\" [disabled]=\"!a.valid\" [disabled]=\"!isSelectedEmailTemplate\"\n                    class=\"btn btn-sm btn-success\"\n            ><i class=\"fa fa-dot-circle-o\"></i>\n              Send Email\n            </button>\n\n          </div>\n        </form>\n      </div>\n    </div><!--/.col-->\n\n\n  </div><!--/.row-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/components/manual-email-sender/manual-email-sender-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/components/manual-email-sender/manual-email-sender-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ManualEmailSenderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualEmailSenderRoutingModule", function() { return ManualEmailSenderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _manual_email_sender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manual-email-sender.component */ "./src/app/views/components/manual-email-sender/manual-email-sender.component.ts");




const routes = [
    {
        path: '',
        component: _manual_email_sender_component__WEBPACK_IMPORTED_MODULE_3__["ManualEmailSenderComponent"],
        data: {
            title: 'Manual Email Sender'
        }
    }
];
let ManualEmailSenderRoutingModule = class ManualEmailSenderRoutingModule {
};
ManualEmailSenderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManualEmailSenderRoutingModule);



/***/ }),

/***/ "./src/app/views/components/manual-email-sender/manual-email-sender.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/components/manual-email-sender/manual-email-sender.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbXBvbmVudHMvbWFudWFsLWVtYWlsLXNlbmRlci9tYW51YWwtZW1haWwtc2VuZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/components/manual-email-sender/manual-email-sender.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/components/manual-email-sender/manual-email-sender.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ManualEmailSenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualEmailSenderComponent", function() { return ManualEmailSenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input-system/nosy-http.service */ "./src/app/views/input-system/nosy-http.service.ts");
/* harmony import */ var _email_email_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email/email-http.service */ "./src/app/views/components/email/email-http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select.js");






let ManualEmailSenderComponent = class ManualEmailSenderComponent {
    constructor(nosyHttpService, emailHttpService) {
        this.nosyHttpService = nosyHttpService;
        this.emailHttpService = emailHttpService;
    }
    ngOnInit() {
        this.firstFormReset();
        this.mailSender = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'placeholders': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
        });
        this.nosyHttpService.getInputSystems().subscribe(data => {
            this.inputSystems = data;
        });
        this.emailHttpService.getAllAvailableProviders().subscribe(data => {
            this.availableProviders = data;
        });
    }
    onChangeInputSystemFirstForm(event) {
        if (this.selectedInputSystemId !== null) {
            this.firstFormReset();
            this.ngSelect.clearModel();
            this.isSelectedInputSystem = false;
            this.emailTemplates = [];
            this.isSelectedEmailTemplate = false;
            this.emailHttpService.getEmailTemplates(this.selectedInputSystemId).subscribe(data => {
                this.emailTemplates = data;
                if (this.emailTemplates.length > 0) {
                    this.isSelectedInputSystem = true;
                    this.isSelectedEmailTemplate = false;
                }
            });
        }
    }
    onChangeEmailTemplateFirstForm(selectedEmailTemplate) {
        this.firstFormReset();
        this.selectedEmailTemplate = selectedEmailTemplate;
        this.isSelectedEmailTemplate = true;
    }
    onClearInputSystem() {
        this.isSelectedEmailTemplate = false;
        this.isSelectedInputSystem = false;
    }
    onClearEmailTemplate() {
        this.isSelectedEmailTemplate = false;
    }
    firstForm(colour, message, isEnabled) {
        this.colourOperationsSend = colour;
        this.isOperationsSend = isEnabled;
        this.operationsSend = message;
    }
    firstFormReset() {
        this.firstForm('', '', false);
    }
    sendEmail() {
        this.firstFormReset();
        this.emailHttpService.postEmail(this.selectedEmailTemplateId, this.selectedInputSystemId, this.mailSender.value).subscribe(data => {
            this.firstForm('green', 'Successfully Sent Email', true);
        }, err => {
            this.firstForm('red', err.error, true);
        });
    }
    addPlaceHolder() {
        this.firstFormReset();
        this.mailSender.get('placeholders').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'value': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        }));
    }
    onDeleteIngredient(index) {
        this.mailSender.get('placeholders').removeAt(-1);
    }
};
ManualEmailSenderComponent.ctorParameters = () => [
    { type: _input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_2__["NosyHttpService"] },
    { type: _email_email_http_service__WEBPACK_IMPORTED_MODULE_3__["EmailHttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chosenuser', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectComponent"])
], ManualEmailSenderComponent.prototype, "ngSelect", void 0);
ManualEmailSenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manual-email-sender',
        template: __webpack_require__(/*! raw-loader!./manual-email-sender.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/components/manual-email-sender/manual-email-sender.component.html"),
        styles: [__webpack_require__(/*! ./manual-email-sender.component.scss */ "./src/app/views/components/manual-email-sender/manual-email-sender.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_2__["NosyHttpService"], _email_email_http_service__WEBPACK_IMPORTED_MODULE_3__["EmailHttpService"]])
], ManualEmailSenderComponent);



/***/ }),

/***/ "./src/app/views/components/manual-email-sender/manual-email-sender.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/components/manual-email-sender/manual-email-sender.module.ts ***!
  \************************************************************************************/
/*! exports provided: ManualEmailSenderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualEmailSenderModule", function() { return ManualEmailSenderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../input-system/nosy-http.service */ "./src/app/views/input-system/nosy-http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _manual_email_sender_manual_email_sender_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manual-email-sender/manual-email-sender.component */ "./src/app/views/components/manual-email-sender/manual-email-sender.component.ts");
/* harmony import */ var _email_email_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../email/email-http.service */ "./src/app/views/components/email/email-http.service.ts");
/* harmony import */ var _manual_email_sender_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manual-email-sender-routing.module */ "./src/app/views/components/manual-email-sender/manual-email-sender-routing.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select.js");













let ManualEmailSenderModule = class ManualEmailSenderModule {
};
ManualEmailSenderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _manual_email_sender_routing_module__WEBPACK_IMPORTED_MODULE_11__["ManualEmailSenderRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"]
        ],
        providers: [_email_email_http_service__WEBPACK_IMPORTED_MODULE_10__["EmailHttpService"], _input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_7__["NosyHttpService"]],
        declarations: [_manual_email_sender_manual_email_sender_component__WEBPACK_IMPORTED_MODULE_9__["ManualEmailSenderComponent"]]
    })
], ManualEmailSenderModule);



/***/ })

}]);
//# sourceMappingURL=4-es2015.js.map