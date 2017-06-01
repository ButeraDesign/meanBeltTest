webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 137;


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(148);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(204),
        styles: [__webpack_require__(202)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communicate_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_create_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__allanswers_allanswers_component__ = __webpack_require__(485);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__["a" /* AnswerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__allanswers_allanswers_component__["a" /* AllanswersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_5__communicate_service__["a" /* CommunicateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    HttpService.prototype.createThought = function (newItem) {
        var _this = this;
        console.log('create Thought');
        console.log(newItem);
        this._http.post('/createItem', newItem).map(function (data) { return data.json(); }).toPromise()
            .then(function (data) {
            console.log('IN Redir to dashboard');
            _this._router.navigate(['/dashboard']);
        })
            .catch(function (err) { console.log(err); });
    };
    HttpService.prototype.editStar = function (star, id) {
        var _this = this;
        console.log('update Star');
        this._http.post('/editItem/' + id, star).map(function (data) { return data.json(); }).toPromise()
            .then(function (data) {
            console.log('IN Redir to dashboard');
            _this._router.navigate(['/dashboard']);
        })
            .catch(function (err) { console.log(err); });
    };
    HttpService.prototype.createAnswer = function (answer, id) {
        var _this = this;
        console.log('create answer');
        this._http.post('/addAnswer/' + id, answer).map(function (data) { return data.json(); }).toPromise()
            .then(function (data) {
            console.log('IN Redir to dashboard');
            _this._router.navigate(['/dashboard']);
        })
            .catch(function (err) { console.log(err); });
    };
    HttpService.prototype.updateStars = function (answer, id) {
        var _this = this;
        console.log('update Star');
        this._http.post('/editItem/' + id, answer).map(function (data) { return data.json(); }).toPromise()
            .then(function (data) {
            console.log('IN Redir to dashboard');
            _this._router.navigate(['/dashboard']);
        })
            .catch(function (err) { console.log(err); });
    };
    HttpService.prototype.getStar = function (id) {
        console.log("id", id); //id is a string
        return this._http.get('/getItem/' + id).map(function (data) { return data.json(); }).toPromise();
    };
    //one item with populate
    HttpService.prototype.oneAnswer = function (id) {
        return this._http.get('/oneItem/' + id).map(function (data) { return data.json(); }).toPromise();
    };
    //all items with populate
    HttpService.prototype.allThoughts = function () {
        return this._http.get('/allItems').map(function (data) { return data.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer_answer_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_create_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(476);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'answer/:id', component: __WEBPACK_IMPORTED_MODULE_2__answer_answer_component__["a" /* AnswerComponent */] },
    //{ path: 'home', component: HomeComponent },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_3__create_create_component__["a" /* CreateComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<div class=\"col-md-6 col-md-offset-2 well\">\n<form (submit)=\"onSubmit()\">\n\n  Your Name:\n  <input type=\"text\" name=\"yourName\"\n  required\n  minlength=\"2\"\n  maxlength=\"24\"\n  [(ngModel)]=\"users.yourName\"\n  #yourName='ngModel' class=\"form-control\"><br>\n\n  <div *ngIf=\" (yourName.errors && ( yourName.dirty || yourName.touched))\"\n     class=\"alert alert-danger\">\n    <div [hidden]=\"!yourName.errors.required\">\n      First Name is required\n    </div>\n    <div [hidden]=\"!yourName.errors.minlength\">\n      First Name must be at least 4 characters long.\n    </div>\n    <div [hidden]=\"!yourName.errors.maxlength\">\n      First Name cannot be more than 24 characters long.\n    </div>\n </div>\n\n\n  <input type=\"submit\" value=\"Login\">\n</form>\n\n</div>\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communicate_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    //oneStar = [];
    //  allNotes = [];
    function DashboardComponent(_httpService, _communicateService) {
        var _this = this;
        this._httpService = _httpService;
        this._communicateService = _communicateService;
        this.users = null;
        //starId = 0;
        this.allThoughts = [];
        this.allAnswers = [];
        this.oneThought = [];
        _communicateService.observedUsers.subscribe(function (updatedUsers) { _this.users = updatedUsers; }, function (err) { console.log('error'); }, function () { });
    }
    DashboardComponent.prototype.setAnswers = function (theId) {
        var _this = this;
        //this.starId = theId;
        this._httpService.oneAnswer(theId)
            .then(function (data) {
            _this.oneThought = data;
            console.log('one item');
            console.log(data);
            _this.allAnswers = _this.oneThought[0].answers;
        })
            .catch(function (err) { console.log(err); });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.allThoughts()
            .then(function (data) {
            _this.allThoughts = data;
            console.log('all items');
            console.log(data);
        })
            .catch(function (err) { console.log(err); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(478),
        styles: [__webpack_require__(477)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__communicate_service__["a" /* CommunicateService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n<div class=\"col-md-8 col-md-offset-2 well\">\n\n<h2> Hi {{users.yourName}} ! </h2>\n\n <a routerLink=\"/create\" routerLinkActive=\"active\">Add a Deep Thought</a> | <a routerLink=\"/\" routerLinkActive=\"active\">Logout</a>\n\n<table class=\"table well\">\n  <tr>\n    <th>Thought</th>\n    <th>Answers</th>\n    <th>Last Answered</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor='let thought of allThoughts'>\n    <td>{{thought.thought}}</td>\n    <td>{{thought.answers.length}}</td>\n    <td>{{thought.answers[0].updatedAt | date :  \"dd.MM.y\" }}</td>\n    <td><button (click)='setAnswers(thought._id)'>show</button> <a routerLink=\"/answer/{{thought._id}}\" routerLinkActive=\"active\">Answer</a></td>\n  </tr>\n</table>\n<br><br>\n\n<app-allanswers [(myAnswers)]='allAnswers'>  </app-allanswers>\n</div>\n"

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communicate_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = (function () {
    function CreateComponent(_httpService, _communicateService) {
        var _this = this;
        this._httpService = _httpService;
        this._communicateService = _communicateService;
        this.users = null;
        this.item = { author: '', thought: '', discription: '' };
        _communicateService.observedUsers.subscribe(function (updatedUsers) { _this.users = updatedUsers; }, function (err) { console.log('error'); }, function () { });
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.onSubmit = function () {
        this.item.author = this.users.yourName;
        console.log(this.item);
        this._httpService.createThought(this.item);
    };
    CreateComponent.prototype.clearForm = function () {
        this.item = { author: '', thought: '', discription: '' };
        return true;
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-create',
        template: __webpack_require__(481),
        styles: [__webpack_require__(480)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__communicate_service__["a" /* CommunicateService */]) === "function" && _b || Object])
], CreateComponent);

