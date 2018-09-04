(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-videos/all-videos.component.html":
/*!******************************************************!*\
  !*** ./src/app/all-videos/all-videos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxFlex>\n  <mat-grid-list cols=\"3\" rowHeight=\"150px\" *ngIf=\"listResults\" fxFlex>\n    <mat-grid-tile *ngFor=\"let item of listResults.items\" fxLayout=\"column\">\n      <div fxFlex=\"40\">\n        <img matListAvatar class=\"thumb\" \n            src={{item.snippet.thumbnails.default.url}} \n            alt={{item.snippet.title}}>\n      </div>\n      <div fxFlex=\"60\">\n        <h4 class=\"text3p\">{{item.snippet.title}}</h4>\n        <p>X views</p>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <div [hidden]=\"listResults\" fxFlex=\"100%\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/all-videos/all-videos.component.scss":
/*!******************************************************!*\
  !*** ./src/app/all-videos/all-videos.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumb {\n  width: 120px !important;\n  height: 90px !important;\n  border-radius: 0 !important; }\n\n.text3p {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n"

/***/ }),

/***/ "./src/app/all-videos/all-videos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/all-videos/all-videos.component.ts ***!
  \****************************************************/
/*! exports provided: AllVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllVideosComponent", function() { return AllVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/list-video.service */ "./src/app/services/list-video.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllVideosComponent = /** @class */ (function () {
    function AllVideosComponent(ListVideoService) {
        var _this = this;
        this.ListVideoService = ListVideoService;
        this.listVideo = function () {
            _this.ListVideoService.listVideo().subscribe(function (response) {
                _this.listResults = response;
                console.log(_this.listResults);
            }, function (error) {
                alert("Error: " + error.statusText);
            });
        };
    }
    AllVideosComponent.prototype.ngOnInit = function () {
        this.listVideo();
    };
    AllVideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-videos',
            template: __webpack_require__(/*! ./all-videos.component.html */ "./src/app/all-videos/all-videos.component.html"),
            styles: [__webpack_require__(/*! ./all-videos.component.scss */ "./src/app/all-videos/all-videos.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_list_video_service__WEBPACK_IMPORTED_MODULE_1__["ListVideoService"]])
    ], AllVideosComponent);
    return AllVideosComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all-videos/all-videos.component */ "./src/app/all-videos/all-videos.component.ts");
/* harmony import */ var _featured_featured_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../featured/featured.component */ "./src/app/featured/featured.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ "./src/app/search/search.component.ts");



