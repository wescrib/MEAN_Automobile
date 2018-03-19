webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    width: 1000px;\r\n    margin: auto;\r\n}\r\n\r\n.header img {\r\n    width: 1000px;\r\n    margin: auto;\r\n}\r\n\r\n#content {\r\n    width: 1000px;\r\n    margin: auto;\r\n    height: 700px;\r\n\r\n\r\n}\r\n\r\n#images {\r\n    width: 120px;\r\n\r\n\r\n}\r\n\r\n#images img {\r\n    width: 100px;\r\n\r\n}\r\n\r\n#text-header {\r\n    font-size: 42pt;\r\n}\r\n\r\n.content-text{\r\n    padding-top: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <img src=\"./assets/images/Doggy.jpeg\" alt=\"bulldog looking out the window\">\r\n</div>\r\n<div class=\"header-text\">\r\n    <h1 class=\"mt-3 mb-5 text-center\" id=\"text-header\">What We Do Here</h1>\r\n</div>\r\n<div id=\"content\">\r\n    <div id=\"images\">\r\n        <img class=\"float-left mr-5\" src=\"./assets/images/porsche.jpeg\" alt=\"Broke down car\" style=\"width: 300px\">\r\n        <img class=\"float-left mr-5\" src=\"./assets/images/VW_bus.jpeg\" alt=\"VW Bus Front Bumper\" style=\"width: 300px\">\r\n        <img class=\"float-left mr-5\" src=\"./assets/images/harlem_car.jpeg\" alt=\"Harlem woman in front of car\" style=\"width: 300px\">\r\n    </div>\r\n    <div class=\"content-text\">\r\n        <h5 class=\"mt-5 mx-5\">Who</h5>\r\n        <p id=\"text-paragraph\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eros mauris, ornare quis elit ut, convallis facilisis orci. Morbi rhoncus non ipsum at fringilla. Nulla vitae mi sed lorem ultrices suscipit non non eros. Sed a urna ac mi commodo ultricies euismod quis lectus.</p>\r\n        <h5 class=\"mt-5 mx-5\">Why</h5>\r\n        <p id=\"text-paragraph\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum porta erat, at porta mi porta eu. Sed tristique nunc dolor, eu eleifend mi accumsan sit amet. Sed nunc diam, molestie suscipit dapibus sit amet, tempus et purus. Curabitur eget metus rhoncus nunc dapibus sollicitudin porttitor a tortor. Etiam at odio porttitor, molestie enim at, sollicitudin eros.</p>\r\n        <h5 class=\"mt-5 mx-5\">Where</h5>\r\n        <p id=\"text-paragraph\">Donec tristique suscipit viverra. Maecenas congue semper blandit. Suspendisse potenti. Sed venenatis finibus lectus, non ornare velit suscipit a. Duis purus diam, pulvinar id eros venenatis, faucibus finibus libero. Etiam ullamcorper ligula in urna pulvinar, id eleifend tortor condimentum. Nulla facilisi. Nullam id erat tristique, vulputate elit vitae, eleifend lacus.</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        core_1.Component({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_create_component_1 = __webpack_require__("../../../../../src/app/user/user-create/user-create.component.ts");
var question_create_component_1 = __webpack_require__("../../../../../src/app/dashboard/question-create/question-create.component.ts");
var question_one_component_1 = __webpack_require__("../../../../../src/app/dashboard/question-one/question-one.component.ts");
var vehicle_create_component_1 = __webpack_require__("../../../../../src/app/vehicle/vehicle-create/vehicle-create.component.ts");
var vehicle_show_one_component_1 = __webpack_require__("../../../../../src/app/vehicle/vehicle-show-one/vehicle-show-one.component.ts");
var header_nav_component_1 = __webpack_require__("../../../../../src/app/header-nav/header-nav.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var show_veh_make_component_1 = __webpack_require__("../../../../../src/app/vehicle/show-veh-make/show-veh-make.component.ts");
var show_veh_body_component_1 = __webpack_require__("../../../../../src/app/vehicle/show-veh-body/show-veh-body.component.ts");
var show_veh_year_component_1 = __webpack_require__("../../../../../src/app/vehicle/show-veh-year/show-veh-year.component.ts");
var show_veh_model_component_1 = __webpack_require__("../../../../../src/app/vehicle/show-veh-model/show-veh-model.component.ts");
var vehicle_show_all_component_1 = __webpack_require__("../../../../../src/app/vehicle/vehicle-show-all/vehicle-show-all.component.ts");
var about_us_component_1 = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
var routes = [
    // {
    //   path: "registration",
    //   component: UserCreateComponent,
    // },
    {
        path: "",
        component: header_nav_component_1.HeaderNavComponent,
        children: [
            { path: "", component: home_component_1.HomeComponent },
            { path: "auto/build", component: vehicle_create_component_1.VehicleCreateComponent },
            { path: "vehicle/makeList/:veh_make", component: show_veh_make_component_1.ShowVehMakeComponent },
            { path: "vehicle/bodyList/:veh_body", component: show_veh_body_component_1.ShowVehBodyComponent },
            { path: "vehicle/yearList/:veh_year", component: show_veh_year_component_1.ShowVehYearComponent },
            { path: "vehicle/modelList/:veh_model", component: show_veh_model_component_1.ShowVehModelComponent },
            { path: "vehicle/view/:veh_id", component: vehicle_show_one_component_1.VehicleShowOneComponent },
            { path: "review/new/:veh_id", component: question_create_component_1.QuestionCreateComponent },
            { path: "review/view/:rev_id", component: question_one_component_1.QuestionOneComponent },
            { path: "vehicles/reviews/all", component: vehicle_show_all_component_1.VehicleShowAllComponent },
            { path: "kittykatlicklick/about-us", component: about_us_component_1.AboutUsComponent },
            { path: "registration", component: user_create_component_1.UserCreateComponent }
        ],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_create_component_1 = __webpack_require__("../../../../../src/app/user/user-create/user-create.component.ts");
var user_login_component_1 = __webpack_require__("../../../../../src/app/user/user-login/user-login.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var question_create_component_1 = __webpack_require__("../../../../../src/app/dashboard/question-create/question-create.component.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var vehicle_service_1 = __webpack_require__("../../../../../src/app/server/controllers/vehicle.service.ts");
var question_one_component_1 = __webpack_require__("../../../../../src/app/dashboard/question-one/question-one.component.ts");
var search_q_pipe_1 = __webpack_require__("../../../../../src/app/server/controllers/search-q.pipe.ts");
var sort_pipe_1 = __webpack_require__("../../../../../src/app/server/controllers/sort.pipe.ts");
var ngx_order_pipe_1 = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
var vehicle_component_1 = __webpack_require__("../../../../../src/app/vehicle/vehicle.component.ts");
var vehicle_create_component_1 = __webpack_require__("../../../../../src/app/vehicle/vehicle-create/vehicle-create.component.ts");
var vehicle_show_all_component_1 = __webpack_require__("../../../../../src/app/vehicle/vehicle-show-all/vehicle-show-all.component.ts");
var vehicle_show_one_component_1 = __webpack_require__("../../../../../src/app/vehicle/vehicle-show-one/vehicle-show-one.component.ts");
var header_nav_component_1 = __webpack_require__("../../../../../src/app/header-nav/header-nav.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var show_veh_make_component_1 = __webpack_require__("../../../../../src/app/vehicle/show-veh-make/show-veh-make.component.ts");
var show_veh_body_component_1 = __webpack_require__("../../../../../src/app/vehicle/show-veh-body/show-veh-body.component.ts");
var show_veh_model_component_1 = __webpack_require__("../../../../../src/app/vehicle/show-veh-model/show-veh-model.component.ts");
var show_veh_year_component_1 = __webpack_require__("../../../../../src/app/vehicle/show-veh-year/show-veh-year.component.ts");
var model_search_pipe_1 = __webpack_require__("../../../../../src/app/server/controllers/model-search.pipe.ts");
var make_search_pipe_1 = __webpack_require__("../../../../../src/app/server/controllers/make-search.pipe.ts");
var about_us_component_1 = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
var angular2_image_upload_1 = __webpack_require__("../../../../angular2-image-upload/index.js");
var ngx_bootstrap_1 = __webpack_require__("../../../../ngx-bootstrap/index.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                user_create_component_1.UserCreateComponent,
                user_login_component_1.UserLoginComponent,
                dashboard_component_1.DashboardComponent,
                question_create_component_1.QuestionCreateComponent,
                question_one_component_1.QuestionOneComponent,
                search_q_pipe_1.SearchQPipe,
                sort_pipe_1.SortPipe,
                vehicle_component_1.VehicleComponent,
                vehicle_create_component_1.VehicleCreateComponent,
                vehicle_show_all_component_1.VehicleShowAllComponent,
                vehicle_show_one_component_1.VehicleShowOneComponent,
                header_nav_component_1.HeaderNavComponent,
                home_component_1.HomeComponent,
                show_veh_make_component_1.ShowVehMakeComponent,
                show_veh_body_component_1.ShowVehBodyComponent,
                show_veh_model_component_1.ShowVehModelComponent,
                show_veh_year_component_1.ShowVehYearComponent,
                model_search_pipe_1.ModelSearchPipe,
                make_search_pipe_1.MakeSearchPipe,
                about_us_component_1.AboutUsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ngx_order_pipe_1.OrderModule,
                ngx_bootstrap_1.CollapseModule,
                angular2_image_upload_1.ImageUploadModule.forRoot(),
            ],
            providers: [
                user_service_1.UserService,
                question_service_1.QuestionService,
                vehicle_service_1.VehicleService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome {{currentUser.first_name}}\n</p>\n<label for=\"searchQ\">Search</label><input [(ngModel)] = \"searchText\">\n<table border=\"1\">\n  <tr>\n    <th>Desc</th>\n    <th># of comments</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let q of questions | searchQ: searchText\">\n    <td>{{q.description}}</td>\n    <td>{{q._answers.length}}</td>\n    <td><a [routerLink]=\"['/dashboard/post/',q._id]\">Show</a></td>\n  </tr>\n</table>\n\n<button [routerLink]=\"['/dashboard/post']\">Ask a Question!</button>\n\n<button (click)=\"logout()\">Logout</button>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var _1 = __webpack_require__("../../../router/esm5/router.js");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_router, _userService, _http, _questionService) {
        this.currentUser = null;
        this._userService = _userService;
        this._http = _http;
        this._router = _router;
        this._questionService = _questionService;
        // this.currentUser = null
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.inSession();
        this.complaintList();
        this.currentUser;
    };
    DashboardComponent.prototype.inSession = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (res) {
            console.log(res.json(), "LOGGED IN");
            _this.currentUser = res.json();
            console.log(_this.currentUser);
            if (_this.currentUser._id == null) {
                _this._router.navigateByUrl("/");
            }
        });
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout().subscribe(function (res) { _this.currentUser = null; });
        this._router.navigateByUrl("/");
    };
    DashboardComponent.prototype.complaintList = function () {
        var _this = this;
        console.log("getting list of items");
        this._questionService.index(function (questions) { return _this.questions = questions; });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_1.Router, user_service_1.UserService, http_1.Http, question_service_1.QuestionService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/question-create/question-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  \r\n  #rating span {\r\n    cursor: pointer;\r\n    font-size: 50px;\r\n    padding: 0 10px;\r\n    color: #aaa;\r\n    opacity: .5;\r\n    -webkit-transition: all 150ms;\r\n    transition: all 150ms;\r\n    display: inline-block;\r\n    -webkit-transform: rotateX(45deg);\r\n            transform: rotateX(45deg);\r\n    -webkit-transform-origin: center bottom;\r\n            transform-origin: center bottom;\r\n  }\r\n  \r\n  #rating span.hover {\r\n    color: #ff0;\r\n    opacity: 1;\r\n    -webkit-transform: rotateX(0deg);\r\n            transform: rotateX(0deg);\r\n    text-shadow: 0 0 30px #ffc;\r\n  }\r\n  \r\n  span {\r\n    color: white;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/question-create/question-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"mt-3\">Write a review</h1>\r\n  <form (submit)=\"createQuestion()\">\r\n    <p><label for=\"question-description\">Title: <br> </label><input type=\"text\" name=\"description\" id=\"description\" class=\"form-control\" required minlength=\"6\" [(ngModel)]=\"question.description\" #qDesc=\"ngModel\"></p>\r\n    <p class=\"question-content\"><label for=\"question-content\">Question: <br> </label><textarea cols=\"40\" rows=\"10\" name=\"question\" id=\"question\" class=\"form-control\" required minlength=\"6\" [(ngModel)]=\"question.content\" #qContent=\"ngModel\"></textarea></p>\r\n    <div *ngIf=\"qContent.invalid && (qContent.dirty || qContent.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"qContent.errors.required\">\r\n        <p style=\"color: red;\">Content for complaint is required</p>\r\n      </div>\r\n      <div *ngIf=\"qContent.errors.minlength\">\r\n        <p style=\"color: red;\">Complaint must be at least 6 characters</p>\r\n      </div>\r\n    </div>\r\n    <!-- <div id=\"rating\">\r\n      <span>★</span>\r\n      <span>★</span>\r\n      <span>★</span>\r\n      <span>★</span>\r\n      <span>★</span>\r\n    </div> -->\r\n    <div class=\"rating\">\r\n      <select class=\"rating\" name=\"rating\" required [(ngModel)]=\"question.rating\">\r\n        <option value=\"1\">1</option>\r\n        <option value=\"2\">2</option>\r\n        <option value=\"3\">3</option>\r\n        <option value=\"4\">4</option>\r\n        <option value=\"5\">5</option>\r\n      </select>\r\n    </div>\r\n    <button class=\"my-3 btn bg-primary\" type=\"submit\"><span>Submit</span></button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/question-create/question-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var question_1 = __webpack_require__("../../../../../src/app/server/models/question.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var QuestionCreateComponent = /** @class */ (function () {
    function QuestionCreateComponent(_questionService, _router, _route, _userService) {
        this._route = _route;
        this.currentUser = null;
        this._questionService = _questionService;
        this.question = new question_1.Question;
        this._router = _router;
        this._userService = _userService;
    }
    QuestionCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser;
        this.inSession();
        this.subscription = this._route.params.subscribe(function (params) { return _this.veh_id = params.veh_id; });
    };
    QuestionCreateComponent.prototype.createQuestion = function () {
        var _this = this;
        console.log("QUESTION SHOULD PRINT HERE ", this.question);
        // this.question._vehicle = this.veh_id;
        // console.log("REVIEW BEING MADE WITH VEHID: ", this.question._vehicle);
        this._questionService.createQuestion(this.question, this.veh_id).subscribe(function (res) { return _this._router.navigateByUrl("/vehicle/view/" + _this.veh_id); }, function (error) { return console.log(error); });
    };
    QuestionCreateComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout().subscribe(function (res) { _this.currentUser = null; });
        this._router.navigateByUrl("/");
    };
    QuestionCreateComponent.prototype.inSession = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (res) {
            console.log(res.json(), "LOGGED IN");
            _this.currentUser = res.json();
            console.log(_this.currentUser);
            if (_this.currentUser._id == null) {
                _this._router.navigateByUrl("/");
            }
        });
    };
    QuestionCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-question-create',
            template: __webpack_require__("../../../../../src/app/dashboard/question-create/question-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/question-create/question-create.component.css")]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService,
            router_1.Router,
            router_1.ActivatedRoute,
            user_service_1.UserService])
    ], QuestionCreateComponent);
    return QuestionCreateComponent;
}());
exports.QuestionCreateComponent = QuestionCreateComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/question-one/question-one.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".com{\r\n    margin-top: 30px;\r\n    display: inline;\r\n}\r\n.comment-body{\r\n    display: inline-block;\r\n    width: 500px;\r\n}\r\n.comment .votes{\r\n    display: inline-block;\r\n    /* width:100px; */\r\n}\r\n.upvote:hover {\r\n    background-color: green;\r\n    color: white;\r\n}\r\n.downvote:hover {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n.question-area{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin-top: 20px;\r\n}\r\n.question-area .votes{\r\n    width:100px;\r\n}\r\n.pre-area{\r\n    white-space: pre-wrap\r\n}\r\nspan{\r\n    color: white;\r\n}\r\n.noSession p {\r\n    text-align: center;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/question-one/question-one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"question-area\">\r\n    <div class=\"votes mr-2\">\r\n      <button class=\"upvote mb-1 btn\" (click)=\"upvotePost(question._id)\">🢁</button><br>\r\n      <p class=\"ml-3\">{{question.rank}}</p>\r\n      <button class=\"downvote btn\" (click)=\"downvotePost(question._id)\">🢃</button>\r\n    </div>\r\n    <div class=\"question-body\">\r\n\r\n      <h1 class=\"my-3\">{{question.description}}</h1>\r\n      <h4 class=\"pre-area\">{{question.content}}</h4>\r\n      <p class=\"mt-4\">By {{question._user.first_name}}</p>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  \r\n  <div>\r\n    <div class=\"noSession\" *ngIf=\"currentUser == null\">\r\n      <p><a href [routerLink]=\"['/registration']\">Register</a> to comment!</p>\r\n    </div>\r\n      <form (submit)=\"createAnswer(question._id)\" name=\"commentForm\">\r\n        <p class=\"answer-content\"><label for=\"answer-content\">Comment: <br> </label><textarea cols=\"40\" rows=\"5\" name=\"question\" id=\"question\" class=\"form-control\" required minlength=\"2\" [(ngModel)]=\"answer.content\" #cContent=\"ngModel\"></textarea></p>\r\n        <!-- <div *ngIf=\"cContent.invalid && (cContent.dirty || cContent.touched)\" class=\"alert alert-danger\"> -->\r\n          <!-- <div *ngIf=\"cContent.errors.minlength\">\r\n            <p style=\"color: red;\">Comment must be at least 6 characters</p>\r\n          </div> -->\r\n        <!-- </div> -->\r\n        <div class=\"noSession\" *ngIf=\"currentUser == null\">\r\n          <button class=\"btn bg-primary\" type=\"submit\" value=\"Comment\" disabled><span>Submit</span></button>\r\n        </div>\r\n        <div class=\"inSession\" *ngIf=\"currentUser != null\">\r\n          <button class=\"btn bg-primary\" type=\"submit\" value=\"Comment\"><span>Submit</span></button>\r\n        </div>\r\n        \r\n      </form>\r\n      \r\n  </div>\r\n\r\n  <div class=\"com\">\r\n    <div class=\"comment\" *ngFor=\"let answer of question._answers | orderBy: 'createdAt':true\">\r\n      <div class=\"votes mt-5 mr-2\">\r\n        <button class=\"upvote mb-1 btn\" (click)=\"upvote(answer._id)\">🢁</button><br>\r\n        <button class=\"downvote btn\" (click)=\"downvote(answer._id)\">🢃</button>\r\n      </div>\r\n      <div class=\"comment-body\">\r\n        <div *ngIf=\"answer.rank == 1 || answer.rank ==-1\">\r\n          <p class=\"commentAuthor mt-2\"><small muted-text>{{answer._user.first_name}} [ {{answer.rank}} point ]</small></p>\r\n        </div>\r\n        <div *ngIf=\"answer.rank > 1 || answer.rank < -1 || answer.rank==0\">\r\n          <p class=\"commentAuthor mt-2\"><small muted-text>{{answer._user.first_name}} [ {{answer.rank}} points ]</small></p>\r\n        </div>\r\n        <p class=\"commentContent pre-area\">{{answer.content}}</p>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/question-one/question-one.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var question_1 = __webpack_require__("../../../../../src/app/server/models/question.ts");
var answer_1 = __webpack_require__("../../../../../src/app/server/models/answer.ts");
var ngx_order_pipe_1 = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
var QuestionOneComponent = /** @class */ (function () {
    function QuestionOneComponent(_router, _route, _userService, _questionService, _orderPipe) {
        this._router = _router;
        this._route = _route;
        this._userService = _userService;
        this._questionService = _questionService;
        this._orderPipe = _orderPipe;
        this.question = new question_1.Question;
        this.currentUser = null;
        this.answer = new answer_1.Answer;
    }
    QuestionOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) { return _this.question_id = params.rev_id; });
        this.getPost();
        this.inSession();
        this.currentUser;
    };
    QuestionOneComponent.prototype.getPost = function () {
        var _this = this;
        console.log("GETTING QUESTION - SUBCOMP", this.question_id);
        document.forms["commentForm"].reset();
        this._questionService.getOneQuestion(this.question_id, function (question) { return _this.question = question; });
    };
    QuestionOneComponent.prototype.upvote = function (answer_id) {
        var _this = this;
        console.log("COMPONENT: SENDING UPVOTE TO SERVICE");
        this._questionService.upvoteComment(answer_id, function (res) { return _this.getPost(); });
    };
    QuestionOneComponent.prototype.downvote = function (answer_id) {
        var _this = this;
        console.log("COMPONENT: SENDING DOWNVOTE TO SERVICE");
        this._questionService.downvoteComment(answer_id, function (res) { return _this.getPost(); });
    };
    QuestionOneComponent.prototype.upvotePost = function (question_id) {
        var _this = this;
        console.log("COMPONENT: SENDING UPVOTE TO SERVICE");
        this._questionService.upvotePost(question_id, function (res) { return _this.getPost(); });
    };
    QuestionOneComponent.prototype.downvotePost = function (question_id) {
        var _this = this;
        console.log("COMPONENT: SENDING DOWNVOTE TO SERVICE");
        this._questionService.downvotePost(question_id, function (res) { return _this.getPost(); });
    };
    QuestionOneComponent.prototype.createAnswer = function (question_id) {
        var _this = this;
        console.log("creating answer in sub-component", this.answer);
        if (this.answer.content.length > 0) {
            this._questionService.createAnswer(this.answer, question_id).subscribe(
            // res => this._router.navigateByUrl("/dashboard/post/"+question_id),
            function (res) { return _this.getPost(); }, function (error) { return console.log(error); });
        }
        else {
            console.log("nothing input in comment");
        }
    };
    // sortedLikes(){
    //   console.log("subcomponent reaching service for answers")
    //   console.log(this.question_id)
    //   this._questionService.sortedAnswers(this.question_id,answers => this.answerList=answers);
    // }
    QuestionOneComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout().subscribe(function (res) { _this.currentUser = null; });
        this._router.navigateByUrl("/");
    };
    QuestionOneComponent.prototype.inSession = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (res) {
            console.log(res.json(), "IS LOGGED IN");
            _this.currentUser = res.json();
            console.log(_this.currentUser);
            if (_this.currentUser._id == null) {
                _this._router.navigateByUrl("/");
            }
        });
    };
    QuestionOneComponent = __decorate([
        core_1.Component({
            selector: 'app-question-one',
            template: __webpack_require__("../../../../../src/app/dashboard/question-one/question-one.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/question-one/question-one.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            user_service_1.UserService,
            question_service_1.QuestionService,
            ngx_order_pipe_1.OrderPipe])
    ], QuestionOneComponent);
    return QuestionOneComponent;
}());
exports.QuestionOneComponent = QuestionOneComponent;