var _a, _b;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<div class=\"col-md-6 col-md-offset-2 well\">\n\n<form (submit)=\"onSubmit()\">\n\n <h2> New Deep Thought</h2>\n <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a> | <a routerLink=\"/\" routerLinkActive=\"active\">Logout</a><br><br>\n\n  Deep Thought:<br>\n  <textarea required\n  [(ngModel)]=\"item.thought\"\n  #thought='ngModel' class=\"form-control\" rows=\"4\" cols=\"50\" name=\"thought\">\n</textarea><br>\n\n  Discription:(optional)<br>\n  <textarea\n  [(ngModel)]=\"item.discription\"\n  #discription='ngModel' class=\"form-control\" rows=\"4\" cols=\"50\" name=\"discription\">\n  </textarea>\n\n\n  <input type=\"submit\" value=\"Submit\">\n  <button (click)='clearForm()'>clear</button>\n</form>\n</div>\n"

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communicate_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerComponent = (function () {
    function AnswerComponent(_httpService, _route, _communicateService) {
        var _this = this;
        this._httpService = _httpService;
        this._route = _route;
        this._communicateService = _communicateService;
        this.users = null;
        this.item = { author: '', answer: '', details: '' };
        this._route.params.subscribe(function (param) {
            _this.id = param.id;
            console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
        });
        _communicateService.observedUsers.subscribe(function (updatedUsers) { _this.users = updatedUsers; }, function (err) { console.log('error'); }, function () { });
    }
    AnswerComponent.prototype.ngOnInit = function () {
    };
    AnswerComponent.prototype.onSubmit = function () {
        this.item.author = this.users.yourName;
        console.log(this.item);
        this._httpService.createAnswer(this.item, this.id);
    };
    return AnswerComponent;
}());
AnswerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-answer',
        template: __webpack_require__(484),
        styles: [__webpack_require__(483)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__communicate_service__["a" /* CommunicateService */]) === "function" && _c || Object])
], AnswerComponent);