var routes = [
    { path: 'featured', component: _featured_featured_component__WEBPACK_IMPORTED_MODULE_1__["FeaturedComponent"] },
    { path: 'all-videos', component: _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_0__["AllVideosComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], data: { title: 'Youtube Search' } },
    { path: 'search/:query', component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], data: { title: 'Youtube Search' } },
    { path: '', redirectTo: '/featured', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _featured_featured_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./featured/featured.component */ "./src/app/featured/featured.component.ts");
/* harmony import */ var _services_list_video_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/list-video.service */ "./src/app/services/list-video.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./all-videos/all-videos.component */ "./src/app/all-videos/all-videos.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./video-modal/video-modal.component */ "./src/app/video-modal/video-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _featured_featured_component__WEBPACK_IMPORTED_MODULE_17__["FeaturedComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_22__["SearchComponent"],
                _all_videos_all_videos_component__WEBPACK_IMPORTED_MODULE_23__["AllVideosComponent"],
                _video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_26__["VideoModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"]
            ],
            providers: [_services_list_video_service__WEBPACK_IMPORTED_MODULE_18__["ListVideoService"], _services_search_service__WEBPACK_IMPORTED_MODULE_19__["SearchService"]],
            entryComponents: [_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_26__["VideoModalComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/featured/featured.component.html":
/*!**************************************************!*\
  !*** ./src/app/featured/featured.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\"\n     fxLayoutAlign.gt-md=\"space-around center\"\n     fxLayoutGap=\"10px\">\n  \n  <mat-card class=\"tiltil\" fxFlex=\"60%\" *ngIf=\"featuredVideo\">\n      <mat-card-header>\n          <mat-card-title><h2>Vídeo em destaque</h2></mat-card-title>\n      </mat-card-header>\n      <!--<img mat-card-image [src]=\"featuredVideo.snippet.thumbnails.default.url\" alt=\"vídeo\">-->\n      <mat-card-content>\n        <div fxLayoutAlign=\"center center\">\n          <iframe id=\"ytplayer\" type=\"text/html\" width=\"480\" height=\"270\"\n          [src]=\"srcYoutube\" frameborder=\"0\"></iframe>\n        </div>\n        <mat-card class=\"tiltil\">\n          <mat-card-title-group>\n            <mat-card-title>{{featuredVideo.snippet.title}}</mat-card-title>\n            <mat-icon>visibility</mat-icon>\n            <mat-icon matTooltipPosition=\"above\"\n                      matTooltip=\"{{featuredVideo.snippet.publishedAt | date:'dd MMMM yyyy' }}\"\n                      >access_time</mat-icon>\n          </mat-card-title-group>\n          <mat-card-content>\n            <p>{{featuredVideo.snippet.description}}</p>  \n          </mat-card-content>\n        </mat-card>\n          \n      </mat-card-content>\n  </mat-card>\n  <div [hidden]=\"featuredVideo\" fxFlex=\"60%\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  \n  <mat-card class=\"over-auto tiltil\" fxFlex=\"40%\" *ngIf=\"listResults\">\n    <mat-card-header>\n      <mat-card-title><h2>+ Vídeos</h2></mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n     <mat-list class=\"tiltil\">\n        <mat-list-item *ngFor=\"let item of listResults.items\" (click) = \"onSelect(item)\">\n          <img matListAvatar class=\"thumb\" src={{item.snippet.thumbnails.default.url}} alt={{item.snippet.title}}>\n          <h2 matLine>{{item.snippet.title}}</h2>\n          <p matLine fxLayoutAlign=\"start center\"><mat-icon>visibility</mat-icon> views</p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card-content>\n  </mat-card>\n  <div [hidden]=\"listResults\" fxFlex=\"40%\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/featured/featured.component.scss":
/*!**************************************************!*\
  !*** ./src/app/featured/featured.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumb {\n  width: 120px !important;\n  height: 90px !important;\n  border-radius: 0 !important; }\n\n.over-auto {\n  max-height: 550px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/featured/featured.component.ts":
/*!************************************************!*\
  !*** ./src/app/featured/featured.component.ts ***!
  \************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_list_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/list-video.service */ "./src/app/services/list-video.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent(ListVideoService, sanitizer) {
        var _this = this;
        this.ListVideoService = ListVideoService;
        this.sanitizer = sanitizer;
        this.origin = 'https://ang4-projects-felipe007.c9users.io/featured';
        this.listVideo = function () {
            _this.ListVideoService.listVideo().subscribe(function (response) {
                var videoId = '';
                var preURL = '';
                _this.listResults = response;
                console.log(_this.listResults);
                _this.featuredVideo = _this.listResults.items[0];
                videoId = _this.featuredVideo.contentDetails.videoId;
                preURL = 'https://www.youtube.com/embed/' + videoId
                    + '?autoplay=1&origin=' + _this.origin;
                _this.srcYoutube = _this.sanitizer.bypassSecurityTrustResourceUrl(preURL);
                console.log(_this.featuredVideo);
                //console.log("url yt: "+this.srcYoutube);
            }, function (error) {
                alert("Error: " + error.statusText);
            });
        };
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        this.listVideo();
    };
    FeaturedComponent.prototype.onSelect = function (item) {
        var videoId = '';
        var preURL = '';
        this.featuredVideo = item;
        videoId = this.featuredVideo.contentDetails.videoId;
        preURL = 'https://www.youtube.com/embed/' + videoId
            + '?autoplay=1&origin=' + this.origin;
        this.srcYoutube = this.sanitizer.bypassSecurityTrustResourceUrl(preURL);
    };
    FeaturedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-featured',
            template: __webpack_require__(/*! ./featured.component.html */ "./src/app/featured/featured.component.html"),
            styles: [__webpack_require__(/*! ./featured.component.scss */ "./src/app/featured/featured.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_list_video_service__WEBPACK_IMPORTED_MODULE_2__["ListVideoService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], FeaturedComponent);
    return FeaturedComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n  <mat-toolbar class=\"bg-wine tiltil\" color=\"primary\">\n    <span fxFlex fxLayoutAlign=\"start center\">Fictícia Vídeos</span>\n    \n    <form>\n      <mat-form-field>\n        <input matInput name=\"query\" type=\"search\" placeholder=\"\" [(ngModel)]=\"searchQuery\" (keyup.enter)=\"sendQuery()\">\n        <mat-icon class=\"size-icon\" matSuffix>search</mat-icon>\n      </mat-form-field>\n    </form>\n    \n    <button mat-button [matMenuTriggerFor]=\"menu\" fxflex fxLayoutAlign=\"end center\">\n        <span>Menu </span>\n        <mat-icon>menu</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <a mat-menu-item routerLink=\"/featured\">Destaques</a>\n      <a mat-menu-item routerLink=\"/all-videos\">Vídeos</a>\n    </mat-menu>\n  \n  </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-wine {\n  background-color: #A7395C; }\n\n.size-icon {\n  font-size: 125% !important; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(SearchService, route, router) {
        var _this = this;
        this.SearchService = SearchService;
        this.route = route;
        this.router = router;
        this.searchVideos = function () {
            _this.route.paramMap.subscribe(function (params) {
                _this.searchQuery = params.get('query');
                _this.displayQuery = params.get('query');
                console.log("query: " + _this.searchQuery);
                _this.SearchService.searchVideos(_this.searchQuery).subscribe(function (response) {
                    _this.searchResults = response;
                    console.log(_this.searchResults);
                }, function (error) {
                    alert("Error: " + error.statusText);
                });
            });
            _this.route.data.subscribe(function (result) {
                _this.title = result.title;
                console.log("title query: " + _this.title);
            });
        };
        this.sendQuery = function () {
            _this.searchResults = null;
            _this.router.navigate(['/search/' + _this.searchQuery]);
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\">\n  <h3>Resultados para: \"{{displayQuery}}\"</h3>\n</div>\n<div class=\"container\" fxLayout=\"row\">\n  <mat-grid-list cols=\"3\" rowHeight=\"150px\" *ngIf=\"searchResults\" fxFlex>\n    <mat-grid-tile *ngFor=\"let item of searchResults.items\" \n                   fxLayout=\"column\" (click)=\"openLoginForm(item)\">\n      <div fxFlex=\"40\">\n        <img matListAvatar class=\"thumb\"\n            src={{item.snippet.thumbnails.default.url}} \n            alt={{item.snippet.title}}>\n      </div>\n      <div fxFlex=\"60\">\n        <h4 class=\"text3p\">{{item.snippet.title}}</h4>\n        <p fxLayoutAlign=\"start center\"><mat-icon>visibility</mat-icon> views</p>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <div [hidden]=\"searchResults\" fxFlex=\"100%\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumb {\n  width: 120px !important;\n  height: 90px !important;\n  border-radius: 0 !important; }\n\n.text3p {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../video-modal/video-modal.component */ "./src/app/video-modal/video-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(SearchService, route, router, dialog) {
        var _this = this;
        this.SearchService = SearchService;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.searchVideos = function () {
            _this.SearchService.searchVideos(_this.searchQuery).subscribe(function (response) {
                _this.searchResults = response;
                console.log(_this.searchResults);
            }, function (error) {
                alert("Error: " + error.statusText);
            });
        };
        // Modal
        this.openLoginForm = function (item) {
            var videoId = item.id.videoId;
            var description = item.snippet.description;
            var title = item.snippet.title;
            var publishedAt = item.snippet.publishedAt;
            _this.dialog.open(_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_4__["VideoModalComponent"], { width: '550px',
                height: '450px',
                data: { videoId: videoId,
                    description: description,
                    title: title,
                    publishedAt: publishedAt }
            });
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        //this.searchQuery = 'brasil';
        //this.searchVideos();
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.searchQuery = params.get('query');
            _this.displayQuery = params.get('query');
            _this.searchVideos();
        });
        this.route.data.subscribe(function (result) {
            _this.title = result.title;
            console.log("title query: " + _this.title);
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/list-video.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/list-video.service.ts ***!
  \************************************************/
/*! exports provided: ListVideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVideoService", function() { return ListVideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListVideoService = /** @class */ (function () {
    function ListVideoService(http) {
        var _this = this;
        this.http = http;
        //cachedValue: string;
        this.baseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=id%2Csnippet%2CcontentDetails%2Cstatus&maxResults=12&playlistId=UUkJ8uPxz6UvoI6ihgQJZnww&fields=items(contentDetails%2FvideoId%2Cid%2Csnippet(publishedAt%2CchannelId%2CchannelTitle%2Cdescription%2CplaylistId%2Cthumbnails%2Fdefault%2Ctitle))&key=AIzaSyDRtPUX4hJm-97dpJ-aiazRQEFguNq0Q_U';
        this.listVideo = function () {
            return _this.http.get(_this.baseUrl);
        };
    }
    ListVideoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListVideoService);
    return ListVideoService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRtPUX4hJm-97dpJ-aiazRQEFguNq0Q_U&channelId=UCkJ8uPxz6UvoI6ihgQJZnww&part=id%2Csnippet&maxResults=10&order=date&type=video&q=';
        this.searchVideos = function (query) {
            return _this.http.get(_this.baseUrl + query);
        };
    }
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/video-modal/video-modal.component.html":
/*!********************************************************!*\
  !*** ./src/app/video-modal/video-modal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n  <span class=\"flex-spacer\"></span>\n  <button class=\"close-btn\" mat-button mat-icon-button mat-dialog-close>\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n<iframe id=\"ytplayer\" type=\"text/html\" width=\"480\" height=\"270\"\n              [src]=\"srcYoutube\" frameborder=\"0\"></iframe>\n<div fxLayout=\"row\">\n<p fxFlex>{{data.title}}</p>\n<mat-icon fxLayoutAlign=\"end center\">visibility</mat-icon>\n<mat-icon fxLayoutAlign=\"end center\"\n          matTooltipPosition=\"above\"\n          matTooltip=\"{{data.publishedAt | date:'dd MMMM yyyy' }}\">access_time</mat-icon>\n</div>              \n<p>{{data.publishedAt}}</p>\n<p>{{data.description}}</p>\n"

/***/ }),

/***/ "./src/app/video-modal/video-modal.component.scss":
/*!********************************************************!*\
  !*** ./src/app/video-modal/video-modal.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close-btn {\n  color: red;\n  background-color: white; }\n  .close-btn:hover {\n    color: white;\n    background-color: red; }\n"

/***/ }),

/***/ "./src/app/video-modal/video-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/video-modal/video-modal.component.ts ***!
  \******************************************************/
/*! exports provided: VideoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModalComponent", function() { return VideoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var VideoModalComponent = /** @class */ (function () {
    function VideoModalComponent(data, sanitizer) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.origin = 'https://ang4-projects-felipe007.c9users.io/featured';
    }
    VideoModalComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        var preURL = 'https://www.youtube.com/embed/' + this.data.videoId
            + '?autoplay=1&origin=' + this.origin;
        this.srcYoutube = this.sanitizer.bypassSecurityTrustResourceUrl(preURL);
    };
    VideoModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-modal',
            template: __webpack_require__(/*! ./video-modal.component.html */ "./src/app/video-modal/video-modal.component.html"),
            styles: [__webpack_require__(/*! ./video-modal.component.scss */ "./src/app/video-modal/video-modal.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideoModalComponent);
    return VideoModalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/workspace/displaycha/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map