/***/ }),

/***/ "../../../../../src/app/header-nav/header-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    text-decoration: none;\r\n}\r\n\r\na span{\r\n    color: white;\r\n}\r\n\r\na span:hover {\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-nav/header-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\"><h1>Joe's Car Shack</h1></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\"><a class=\"nav-link\" href [routerLink]=\"['/']\">Home</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" href [routerLink]=\"['/auto/build']\">Build Vehicle</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" href [routerLink]=\"['/vehicles/reviews/all']\">Reviews</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" href [routerLink]=\"['/kittykatlicklick/about-us']\">About Us</a></li>\r\n      <!-- <li class=\"nav-item\">Contact</li> -->\r\n    </ul>\r\n    <div class=\"form-group mx-5 \" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n      <!-- <button type=\"button\" class=\"btn btn-outline-light\">Sign In</button> -->\r\n      <div class=\"login\" *ngIf=\"currentUser == null\">\r\n        <div class=\"btn-group\" role=\"group\">\r\n          <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-dark dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Sign In</button> <button type=\"button\" class=\"btn btn-outline-light\"><a href [routerLink]=\"['/registration']\"><span>Register</span></a></button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\r\n            <form (submit)=\"loginUser()\" name=\"myForm\" role=\"form\">\r\n              <div class=\"form-group\">\r\n                <input placeholder=\"Email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" required ng-minlength=\"3\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input placeholder=\"Password\" type=\"password\" class=\"form-control\" name=\"user.password\" [(ngModel)]=\"user.password\">\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Sign in</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"logout\" *ngIf=\"currentUser != null\">\r\n        <div class=\"btn-group\" role=\"group\">\r\n            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-dark dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{currentUser.first_name[0].toUpperCase()}}{{currentUser.last_name[0].toUpperCase()}}</button>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\r\n              <a class=\"navlink-item\" href (click)=\"logout()\">Logout</a>\r\n            </div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n    <!-- <form class=\"form-inline my-2 my-lg-0\" action=\"http://search.yahoo.com/bin/search/\" method=\"POST\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form> -->\r\n  </div>      \r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/header-nav/header-nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent(_router, _userService) {
        this.currentUser = null;
        this._userService = _userService;
        this.user = new user_1.User;
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
        this.inSession();
        this.currentUser;
    };
    HeaderNavComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout().subscribe(function (res) { _this.currentUser = null; });
        this._router.navigateByUrl("/");
    };
    HeaderNavComponent.prototype.inSession = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (res) {
            console.log(res.json(), "IS LOGGED IN");
            _this.currentUser = res.json();
            console.log(_this.currentUser.first_name, "is logged in");
        });
    };
    HeaderNavComponent.prototype.loginUser = function () {
        console.log("login info hit sub component", this.user);
        this._userService.login(this.user, function (res) {
            console.log(res);
            if (res.status) {
                console.log("THIS IS AN ERROR MESSAGE: " + res);
            }
            else {
                location.reload();
            }
        });
    };
    HeaderNavComponent = __decorate([
        core_1.Component({
            selector: 'app-header-nav',
            template: __webpack_require__("../../../../../src/app/header-nav/header-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-nav/header-nav.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());
exports.HeaderNavComponent = HeaderNavComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-news {\r\n    border-left: solid 1px;\r\n    border-right: solid 1px;\r\n    border-bottom: solid 1px;\r\n    padding: 0 20px 50px 20px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.secondary-news{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\n.article {\r\n    width: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"header-news mb-4\">\r\n        <a href=\"http://www.speedhunters.com/2017/09/how-to-buy-an-nsx-sight-unseen/\" target=\"_blank\">\r\n        <img alt=\"Honda NSX\" src=\"./assets/images/make-model-blakejones-speedhunters-1.jpg\" alt=\"Broke down car\" style=\"width:100%\">\r\n        <h1 class=\"mt-4\">How To Buy An NSX Sight-Unseen</h1></a>\r\n        <p class=\"text-muted\">By Blake Jones</p>\r\n    </div>\r\n    <h2>Featured News</h2>\r\n    <div class=\"secondary-news mt-4\">\r\n        <div class=\"article ml-5\">\r\n            <a href=\"https://www.caranddriver.com/reviews/2018-honda-odyssey-tested-with-nine-speed-automatic-review\">\r\n                <img alt=\"Honda Odyssey Minivan Review\" src=\".\\assets\\images\\car-and-driver-honda-odyssey.jpg\" style=\"width:100%\">\r\n                <h4>2018 Honda Odyssey Nine-Speed Automatic</h4>\r\n            </a>\r\n            <p class=\"text-muted\">By Joseph Capparella</p>\r\n        </div>\r\n        <div class=\"article ml-5\">\r\n            <a href=\"http://www.latimes.com/business/autos/laautoshow/la-fi-hy-disappearing-stick-shift-20161115-story.html\">\r\n                <img alt=\"5 Speed Manual Transmission\" src=\".\\assets\\images\\evening.jpg\" style=\"width:100%\">\r\n                <h4>The disappearing stick shift: Less than 3% of cars sold in the U.S. have manual transmissions</h4>\r\n            </a>\r\n            <p class=\"text-muted\">By Charles Fleming</p>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/server/controllers/make-search.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MakeSearchPipe = /** @class */ (function () {
    function MakeSearchPipe() {
    }
    MakeSearchPipe.prototype.transform = function (items, searchText, attr) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (list) {
            console.log(list);
            if (attr == "make") {
                return list.make.toLowerCase().includes(searchText);
            }
            else if (attr == "model") {
                return list.model.toLowerCase().includes(searchText);
            }
            else if (attr == "body") {
                return list.body.toLowerCase().includes(searchText);
            }
            else if (attr == "year") {
                return list.year.toString().includes(searchText);
            }
        });
    };
    MakeSearchPipe = __decorate([
        core_1.Pipe({
            name: 'search'
        })
    ], MakeSearchPipe);
    return MakeSearchPipe;
}());
exports.MakeSearchPipe = MakeSearchPipe;


/***/ }),

/***/ "../../../../../src/app/server/controllers/model-search.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ModelSearchPipe = /** @class */ (function () {
    function ModelSearchPipe() {
    }
    ModelSearchPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (list) {
            console.log(list);
            return list.model.toLowerCase().includes(searchText);
        });
    };
    ModelSearchPipe = __decorate([
        core_1.Pipe({
            name: 'modelSearch'
        })
    ], ModelSearchPipe);
    return ModelSearchPipe;
}());
exports.ModelSearchPipe = ModelSearchPipe;