var _a, _b, _c;
//# sourceMappingURL=answer.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<div class=\"col-md-6 col-md-offset-2 well\">\n\n<form (submit)=\"onSubmit()\">\n\n <h2> What is the answer to the ultimate question?</h2>\n <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a> | <a routerLink=\"/\" routerLinkActive=\"active\">Logout</a><br><br>\n\n  Your Answer:<br>\n  <textarea required\n  [(ngModel)]=\"item.answer\"\n  #thought='ngModel' class=\"form-control\" rows=\"4\" cols=\"50\" name=\"thought\">\n</textarea><br>\n\n  Supporting Details(optional):<br>\n  <textarea\n  [(ngModel)]=\"item.details\"\n  #discription='ngModel' class=\"form-control\" rows=\"4\" cols=\"50\" name=\"discription\">\n  </textarea>\n\n\n  <input type=\"submit\" value=\"Submit\">\n</form>\n<button (click)='clearForm()'>clear</button>\n</div>\n"

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllanswersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllanswersComponent = (function () {
    function AllanswersComponent(_httpService) {
        this._httpService = _httpService;
        this.item = { likes: 0 };
    }
    AllanswersComponent.prototype.ngOnInit = function () {
    };
    AllanswersComponent.prototype.onSubmitLike = function (num) {
        num = num + 1;
        this.item.likes = num;
        //this._httpService.updateStars(item,id);
    };
    return AllanswersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], AllanswersComponent.prototype, "myAnswers", void 0);
AllanswersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-allanswers',
        template: __webpack_require__(487),
        styles: [__webpack_require__(486)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AllanswersComponent);

var _a;
//# sourceMappingURL=allanswers.component.js.map

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n\n<div class=\"col-md-8 col-md-offset-2 well\">\n  <h2>Answer to Ultimate Question</h2>\n\n\n  <div *ngFor='let answer of myAnswers'>\n    <h4>{{answer.author}}:</h4>\n    <p>&nbsp;&nbsp;&nbsp;{{answer.answer}}</p>\n    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{answer.details}}</p>\n    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{answer.createdAt | date :  \"dd.MM.y\" }}</p>\n  <a routerLink=\"/answer/{{answer._thought}}\" routerLinkActive=\"active\">Answer this Question</a>\n\n  <p>Likes: {{answer.likes}}</p>\n\n  <form (submit)=\"onSubmitLike(answer.likes)\">\n    <input type=\"submit\" value=\"Like\">\n  </form>\n\n\n\n  <hr style=\"color: black;border-width: 3px;\">\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommunicateService = (function () {
    function CommunicateService() {
        this.observedUsers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    CommunicateService.prototype.updateUsers = function (users) {
        this.observedUsers.next(users);
    };
    return CommunicateService;
}());
CommunicateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommunicateService);

//# sourceMappingURL=communicate.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communicate_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_router, _communicateService) {
        this._router = _router;
        this._communicateService = _communicateService;
        this.users = { yourName: '' };
        _communicateService.updateUsers(this.users);
    }
    LoginComponent.prototype.updateUsers = function () {
        this._communicateService.updateUsers(this.users);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log('LoginComponent');
        this._router.navigate(['/dashboard']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(205),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__communicate_service__["a" /* CommunicateService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ })

},[473]);
//# sourceMappingURL=main.bundle.js.map