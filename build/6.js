webpackJsonp([6],{

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog__ = __webpack_require__(594);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogPageModule = (function () {
    function BlogPageModule() {
    }
    return BlogPageModule;
}());
BlogPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__blog__["a" /* BlogPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog__["a" /* BlogPage */]),
        ],
    })
], BlogPageModule);

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_wp__ = __webpack_require__(133);
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



var BlogPage = (function () {
    function BlogPage(navCtrl, wpProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wpProvider = wpProvider;
        this.loadingCtrl = loadingCtrl;
        this.post_page = 1;
        this.presentLoading();
        // this.posts = this.wpProvider.getPosts();
        var _posts = this.wpProvider.getPostsPage(this.post_page);
        _posts.subscribe(function (data) {
            _this.loader.dismiss();
            // console.log(data);
            _this.posts = data.slice();
            _this.post_page++;
        });
    }
    BlogPage.prototype.doInfinite = function (event) {
        var _this = this;
        console.log('get more posts');
        var newPosts = this.wpProvider.getPostsPage(this.post_page);
        newPosts.subscribe(function (data) {
            (_a = _this.posts).push.apply(_a, data);
            // console.log(data);
            _this.post_page++;
            event.complete();
            var _a;
        });
    };
    BlogPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/logo.gif\">"
        });
        this.loader.present();
    };
    BlogPage.prototype.openPost = function (post) {
        this.navCtrl.push('PostPage', { post: post });
    };
    return BlogPage;
}());
BlogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-blog',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/tbi-app/src/pages/blog/blog.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Blog</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let post of posts" (click)="openPost(post)" tappable>\n    <img [src]="post?.images.source_url" *ngIf="post?.images.source_url">\n    <ion-card-content>\n      <ion-card-title>\n<div [innerHTML]="post?.title"></div>\n      </ion-card-title>\n      <div [innerHTML]="post?.excerpt"></div>\n    </ion-card-content>\n  </ion-card>\n <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n<img src="assets/logo.gif" width="150" style="display: block; margin: 20px auto;" *ngIf="posts?.length > 0">\n </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/tbi-app/src/pages/blog/blog.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_wp__["a" /* WpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], BlogPage);

//# sourceMappingURL=blog.js.map

/***/ })

});
//# sourceMappingURL=6.js.map