/***/ }),

/***/ "../../../../../src/app/server/controllers/question.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var QuestionService = /** @class */ (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.createQuestion = function (question, veh_id) {
        console.log("sending question to backend");
        return this._http.post("/reviews/create/" + veh_id, question);
    };
    QuestionService.prototype.index = function (questions) {
        console.log("reaching to to the backend for post list");
        return this._http.get("/reviews/all").subscribe(function (res) { return questions(res.json()); }, function (err) { return console.log(err); });
    };
    QuestionService.prototype.getOneQuestion = function (id, cb) {
        console.log("reaching to backend for single post", id);
        this._http.get("/reviews/" + id).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    QuestionService.prototype.upvotePost = function (id, cb) {
        console.log("SERVICE: SENDING", id, "TO BACKEND");
        this._http.put("/reviews/up/" + id, {}).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    QuestionService.prototype.downvotePost = function (id, cb) {
        console.log("SERVICE: POST DOWNVOTE BEING SENT TO SERVER", id);
        this._http.put("/reviews/down/" + id, {}).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    QuestionService.prototype.upvoteComment = function (id, cb) {
        console.log("SERVICE: COMMENT UPVOTE BEING SENT TO SERVER", id);
        this._http.put("/comment/up/" + id, {}).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    QuestionService.prototype.downvoteComment = function (id, cb) {
        console.log("SERVICE: COMMENT UPVOTE BEING SENT TO SERVER", id);
        this._http.put("/comment/down/" + id, {}).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    QuestionService.prototype.downvoteRev = function (id, cb) {
        console.log("SERVICE: REVIEW DOWNVOTE BEING SENT TO SERVER");
        this._http.put("/reviews/down/" + id, {}).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    QuestionService.prototype.createAnswer = function (answer, question_id) {
        console.log("sending comment to backend", answer);
        return this._http.post("/reviews/" + question_id + "/comment/new", answer);
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/search-q.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SearchQPipe = /** @class */ (function () {
    function SearchQPipe() {
    }
    SearchQPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (list) {
            console.log(list);
            return list.description.toLowerCase().includes(searchText);
        });
    };
    SearchQPipe = __decorate([
        core_1.Pipe({
            name: 'searchQ'
        })
    ], SearchQPipe);
    return SearchQPipe;
}());
exports.SearchQPipe = SearchQPipe;


/***/ }),

/***/ "../../../../../src/app/server/controllers/sort.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (value, args) {
        return null;
    };
    SortPipe = __decorate([
        core_1.Pipe({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());
exports.SortPipe = SortPipe;


/***/ }),

/***/ "../../../../../src/app/server/controllers/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.currentUser = null;
    }
    UserService.prototype.create = function (newUser) {
        console.log("sending new user info to backend ", newUser);
        return this._http.post("/users/create", newUser);
    };
    UserService.prototype.login = function (user, cb) {
        console.log("sending login info to backend");
        this._http.post("/users/login", user).subscribe(function (res) { return cb(res.json()); }, function (err) { return cb(err.json()); });
    };
    UserService.prototype.getUser = function () {
        console.log("CHECKING IF USER IS LOGGED IN");
        return this._http.get("/session");
    };
    UserService.prototype.logout = function () {
        return this._http.delete("/logout");
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/vehicle.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var VehicleService = /** @class */ (function () {
    function VehicleService(_http) {
        this._http = _http;
    }
    VehicleService.prototype.createVehicle = function (veh) {
        console.log("SERVICE: SENDING NEW OBJECT TO SERVER");
        return this._http.post("/vehicle/new", veh);
    };
    VehicleService.prototype.vehIndex = function (vehicles) {
        console.log("SERVICE: GETTING ALL VEHICLES FROM SERVER");
        return this._http.get("/vehicle/all").subscribe(function (res) { return vehicles(res.json()); }, function (err) { return console.log(err); });
    };
    VehicleService.prototype.getOneVeh = function (id, cb) {
        console.log("SERVICE: GETTING VEH_ID", id, "FROM SERVER");
        this._http.get("/vehicle/" + id).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    VehicleService.prototype.delVeh = function (id) {
        console.log("SERVICE: SENDING REMOVAL TO SERVER");
        this._http.delete("/vehicle/remove/" + id);
    };
    VehicleService.prototype.updateVeh = function (vehicle) {
        console.log("SERVICE: SENDING UPDATE TO SERVER");
        return this._http.put("/update/" + vehicle._id, vehicle);
    };
    VehicleService.prototype.getMake = function (make, cb) {
        console.log("SERVICE: GETTING MAKE", make);
        this._http.get("/vehicle/make/" + make).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    VehicleService.prototype.getModel = function (model, cb) {
        console.log("SERVICE: GETTING MAKE", model);
        this._http.get("/vehicle/model/" + model).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    VehicleService.prototype.getBody = function (body, cb) {
        console.log("SERVICE: GETTING BODY", body);
        this._http.get("/vehicle/body/" + body).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    VehicleService.prototype.getYear = function (year, cb) {
        console.log("SERVICE: GETTING MAKE", year);
        this._http.get("/vehicle/year/" + year).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    VehicleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], VehicleService);
    return VehicleService;
}());
exports.VehicleService = VehicleService;


/***/ }),

/***/ "../../../../../src/app/server/models/answer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "../../../../../src/app/server/models/question.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());
exports.Question = Question;


/***/ }),

/***/ "../../../../../src/app/server/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/app/server/models/vehicle.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;


/***/ }),

