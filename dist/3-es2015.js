(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/components/email/email.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/components/email/email.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <form (ngSubmit)=\"updateExistingTemplateFirstForm(a)\" #a=\"ngForm\">\n\n          <div class=\"card-header\">\n            <strong>Email Template</strong>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n\n                <div class=\"form-group\">\n                  <label>Input System Name</label>\n\n\n                  <ng-select [(items)]=\"inputSystems\"\n                             bindLabel=\"name\"\n                             bindValue=\"id\"\n                             name=\"inputSystemNameNg\"\n                             [(ngModel)]=\"selectedInputSystemId\"\n                             (change)=\"onChangeInputSystemFirstForm()\"\n                              (clear)=\"onClearInputSystem()\">\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <!--<div class=\"row\">\n              <div class=\"col-sm-12\">\n\n                <div class=\"form-group\">\n                  <label for=\"inputSystemName\">Input System Name</label>\n                  <select id=\"inputSystemName\" #inputSystemName name=\"inputSystemName\" class=\"form-control\"\n                          (change)=\"onChangeInputSystemFirstForm($event.target.value)\" #selectedInputSystem ngModel>\n                    <option [hidden]=\"isSelectedInputSystem\" value=\"\">Please choose One</option>\n\n                    <option *ngFor=\"let inputSystem of inputSystems\" #updateSystemName>\n                      {{ inputSystem.inputSystemName }}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>&lt;!&ndash;/.row&ndash;&gt;\n            -->\n            <div>\n\n            </div>\n            <div [hidden]=\"!isSelectedInputSystem\">\n\n             <!-- <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"dropdownEmailTemplateName\">Email Templates</label>\n                    <select id=\"dropdownEmailTemplateName\" #dropdownEmailTemplateName name=\"dropdownEmailTemplateName\"\n                            class=\"form-control\"\n                            (change)=\"onChangeEmailTemplateFirstForm($event.target.value, selectedInputSystem.value)\"\n                            #selectedEmailTemplateName ngModel>\n                      <option [hidden]=\"isSelectedEmailTemplate\" value=\"\">Please choose One</option>\n\n                      <option *ngFor=\"let emailTemplate of emailTemplates\" #selectedEmailTemplateOption>\n                        {{emailTemplate.emailTemplateName }}\n\n\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>/.row-->\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label>Email Templates</label>\n                    <ng-select  #chosenuser [(items)]=\"emailTemplates\"\n\n                                bindLabel=\"name\"\n                               bindValue=\"id\"\n                               name=\"inputSystemNameNg\"\n                               [(ngModel)]=\"selectedEmailTemplateId\"\n                               (change)=\"onChangeEmailTemplateFirstForm($event)\"\n                                (clear)=\"onClearEmailTemplate()\">\n\n                    </ng-select>\n                  <!--  <select id=\"dropdownEmailTemplateName\" #dropdownEmailTemplateName name=\"dropdownEmailTemplateName\"\n                            class=\"form-control\"\n                            (change)=\"onChangeEmailTemplateFirstForm($event.target.value, selectedInputSystem.value)\"\n                            #selectedEmailTemplateName ngModel>\n                      <option [hidden]=\"isSelectedEmailTemplate\" value=\"\">Please choose One</option>\n\n                      <option *ngFor=\"let emailTemplate of emailTemplates\" #selectedEmailTemplateOption>\n                        {{emailTemplate.emailTemplateName }}\n\n\n                      </option>\n                    </select>-->\n                  </div>\n                </div>\n              </div>\n\n\n\n            </div>\n\n            <div *ngIf=\"isSelectedEmailTemplate\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"emailTemplateName\">Email Template Name</label>\n                    <input type=\"text\" class=\"form-control\"\n                           id=\"emailTemplateName\" name=\"emailTemplateName\"\n                           ngModel=\"{{selectedEmailTemplate.name}}\">\n                  </div>\n\n                </div>\n              </div><!--/.row-->\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"fromAddress\">Email From Address</label>\n                    <input type=\"text\" class=\"form-control\"\n                           id=\"fromAddress\" name=\"fromAddress\"\n                           ngModel=\"{{selectedEmailTemplate.fromAddress}}\">\n                  </div>\n\n                </div>\n              </div><!--/.row-->\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"emailFromProvider\">From Provider</label>\n                    <select id=\"emailFromProvider\" name=\"emailFromProvider\"\n                            class=\"form-control\" [(ngModel)]=\"selectedEmailTemplate.fromProvider\" required>\n                      <option *ngFor=\"let provider of availableProviders\"\n                              [ngValue]=\"provider\" #updateSystemName\n                      >\n                        {{provider }}\n                      </option>\n                    </select>\n\n                  </div>\n                </div>\n              </div><!--/.row-->\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"emailTemplateTo1\">Email To</label>\n                    <textarea type=\"text\" class=\"form-control\" #emailTemplateTo1\n                              id=\"emailTemplateTo1\" name=\"emailTemplateTo1\"\n                              ngModel=\"{{selectedEmailTemplate.to}}\" required>\n                  </textarea>\n                  </div>\n\n                </div>\n              </div><!--/.row-->\n\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"emailTemplateCc1\">Email CC</label>\n                    <textarea type=\"text\" class=\"form-control\" #emailTemplateCc1\n                              id=\"emailTemplateCc1\" name=\"emailTemplateCc1\"\n                              ngModel=\"{{selectedEmailTemplate.cc}}\">\n                  </textarea>\n                  </div>\n\n                </div>\n              </div><!--/.row-->\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"subject\">Subject</label>\n                    <input type=\"text\" class=\"form-control\"\n                           id=\"subject\" name=\"subject\"\n                           ngModel=\"{{selectedEmailTemplate.subject}}\" required>\n                  </div>\n\n                </div>\n              </div><!--/.row-->\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label for=\"text\">Email Text</label>\n                    <textarea type=\"text\" class=\"form-control\"\n                              id=\"text\" name=\"text\"\n                              ngModel=\"{{selectedEmailTemplate.text}}\" required>\n                    </textarea>\n                  </div>\n\n                </div>\n              </div><!--/.row-->\n\n            </div>\n            <div [hidden]=\"!isOperationsUpdateAndDelete\"\n                 [style.color]=\"colourOperationsUpdateAndDelete\">{{operationsUpdateAndDelete}}\n            </div>\n\n          </div>\n\n          <div class=\"card-footer\">\n            <button type=\"submit\" [disabled]=\"!a.valid\" [disabled]=\"!isSelectedEmailTemplate\"\n                    class=\"btn btn-sm btn-success\"\n            ><i class=\"fa fa-dot-circle-o\"></i>\n              Update\n            </button>\n            <button type=\"button\" [disabled]=\"!isSelectedEmailTemplate\" class=\"btn btn-sm btn-danger\"\n                    (click)=\"deleteExistingTemplate()\"><i\n              class=\"fa fa-dot-circle-o\"></i>\n              Delete\n            </button>\n          </div>\n        </form>\n      </div>\n    </div><!--/.col-->\n\n\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <form (ngSubmit)=\"onAddNewEmailTemplate(f)\" #f=\"ngForm\">\n          <div class=\"card-header\">\n            <strong>New Email Template</strong>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group\">\n              <label>Input System Name*</label>\n              <ng-select [(items)]=\"inputSystems\"\n                         bindLabel=\"name\"\n                         bindValue=\"id\"\n                         name=\"inputSystemNameNg\"\n                         [(ngModel)]=\"inputSystemIdFotTemplateCreationId\"\n                         (change)=\"newTemplateInputSystemOnChange($event)\"\n                         (clear)=\"onClearInputSystem()\"\n                >\n              </ng-select>\n              <!--<select id=\"inputSystemIdFotTemplateCreation\" name=\"inputSystemIdFotTemplateCreation\" class=\"form-control\"\n                      (change)=\"newTemplateInputSystemOnChange($event.target.value)\" ngModel>\n                <option [hidden]=\"isSelectedInputSystemForPost\" value=\"\">Please choose One</option>\n                <option *ngFor=\"let inputSystem of inputSystems; let i = index\" #updateSystemName\n                >\n                  {{ inputSystem.inputSystemName }}\n                </option>\n              </select>\n           --> </div>\n            <div class=\"form-group\">\n              <label for=\"newEmailTemplateName\">Email Template Name*</label>\n              <input type=\"text\" class=\"form-control\" id=\"newEmailTemplateName\" name=\"newEmailTemplateName\" required\n                     ngModel>\n              <span class=\"help-block\"><i>Should be unique for Input System</i></span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"newFromAddress\">Email Provider*</label>\n              <select id=\"newFromProviderId\" name=\"newFromProvider\"\n                      class=\"form-control\"\n\n\n                      ngModel>\n\n                <option *ngFor=\"let provider of availableProviders\"\n                        #newFromProviderOption\n                >\n                  {{provider }}\n                </option>\n              </select> <span class=\"help-block\"><i>Select your email provider</i></span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"newFromAddress\">From Email*</label>\n              <input type=\"email\" class=\"form-control\" id=\"newFromAddress\" name=\"newFromAddress\" ngModel required>\n              <span\n                class=\"help-block\"><i>Domain Should match Provider, if you cannot find your provider select Default</i></span>\n\n            </div>\n            <div class=\"form-group\">\n              <label for=\"newSubject\">Subject*</label>\n              <input type=\"text\" class=\"form-control\" id=\"newSubject\" name=\"newSubject\" required ngModel>\n              <span class=\"help-block\"><i>Email Subject</i></span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"newEmailTo\">Email To*</label>\n              <textarea type=\"text\" class=\"form-control\" id=\"newEmailTo\" name=\"newEmailTo\" required ngModel></textarea>\n              <span class=\"help-block\"><i>List of emails divided by comma</i></span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"newEmailCc\">Email CC</label>\n              <textarea type=\"text\" class=\"form-control\" id=\"newEmailCc\" name=\"newEmailCc\" ngModel></textarea>\n              <span class=\"help-block\"><i>List of emails divided by comma</i></span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"newEmailText\">Email Text*</label>\n              <textarea class=\"form-control\" id=\"newEmailText\" name=\"newEmailText\" required\n                        ngModel></textarea>\n              <span class=\"help-block\"><i>Text for the Email you can use as a #{{'{'}}your_code{{'}'}}# placeholder</i></span>\n\n\n            </div>\n            <div [hidden]=\"!isPostSuccess\" [style.color]=\"colourPostSuccessMessage\">\n              {{postSuccessMessage}}\n            </div>\n\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"!f.valid\"><i\n              class=\"fa fa-dot-circle-o\"></i> Submit\n            </button>\n          </div>\n        </form>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/components/email/email-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/components/email/email-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRoutingModule", function() { return EmailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email.component */ "./src/app/views/components/email/email.component.ts");




const routes = [
    {
        path: '',
        component: _email_component__WEBPACK_IMPORTED_MODULE_3__["EmailComponent"],
        data: {
            title: 'Email'
        }
    }
];
let EmailRoutingModule = class EmailRoutingModule {
};
EmailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmailRoutingModule);



