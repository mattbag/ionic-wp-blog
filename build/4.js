webpackJsonp([4],{

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(596);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { DummyComponent } from './../../components/dummy/dummy';



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_wp__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_pages__ = __webpack_require__(586);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Observable } from 'rxjs/Observable';




var HomePage = (function () {
    // isLoaded: boolean;
    function HomePage(navCtrl, wpProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wpProvider = wpProvider;
        this.loadingCtrl = loadingCtrl;
        this.presentLoading();
        var _latest = this.wpProvider.getPosts();
        // this.posts = this.wpProvider.getPostsPage();
        _latest.subscribe(function (data) {
            _this.posts = data;
            _this.loader.dismiss();
        });
        this.cats = __WEBPACK_IMPORTED_MODULE_3__app_app_pages__["a" /* default */].cats;
    }
    HomePage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/logo.gif\">"
        });
        this.loader.present();
    };
    HomePage.prototype.openPost = function (post) {
        this.navCtrl.push('PostPage', { post: post });
    };
    HomePage.prototype.goBlog = function () {
        this.navCtrl.setRoot('BlogPage');
    };
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component, { page: page });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/tbi-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>The Beauty Insider</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let post of posts" (click)="openPost(post)" tappable>\n\n    <img [src]="post?.images.source_url" *ngIf="post?.images.source_url">\n    <ion-card-content>\n      <ion-card-title>\n        <div [innerHTML]="post.title"></div>\n      </ion-card-title>\n      <!-- <p>{{post?.excerpt}}</p> -->\n      <div [innerHTML]="post.excerpt"></div>\n    </ion-card-content>\n  </ion-card>\n  <div (click)="goBlog()" tappable class="card-blog">\n\n    <img src="assets/logo.gif" width="60%">\n    <button ion-button color="secondary">Check the blog</button>\n\n  </div>\n\n  <ion-list style="margin-bottom:0">\n    <ion-list-header>\n      Categories\n    </ion-list-header>\n    <ion-item *ngFor="let cat of cats" (click)="openPage(cat)">\n      <ion-icon name="star" item-start></ion-icon>\n      {{cat.title}}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/tbi-app/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_wp_wp__["a" /* WpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_wp_wp__["a" /* WpProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map