/***/ "../../../../../src/app/user/user-create/user-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".errors{\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-create/user-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"my-4\">Registration</h1>\r\n\r\n  <div class=\"registration\">\r\n    <form (submit)=\"registerUser()\" name=\"registrationForm\" #registerForm=\"ngForm\">\r\n      <p class=\"first_name\"><label for=\"first_name\">First Name: </label><input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control\" required minlength=\"2\"[(ngModel)]=\"user.first_name\" #fName=\"ngModel\"></p>\r\n      <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"fName.errors.required\">\r\n          <p style=\"color: red;\">First name is required</p>\r\n        </div>\r\n        <div div *ngIf=\"fName.errors.minlength\">\r\n          <p style=\"color: red;\">First name must be at least 2 characters</p>\r\n        </div>\r\n      </div>\r\n      \r\n      <p class=\"last_name\"><label for=\"last_name\">Last Name: </label><input type=\"text\" name=\"last_name\" id=\"last_name\" class=\"form-control\" required minlength=\"2\" [(ngModel)]=\"user.last_name\" #lName=\"ngModel\"></p>\r\n      <div *ngIf=\"lName.invalid && (lName.dirty || lName.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"lName.errors.required\">\r\n          <p style=\"color: red;\">Last Name is required</p>\r\n        </div>\r\n        <div *ngIf=\"lName.errors.minlength\">\r\n          <p style=\"color: red;\">Last Name must be at least 2 characters</p>\r\n        </div>\r\n      </div>\r\n      \r\n      <p class=\"email\"><label for=\"email\">Email: </label><input type=\"text\" name=\"email\" class=\"form-control invalid\" required email [(ngModel)]=\"user.email\" #email=\"ngModel\"></p>\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          <p style=\"color: red;\">Email is required</p>\r\n        </div>\r\n        <div *ngIf=\"email.errors.email\">\r\n          <p style=\"color: red;\">Invalid Email format</p>\r\n        </div>\r\n      </div>\r\n      \r\n      <p class=\"password\"><label for=\"password\">Password: </label><input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" required [(ngModel)]=\"user.password\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d$@$!%*?&]{8,32}$\" #password=\"ngModel\"></p>\r\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"password.errors.required\">\r\n          <p style=\"color: red;\">Password is required</p>\r\n        </div>\r\n        <div *ngIf=\"password.errors.pattern\">\r\n          <p style=\"color: red;\">Password requires at least 1 capital letter and 1 number, no special characters, and must be 8 - 32 characters</p>\r\n        </div>\r\n      </div>\r\n      \r\n      <p class=\"confirm_pw\"><label for=\"confirm_pw\">Confirm Password: </label><input type=\"password\" name=\"user.confirm_pw\" id=\"confirm\" class=\"form-control\" required [(ngModel)]=\"user.confirm_pw\" #confirm=\"ngModel\"></p>\r\n      <div *ngIf=\"confirm.invalid && (confirm.dirty || confirm.touched)\" class=\"alert alert-danger\">\r\n        <div>\r\n          <p style=\"color: red;\">Confirmation password is required</p>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"user.password != user.confirm_pw\">\r\n        <p style=\"color: red;\">No Match</p>\r\n      </div>\r\n      <div *ngIf=\"user.password == user.confirm_pw && user.confirm_pw != null\">\r\n        <p style=\"color:green\">Match!</p>\r\n      </div>\r\n      <div *ngIf=\"registerForm.invalid || user.password != user.confirm_pw\">\r\n        <p class=\"submit\"><button class=\"btn\" type=\"submit\" disabled>Register</button></p>\r\n      </div>\r\n      <div *ngIf=\"registerForm.valid && user.password == user.confirm_pw\">\r\n        <p class=\"submit\"><button class=\"btn\" type=\"submit\">Register</button></p>\r\n      </div>\r\n    </form>\r\n    <p *ngIf=\"errors.length > 0\" class=\"errors\">{{errors}}</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-create/user-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(_userService, _router, _http) {
        this._http = _http;
        this.errors = [];
        this._userService = _userService;
        this.user = new user_1.User;
        this._router = _router;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.prototype.registerUser = function () {
        // this._http.get("/users/lookup/"+this.user.email)
        var _this = this;
        console.log("hit sub service", this.user);
        this._userService.create(this.user).subscribe(function (res) {
            if (res.json().error) {
                _this.errors.length = 0;
                _this.errors.push("Email already in use.");
                console.log(_this.errors);
            }
            else {
                location.reload();
                _this._router.navigateByUrl("/");
            }
        });
    };
    UserCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-user-create',
            template: __webpack_require__("../../../../../src/app/user/user-create/user-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-create/user-create.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router,
            http_1.Http])
    ], UserCreateComponent);
    return UserCreateComponent;
}());
exports.UserCreateComponent = UserCreateComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <form (submit)=\"loginUser()\" name=\"myForm\">\n    <p class=\"email\"><label for=\"email\"> Email: </label><input type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" required ng-minlength=\"3\"></p>\n    <p class=\"password\"><label for=\"password\">Password: </label><input type=\"password\" name=\"user.password\" [(ngModel)]=\"user.password\"></p>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-login/user-login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// import { FormGroup } from '@angular/forms/src/model';
// import { Validators } from '@angular/forms/src/validators';
// import { FormControl } from '@angular/forms';
var UserLoginComponent = /** @class */ (function () {
    // private testForm: FormGroup;
    function UserLoginComponent(_userService, _router) {
        this.errors = [];
        this._userService = _userService;
        this.user = new user_1.User;
        this._router = _router;
        // this.testForm = testForm;
    }
    UserLoginComponent.prototype.ngOnInit = function () { };
    UserLoginComponent.prototype.loginUser = function () {
        var _this = this;
        console.log("login info hit sub component", this.user);
        this._userService.login(this.user, function (res) {
            console.log(res);
            if (res.status) {
                console.log("THIS IS AN ERROR MESSAGE: " + res);
            }
            else {
                _this._router.navigateByUrl("/");
            }
        });
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-user-login',
            template: __webpack_require__("../../../../../src/app/user/user-login/user-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-login></app-user-login>\r\n<app-user-create></app-user-create>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var UserComponent = /** @class */ (function () {
    function UserComponent(_http) {
        this._http = _http;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-body/show-veh-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-body/show-veh-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"mb-5 mt-3\">{{veh_body.charAt(0).toUpperCase()+veh_body.slice(1)}}</h1>\r\n  <div class=\"veh-bodies\">\r\n    <table class=\"table table-hover\">\r\n      <tr>\r\n        <th scope=\"col\">Make</th>\r\n        <th scope=\"col\">Model</th>\r\n        <th scope=\"col\">Year</th>\r\n        <th scope=\"col\">Trim</th>        \r\n        <th scope=\"col\">Reviews</th>\r\n      </tr>\r\n      <tr class=\"table-light\" *ngFor=\"let veh of bodies| orderBy: 'make'\">\r\n        <td><a href [routerLink]=\"['/vehicle/makeList/', veh.make]\">{{veh.make.charAt(0).toUpperCase()+veh.make.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/modelList/', veh.model]\">{{veh.model.charAt(0).toUpperCase()+veh.model.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/yearList/', veh.year]\">{{veh.year}}</a></td>\r\n        <td>{{veh.type.charAt(0).toUpperCase()+veh.type.slice(1)}}</td>\r\n        <td><a href [routerLink]=\"['/vehicle/view/', veh._id]\">{{veh._reviews.length}}</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-body/show-veh-body.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var vehicle_service_1 = __webpack_require__("../../../../../src/app/server/controllers/vehicle.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ShowVehBodyComponent = /** @class */ (function () {
    function ShowVehBodyComponent(_vS, _route) {
        this._route = _route;
        this._vS = _vS;
    }
    ;
    ShowVehBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) { return _this.veh_body = params.veh_body; });
        this.bodyList();
    };
    ShowVehBodyComponent.prototype.bodyList = function () {
        var _this = this;
        console.log(this.veh_body);
        this._vS.getBody(this.veh_body, function (bodies) { return _this.bodies = bodies; });
    };
    ShowVehBodyComponent = __decorate([
        core_1.Component({
            selector: 'app-show-veh-body',
            template: __webpack_require__("../../../../../src/app/vehicle/show-veh-body/show-veh-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle/show-veh-body/show-veh-body.component.css")]
        }),
        __metadata("design:paramtypes", [vehicle_service_1.VehicleService,
            router_1.ActivatedRoute])
    ], ShowVehBodyComponent);
    return ShowVehBodyComponent;
}());
exports.ShowVehBodyComponent = ShowVehBodyComponent;


/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-make/show-veh-make.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-make/show-veh-make.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <h1 class=\"mb-5 mt-3\">{{veh_make.charAt(0).toUpperCase()+veh_make.slice(1)}}</h1>\r\n  <div class=\"veh-make-list\">\r\n    <table class=\"table table-hover\">\r\n      <tr>\r\n        <th scope=\"col\">Model</th>\r\n        <th scope=\"col\">Body</th>\r\n        <th scope=\"col\">Year</th>\r\n        <th scope=\"col\">Trim</th>\r\n        <th scope=\"col\">Reviews</th>\r\n      </tr>\r\n      <tr class=\"table-light\" *ngFor=\"let veh of makes | orderBy: 'model'\">\r\n        <td scope=\"row\"><a href [routerLink]=\"['/vehicle/modelList/', veh.model]\">{{veh.model.charAt(0).toUpperCase()+veh.model.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/bodyList/', veh.body]\">{{veh.body.charAt(0).toUpperCase()+veh.body.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/yearList/', veh.year]\">{{veh.year}}</a></td>\r\n        <td>{{veh.type.charAt(0).toUpperCase()+veh.type.slice(1)}}</td>\r\n        <td><a href [routerLink]=\"['/vehicle/view/', veh._id]\">{{veh._reviews.length}}</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-make/show-veh-make.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var vehicle_service_1 = __webpack_require__("../../../../../src/app/server/controllers/vehicle.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ShowVehMakeComponent = /** @class */ (function () {
    function ShowVehMakeComponent(_vS, _route) {
        this._route = _route;
        this._vS = _vS;
    }
    ;
    ShowVehMakeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) { return _this.veh_make = params.veh_make; });
        this.makeList();
    };
    ShowVehMakeComponent.prototype.makeList = function () {
        var _this = this;
        console.log(this.veh_make);
        this._vS.getMake(this.veh_make, function (makes) { return _this.makes = makes; });
    };
    ShowVehMakeComponent = __decorate([
        core_1.Component({
            selector: 'app-show-veh-make',
            template: __webpack_require__("../../../../../src/app/vehicle/show-veh-make/show-veh-make.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle/show-veh-make/show-veh-make.component.css")]
        }),
        __metadata("design:paramtypes", [vehicle_service_1.VehicleService,
            router_1.ActivatedRoute])
    ], ShowVehMakeComponent);
    return ShowVehMakeComponent;
}());
exports.ShowVehMakeComponent = ShowVehMakeComponent;