/***/ }),

/***/ "./src/app/views/components/email/email-template.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/components/email/email-template.ts ***!
  \**********************************************************/
/*! exports provided: EmailTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplate", function() { return EmailTemplate; });
class EmailTemplate {
    constructor(emailFromProvider, emailTemplateName, emailTemplateTo, fromAddress, priority, retryPeriod, retryTimes, subject, text) {
        this.fromProvider = emailFromProvider;
        this.name = emailTemplateName;
        this.to = emailTemplateTo;
        this.fromAddress = fromAddress;
        this.priority = priority;
        this.retryPeriod = retryPeriod;
        this.retryTimes = retryTimes;
        this.subject = subject;
        this.text = text;
    }
    setEmailCc(cc) {
        this.cc = cc;
    }
}
EmailTemplate.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Array },
    { type: String },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/views/components/email/email.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/components/email/email.component.ts ***!
  \***********************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input-system/nosy-http.service */ "./src/app/views/input-system/nosy-http.service.ts");
/* harmony import */ var _email_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-http.service */ "./src/app/views/components/email/email-http.service.ts");
/* harmony import */ var _email_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-template */ "./src/app/views/components/email/email-template.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select.js");






let EmailComponent = class EmailComponent {
    constructor(nosyHttpService, emailHttpService) {
        this.nosyHttpService = nosyHttpService;
        this.emailHttpService = emailHttpService;
    }
    ngOnInit() {
        this.nosyHttpService.getInputSystems().subscribe(data => {
            this.inputSystems = data;
        });
        this.emailHttpService.getAllAvailableProviders().subscribe(data => {
            this.availableProviders = data;
        });
    }
    onClearInputSystem() {
        this.isSelectedEmailTemplate = false;
        this.isSelectedInputSystem = false;
    }
    onClearEmailTemplate() {
        this.isSelectedEmailTemplate = false;
    }
    onChangeInputSystemFirstForm() {
        if (this.selectedInputSystemId !== null) {
            this.allFormReset();
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
        this.allFormReset();
        this.selectedEmailTemplate = selectedEmailTemplate;
        this.isSelectedEmailTemplate = true;
    }
    allFormReset() {
        this.secondForm('', '', false);
        this.firstForm('', '', false);
    }
    firstForm(colour, message, isEnabled) {
        this.colourOperationsUpdateAndDelete = colour;
        this.isOperationsUpdateAndDelete = isEnabled;
        this.operationsUpdateAndDelete = message;
    }
    secondForm(colour, message, isEnabled) {
        this.colourPostSuccessMessage = colour;
        this.isPostSuccess = isEnabled;
        this.postSuccessMessage = message;
    }
    updateExistingTemplateFirstForm(form) {
        const formInputSystem = form.value;
        if (formInputSystem.emailTemplateName === '' || formInputSystem.fromAddress === '' ||
            formInputSystem.emailTemplateTo === '' || formInputSystem.emailFromProvider === '' ||
            formInputSystem.text === '' || formInputSystem.subject === '') {
            this.firstForm('red', 'One or more mandatory fields are not specified', true);
        }
        else {
            let emailTemplate;
            const emailTo = formInputSystem.emailTemplateTo1.trim().split(',');
            emailTo.forEach(function (part, index, theArray) {
                theArray[index] = theArray[index].trim();
            });
            emailTemplate = new _email_template__WEBPACK_IMPORTED_MODULE_4__["EmailTemplate"](formInputSystem.emailFromProvider, formInputSystem.emailTemplateName, emailTo, formInputSystem.fromAddress, 0, 0, 0, formInputSystem.subject, formInputSystem.text);
            if (formInputSystem.emailTemplateCc1 !== '') {
                const emailCc = formInputSystem.emailTemplateCc1.trim().split(',');
                emailCc.forEach(function (part, index, theArray) {
                    theArray[index] = theArray[index].trim();
                });
                emailTemplate.setEmailCc(emailCc);
            }
            this.emailHttpService.updateEmailTemplate(emailTemplate, this.selectedInputSystemId, this.selectedEmailTemplateId).subscribe((response) => {
                this.firstForm('green', 'Email Template '
                    + this.selectedEmailTemplate.name + ' updated!', true);
                this.selectedEmailTemplate = response;
                this.emailTemplates.splice(this.emailTemplates.indexOf(this.emailTemplates.find(x => x.id === this.selectedEmailTemplateId)), 1);
                this.emailTemplates = [...this.emailTemplates, response];
            }, err => {
                this.firstForm('red', err.error.message, true);
            });
        }
    }
    deleteExistingTemplate() {
        this.emailHttpService.deleteEmailTemplate(this.selectedEmailTemplateId, this.selectedInputSystemId).subscribe((response) => {
            this.firstForm('green', 'Successfully Deleted ' + this.selectedEmailTemplate.name + 'from the System', true);
            this.emailTemplates.splice(this.emailTemplates.indexOf(this.emailTemplates.find(x => x.id === this.selectedEmailTemplateId)), 1);
            this.emailTemplates = [...this.emailTemplates];
        });
    }
    onAddNewEmailTemplate(form) {
        const newTemplate = form.value;
        if (newTemplate.newFromProvider === '') {
            newTemplate.newFromProvider = 'Default';
        }
        if (newTemplate.inputSystemIdFotTemplateCreation === '' || newTemplate.newEmailTemplateName === '' ||
            newTemplate.newFromProvider === '' || newTemplate.newFromAddress === '' || newTemplate.newSubject === '' ||
            newTemplate.newEmailTo === '' || newTemplate.newEmailText === '') {
            this.secondForm('red', 'One or more mandatory fields are not specified', true);
        }
        else {
            const emailCc = newTemplate.newEmailCc.trim().split(',');
            const emailTo = newTemplate.newEmailTo.trim().split(',');
            let emailTemplate;
            emailTo.forEach(function (part, index, theArray) {
                theArray[index] = theArray[index].trim();
            });
            emailTemplate = new _email_template__WEBPACK_IMPORTED_MODULE_4__["EmailTemplate"](newTemplate.newFromProvider, newTemplate.newEmailTemplateName, emailTo, newTemplate.newFromAddress, 0, 0, 0, newTemplate.newSubject, newTemplate.newEmailText);
            if (newTemplate.newEmailCc !== '') {
                const emailCc = newTemplate.newEmailCc.trim().split(',');
                emailCc.forEach(function (part, index, theArray) {
                    theArray[index] = theArray[index].trim();
                });
                emailTemplate.setEmailCc(emailCc);
            }
            this.emailHttpService.postNewTemplate(emailTemplate, this.inputSystemIdFotTemplateCreationId).subscribe((response) => {
                this.secondForm('green', 'New Template: ' + emailTemplate.name + ' created', true);
            }, err => {
                this.secondForm('red', err.error.message, true);
            });
        }
    }
    newTemplateInputSystemOnChange(newTemplateInputSystemOnChange) {
        this.isSelectedInputSystemForPost = true;
    }
};
EmailComponent.ctorParameters = () => [
    { type: _input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_2__["NosyHttpService"] },
    { type: _email_http_service__WEBPACK_IMPORTED_MODULE_3__["EmailHttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chosenuser', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectComponent"])
], EmailComponent.prototype, "ngSelect", void 0);
EmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email',
        template: __webpack_require__(/*! raw-loader!./email.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/components/email/email.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_2__["NosyHttpService"], _email_http_service__WEBPACK_IMPORTED_MODULE_3__["EmailHttpService"]])
], EmailComponent);



/***/ }),

/***/ "./src/app/views/components/email/email.module.ts":
/*!********************************************************!*\
  !*** ./src/app/views/components/email/email.module.ts ***!
  \********************************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-routing.module */ "./src/app/views/components/email/email-routing.module.ts");
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email.component */ "./src/app/views/components/email/email.component.ts");
/* harmony import */ var _email_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-http.service */ "./src/app/views/components/email/email-http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../input-system/nosy-http.service */ "./src/app/views/input-system/nosy-http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select.js");













let EmailModule = class EmailModule {
};
EmailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _email_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmailRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ],
        providers: [_email_http_service__WEBPACK_IMPORTED_MODULE_6__["EmailHttpService"], _input_system_nosy_http_service__WEBPACK_IMPORTED_MODULE_10__["NosyHttpService"]],
        declarations: [_email_component__WEBPACK_IMPORTED_MODULE_5__["EmailComponent"]]
    })
], EmailModule);



/***/ })

}]);
//# sourceMappingURL=3-es2015.js.map