/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-model/show-veh-model.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-model/show-veh-model.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"mb-5 mt-3\">{{veh_model.charAt(0).toUpperCase()+veh_model.slice(1)}}</h1>\r\n  <div class=\"veh-bodies\">\r\n    <table class=\"table table-hover\">\r\n      <tr>\r\n        <th scope=\"col\">Make</th>\r\n        <th scope=\"col\">Body</th>\r\n        <th scope=\"col\">Year</th>\r\n        <th scope=\"col\">Trim</th>\r\n        <th scope=\"col\">Reviews</th>\r\n      </tr>\r\n      <tr class=\"table-light\" *ngFor=\"let veh of models | orderBy: 'make':true\">\r\n        <td><a href [routerLink]=\"['/vehicle/makeList/', veh.make]\">{{veh.make.charAt(0).toUpperCase()+veh.make.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/bodyList/', veh.body]\">{{veh.body.charAt(0).toUpperCase()+veh.body.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/yearList/', veh.year]\">{{veh.year}}</a></td>\r\n        <td>{{veh.type.charAt(0).toUpperCase()+veh.type.slice(1)}}</td>\r\n        <td><a href [routerLink]=\"['/vehicle/view/', veh._id]\">{{veh._reviews.length}}</a></td>\r\n        \r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-model/show-veh-model.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var vehicle_service_1 = __webpack_require__("../../../../../src/app/server/controllers/vehicle.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ShowVehModelComponent = /** @class */ (function () {
    function ShowVehModelComponent(_vS, _route) {
        this._route = _route;
        this._vS = _vS;
    }
    ;
    ShowVehModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) { return _this.veh_model = params.veh_model; });
        this.modelList();
    };
    ShowVehModelComponent.prototype.modelList = function () {
        var _this = this;
        console.log(this.veh_model);
        this._vS.getModel(this.veh_model, function (models) { return _this.models = models; });
    };
    ShowVehModelComponent = __decorate([
        core_1.Component({
            selector: 'app-show-veh-model',
            template: __webpack_require__("../../../../../src/app/vehicle/show-veh-model/show-veh-model.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle/show-veh-model/show-veh-model.component.css")]
        }),
        __metadata("design:paramtypes", [vehicle_service_1.VehicleService,
            router_1.ActivatedRoute])
    ], ShowVehModelComponent);
    return ShowVehModelComponent;
}());
exports.ShowVehModelComponent = ShowVehModelComponent;


/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-year/show-veh-year.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-year/show-veh-year.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"mb-5 mt-3\">{{veh_year}}</h1>\r\n  <div class=\"veh-years\">\r\n    <table class=\"table table-hover\">\r\n      <tr>\r\n        <th scope=\"col\">Make</th>\r\n        <th scope=\"col\">Model</th>\r\n        <th scope=\"col\">Body</th>\r\n        <th scope=\"col\">Trim</th>\r\n        <th scope=\"col\">Reviews</th>\r\n      </tr>\r\n      <tr class=\"table-light\" *ngFor=\"let veh of years | orderBy: 'make'\" >\r\n        <td><a href [routerLink]=\"['/vehicle/makeList/', veh.make]\">{{veh.make.charAt(0).toUpperCase()+veh.make.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/modelList/', veh.model]\">{{veh.model.charAt(0).toUpperCase()+veh.model.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/bodyList/', veh.body]\">{{veh.body.charAt(0).toUpperCase()+veh.body.slice(1)}}</a></td>\r\n        <td *ngIf=\"veh.type != null\">{{veh.type.charAt(0).toUpperCase()+veh.type.slice(1)}}</td>\r\n        <td *ngIf=\"veh.type == null\" class=\"text-muted\">No Trim</td>\r\n        <td><a href [routerLink]=\"['/vehicle/view/', veh._id]\">{{veh._reviews.length}}</a></td>\r\n        \r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vehicle/show-veh-year/show-veh-year.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var vehicle_service_1 = __webpack_require__("../../../../../src/app/server/controllers/vehicle.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ShowVehYearComponent = /** @class */ (function () {
    function ShowVehYearComponent(_vS, _route) {
        this._route = _route;
        this._vS = _vS;
    }
    ;
    ShowVehYearComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) { return _this.veh_year = params.veh_year; });
        this.yearList();
    };
    ShowVehYearComponent.prototype.yearList = function () {
        var _this = this;
        console.log(this.veh_year);
        this._vS.getYear(this.veh_year, function (years) { return _this.years = years; });
    };
    ShowVehYearComponent = __decorate([
        core_1.Component({
            selector: 'app-show-veh-year',
            template: __webpack_require__("../../../../../src/app/vehicle/show-veh-year/show-veh-year.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle/show-veh-year/show-veh-year.component.css")]
        }),
        __metadata("design:paramtypes", [vehicle_service_1.VehicleService,
            router_1.ActivatedRoute])
    ], ShowVehYearComponent);
    return ShowVehYearComponent;
}());
exports.ShowVehYearComponent = ShowVehYearComponent;


/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle-create/vehicle-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n    /* display: inline-flex; */\r\n    width: 1000px;\r\n    margin: auto;\r\n    /* background-color: gray; */\r\n}\r\n\r\n/* .veh-build{\r\n    width: 400px;\r\n} */\r\n\r\n#veh-build-form {\r\n    width: 1000px;\r\n    /* background-color: rgb(48, 48, 48); */\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\nform{\r\n    width: 800px;\r\n    margin: auto;\r\n}\r\n\r\n.errors{\r\n    color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle-create/vehicle-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"veh-build\">\r\n    <h2 class=\"m-4 text-center\">Build Vehicle</h2>\r\n    <form (submit)=\"buildVeh()\" name=\"buildVeh\" class=\"m-5\">\r\n      <div class=\"img-upload my-3\">\r\n        <p class=\"text-muted\">*Add an Image</p>\r\n          <image-upload buttonCaption=\"Add a Image\" dropBoxMessage=\"10Mb Limit\" [max]=\"1\" [maxFileSize]=\"1000000000\" (uploadFinished)=\"onUploadStatus($event)\"></image-upload>\r\n      </div>\r\n      <div id=\"veh-build-form\">\r\n        <div class=\"paras\">\r\n          <p class=\"veh-make\"><input type=\"text\" placeholder=\"*Make\" name=\"make\" required [(ngModel)]=\"vehicle.make\"></p>\r\n          <p class=\"veh-model\"><input type=\"text\" placeholder=\"*Model\" name=\"model\" required [(ngModel)]=\"vehicle.model\"></p>\r\n          <p class=\"veh-type\"><input type=\"text\" placeholder=\"Trim (optional)\" name=\"type\" [(ngModel)]=\"vehicle.type\"></p>\r\n          <p class=\"veh-year\"><input type=\"text\" placeholder=\"*Year\" required name=\"year\"[(ngModel)]=\"vehicle.year\"></p>\r\n        </div>\r\n        <div class=\"form-table\" class=\"mx-5\">\r\n          <p class=\"veh-body lead\">Body Style: </p>\r\n          <table class=table>\r\n            <tr>\r\n              <td><input type=\"radio\"[(ngModel)]=\"vehicle.body\" name=\"body\" value=\"convertible\" checked> Convertible</td>\r\n              <td><input type=\"radio\"[(ngModel)]=\"vehicle.body\" name=\"body\" value=\"coupe\"> Coupe</td>\r\n              <td><input type=\"radio\"[(ngModel)]=\"vehicle.body\" name=\"body\" value=\"hatchback\"> Hatchback</td>\r\n            </tr>\r\n            <tr>\r\n              <td><input type=\"radio\"[(ngModel)]=\"vehicle.body\" name=\"body\" value=\"sedan\"> Sedan</td>\r\n              <td><input type=\"radio\"[(ngModel)]=\"vehicle.body\" name=\"body\" value=\"suv/crossover\"> SUV/Crossover</td>\r\n              <td><input type=\"radio\"[(ngModel)]=\"vehicle.body\" name=\"body\" value=\"truck\"> Truck</td>\r\n            </tr>\r\n            <tr>\r\n              <td><input type=\"radio\"[(ngModel)]=\"vehicle.body\" name=\"body\" value=\"van\"> Van</td>\r\n              <td><input type=\"radio\"[(ngModel)]=\"vehicle.body\" name=\"body\" value=\"wagon\"> Wagon</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <br>\r\n        <!-- <div class=\"optionals\">\r\n          <p class=\"veh-eng-size\"><input type=\"text\" placeholder=\"Engine Size (optional)\" [(ngModel)]=\"vehicle.engineSize\" name=\"engineSize\"></p>\r\n          <p class=\"veh-hp\"><input type=\"text\" placeholder=\"Horpsepower (optional)\" [(ngModel)]=\"vehicle.hp\" name=\"hp\"></p>\r\n        </div> -->\r\n      </div>\r\n      <p class=\"mb-5\"><button type=\"submit\" class=\"btn btn-primary float-right\">Submit</button></p>\r\n    </form>\r\n    <p *ngIf=\"errors.length > 0\" class=\"errors\">{{errors}}</p>\r\n  </div>\r\n  <div class=\"recent_builds\">\r\n    <h3 class=\"my-4\">Recent Vehicle Builds</h3>\r\n    <table class=\"table table-hover\">\r\n      <tr>\r\n        <th scope=\"col\">Make</th>\r\n        <th scope=\"col\">Model</th>\r\n        <th scope=\"col\">Year</th>\r\n        <th scope=\"col\">Body</th>\r\n        <th scope=\"col\">Trim</th>\r\n      </tr>\r\n      <tr class=\"veh-list\" *ngFor=\"let veh of vehicles | orderBy: 'createdAt':true | slice: 0:10; let i=index\">\r\n        <td><a href [routerLink]=\"['/vehicle/makeList/', veh.make]\">{{veh.make.charAt(0).toUpperCase()+veh.make.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/modelList/', veh.model]\">{{veh.model.charAt(0).toUpperCase()+veh.model.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/yearList/', veh.year]\">{{veh.year}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/bodyList/', veh.body]\">{{veh.body.charAt(0).toUpperCase()+veh.body.slice(1)}}</a></td>\r\n        <td *ngIf=\"veh.type != null\">{{veh.type.charAt(0).toUpperCase()+veh.type.slice(1)}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle-create/vehicle-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var vehicle_service_1 = __webpack_require__("../../../../../src/app/server/controllers/vehicle.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var vehicle_1 = __webpack_require__("../../../../../src/app/server/models/vehicle.ts");
var VehicleCreateComponent = /** @class */ (function () {
    function VehicleCreateComponent(_vS, _router) {
        this.currentUser = null;
        this.errors = [];
        this._vS = _vS;
        this.vehicle = new vehicle_1.Vehicle;
        this._router = _router;
    }
    VehicleCreateComponent.prototype.ngOnInit = function () {
        this.currentUser;
        this.vehList();
    };
    VehicleCreateComponent.prototype.buildVeh = function () {
        var _this = this;
        // this.vehicle['type']=data.type
        console.log("SUB-COMPONENT: ATTEMPTING TO BUILD VEHICLE:\n", this.vehicle);
        this._vS.createVehicle(this.vehicle).subscribe(
        // res => this.vehList(),
        // error => console.log(error)
        function (res) {
            if (res.json().error) {
                console.log(res.json().error);
                _this.errors.length = 0;
                _this.errors.push("Vehicle already on record");
                console.log(_this.errors);
            }
            else {
                _this.errors.pop();
                _this.vehList();
            }
        });
    };
    VehicleCreateComponent.prototype.onUploadStatus = function ($event) {
        this.vehicle = $event;
    };
    VehicleCreateComponent.prototype.vehList = function () {
        var _this = this;
        console.log("SUBCOMPONENT: SENDING REQUEST TO SERVICE FOR LIST OF VEHICLES");
        document.forms["buildVeh"].reset();
        return this._vS.vehIndex(function (vehicles) { return _this.vehicles = vehicles; });
    };
    VehicleCreateComponent.prototype.inSession = function () {
        var _this = this;
        this._uS.getUser().subscribe(function (res) {
            console.log(res.json(), "LOGGED IN");
            _this.currentUser = res.json();
        });
    };
    VehicleCreateComponent.prototype.uploadImg = function (data) {
    };
    VehicleCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-vehicle-create',
            template: __webpack_require__("../../../../../src/app/vehicle/vehicle-create/vehicle-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle/vehicle-create/vehicle-create.component.css")]
        }),
        __metadata("design:paramtypes", [vehicle_service_1.VehicleService,
            router_1.Router])
    ], VehicleCreateComponent);
    return VehicleCreateComponent;
}());
exports.VehicleCreateComponent = VehicleCreateComponent;


/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle-show-all/vehicle-show-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search_props{\r\n    margin-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle-show-all/vehicle-show-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"my-4\">Vehicle Index</h1>\r\n  <div class=\"veh-all\">\r\n    <table class=\"table table-hover\">\r\n      <tr>\r\n        <td><input class=\"mr-3\" [(ngModel)] = \"makeSearch\" placeholder=\"Make\"></td>\r\n        <td><input class=\"mr-3\" [(ngModel)] = \"modelSearch\" placeholder=\"Model\"></td>\r\n        <td><input  [(ngModel)] = \"yearSearch\" placeholder=\"Year\"></td>\r\n        <td><input class=\"mr-3\" [(ngModel)] = \"bodySearch\" placeholder=\"Body\"></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <th scope=\"col\">Make</th>\r\n        <th scope=\"col\">Model</th>\r\n        <th scope=\"col\">Year</th>\r\n        <th scope=\"col\">Body</th>\r\n        <th scope=\"col\">Reviews</th>\r\n      </tr>\r\n      <tr class=\"table-light\" *ngFor=\"let veh of vehicles | search: makeSearch:'make' | search: modelSearch: 'model' | search: bodySearch:'body' | search: yearSearch:'year'\">\r\n        <td><a href [routerLink]=\"['/vehicle/makeList/', veh.make]\">{{veh.make.charAt(0).toUpperCase()+veh.make.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/modelList/', veh.model]\">{{veh.model.charAt(0).toUpperCase()+veh.model.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/yearList/', veh.year]\">{{veh.year}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/bodyList/', veh.body]\">{{veh.body.charAt(0).toUpperCase()+veh.body.slice(1)}}</a></td>\r\n        <td><a href [routerLink]=\"['/vehicle/view/', veh._id]\">{{veh._reviews.length}}</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle-show-all/vehicle-show-all.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var vehicle_service_1 = __webpack_require__("../../../../../src/app/server/controllers/vehicle.service.ts");
var VehicleShowAllComponent = /** @class */ (function () {
    function VehicleShowAllComponent(_router, _uS, _http, _vS) {
        this.currentUser = null;
        this._uS = _uS;
        this._http = _http;
        this._router = _router;
        this._vS = _vS;
    }
    VehicleShowAllComponent.prototype.ngOnInit = function () {
        this.vehList();
    };
    VehicleShowAllComponent.prototype.vehList = function () {
        var _this = this;
        console.log("SUBCOMPONENT: SENDING REQUEST TO SERVICE FOR LIST OF VEHICLES");
        this._vS.vehIndex(function (vehicles) { return _this.vehicles = vehicles; });
    };
    VehicleShowAllComponent = __decorate([
        core_1.Component({
            selector: 'app-vehicle-show-all',
            template: __webpack_require__("../../../../../src/app/vehicle/vehicle-show-all/vehicle-show-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle/vehicle-show-all/vehicle-show-all.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService,
            http_1.Http,
            vehicle_service_1.VehicleService])
    ], VehicleShowAllComponent);
    return VehicleShowAllComponent;
}());
exports.VehicleShowAllComponent = VehicleShowAllComponent;


/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle-show-one/vehicle-show-one.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    width: 100%\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle-show-one/vehicle-show-one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2 class=\"my-3\">{{ vehicle.year }} {{vehicle.make.charAt(0).toUpperCase()+vehicle.make.slice(1) }} {{vehicle.model.charAt(0).toUpperCase()+vehicle.model.slice(1)}}</h2>\r\n    <div *ngFor=\"let avgRating of vehicle._reviews.rating; let i=index;\">\r\n\r\n\r\n    </div>\r\n    <img class=\"veh-rep\" src=\"{{vehicle.src}}\">\r\n    \r\n    <div class=\"veh-reviews my-3\">\r\n        <div *ngIf=\"currentUser == null\">\r\n            <p><a href [routerLink]=\"['/registration']\">Sign up</a>/login to write a review</p>\r\n        </div>\r\n        <div class=\"write-review\" *ngIf=\"currentUser != null\">\r\n            <p>Write your review <a href [routerLink]=\"['/review/new/',vehicle._id]\">here</a>!</p>\r\n        </div>\r\n        <div *ngFor=\"let review of vehicle._reviews | orderBy: 'createdAt':true\">\r\n            <h2><a class=\"one-review\" href [routerLink]=\"['/review/view/',review._id]\">{{review.description}}</a></h2>Rating: {{review.rating}}/5\r\n            <p class=\"text-muted\">{{review.content.slice(0,300)}}...</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle-show-one/vehicle-show-one.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var vehicle_1 = __webpack_require__("../../../../../src/app/server/models/vehicle.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var vehicle_service_1 = __webpack_require__("../../../../../src/app/server/controllers/vehicle.service.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var VehicleShowOneComponent = /** @class */ (function () {
    function VehicleShowOneComponent(_router, _route, _uS, _vS, _rS) {
        this._router = _router;
        this._route = _route;
        this._uS = _uS;
        this._vS = _vS;
        this._rS = _rS;
        this.vehicle = new vehicle_1.Vehicle;
        this.currentUser = null;
    }
    VehicleShowOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) { return _this.veh_id = params.veh_id; });
        this.getOneVeh();
        this.currentUser;
        this.inSession();
        this.avgRating;
    };
    VehicleShowOneComponent.prototype.getOneVeh = function () {
        var _this = this;
        console.log("SUBCOMPONENT: SENDING INFO TO SERVICE");
        this._vS.getOneVeh(this.veh_id, function (vehicle) { return _this.vehicle = vehicle; });
    };
    VehicleShowOneComponent.prototype.inSession = function () {
        var _this = this;
        this._uS.getUser().subscribe(function (res) {
            console.log(res.json(), "IS LOGGED IN");
            _this.currentUser = res.json();
            console.log("NAVIGATION", _this.currentUser);
        });
    };
    VehicleShowOneComponent = __decorate([
        core_1.Component({
            selector: 'app-vehicle-show-one',
            template: __webpack_require__("../../../../../src/app/vehicle/vehicle-show-one/vehicle-show-one.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle/vehicle-show-one/vehicle-show-one.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            user_service_1.UserService,
            vehicle_service_1.VehicleService,
            question_service_1.QuestionService])
    ], VehicleShowOneComponent);
    return VehicleShowOneComponent;
}());
exports.VehicleShowOneComponent = VehicleShowOneComponent;


/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vehicle works!\r\n</p>\r\n<app-vehicle-create></app-vehicle-create>\r\n<app-vehicle-show-all></app-vehicle-show-all>"

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var VehicleComponent = /** @class */ (function () {
    function VehicleComponent(_userService) {
        this._userService = _userService;
        this.currentUser = null;
    }
    VehicleComponent.prototype.ngOnInit = function () {
    };
    VehicleComponent.prototype.inSession = function () {
        var _this = this;
        this._userService.getUser().subscribe(function (res) {
            console.log(res.json(), "IS LOGGED IN");
            _this.currentUser = res.json();
            console.log(_this.currentUser);
        });
    };
    VehicleComponent = __decorate([
        core_1.Component({
            selector: 'app-vehicle',
            template: __webpack_require__("../../../../../src/app/vehicle/vehicle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle/vehicle.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], VehicleComponent);
    return VehicleComponent;
}());
exports.VehicleComponent = VehicleComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map