webpackJsonp([5],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryPageModule = (function () {
    function CategoryPageModule() {
    }
    return CategoryPageModule;
}());
CategoryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
        ],
    })
], CategoryPageModule);

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_wp_wp__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CategoryPage = (function () {
    // posts: Observable<Post[]>;
    function CategoryPage(navCtrl, navParams, _wp, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._wp = _wp;
        this.loadingCtrl = loadingCtrl;
        this.category_side = 'products';
        // console.log(this.page.title);
        this.presentLoading();
        this.page = this.navParams.get('page');
        //  console.log(this.page.cat_id);
        // if (this.page == undefined) {
        //   // console.log('undef');
        //   // this.page = { title: 'makeup' };
        //   this.navCtrl.setRoot('HomePage');
        //   // console.log(this.page);
        //   return
        // }
    }
    ;
    CategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // // console.log(this.products);
        if (this.page == undefined) {
            // console.log('undef');
            // this.page = { title: 'makeup' };
            this.loader.dismiss();
            this.navCtrl.setRoot('HomePage');
            // console.log(this.page);
            return;
        }
        this.products = this._wp.getProds(this.page.cat_id);
        this.products.subscribe(function (r) { _this.loader.dismiss(); });
        var _latest = this._wp.getPosts();
        _latest.subscribe(function (data) {
            _this.posts = data;
            // this.loader.dismiss();
        });
        this.pageData = this._wp.getPageBySlug(this.page.title);
        this.pageData.subscribe(function (res) {
            // console.log(res[0]);
            _this.content = res[0].content.rendered;
            _this.featured = _this._wp.getMedia(res[0].featured_media);
        });
    };
    CategoryPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/logo.gif\">"
        });
        this.loader.present();
    };
    CategoryPage.prototype.openPost = function (post) {
        this.navCtrl.push('PostPage', { post: post });
    };
    CategoryPage.prototype.openProd = function (post) {
        this.navCtrl.push('ProductPage', { post: post });
    };
    CategoryPage.prototype.segmentChange = function () {
        var _this = this;
        // console.log('changed');
        this.presentLoading();
        setTimeout(function () { _this.loader.dismiss(); }, 999);
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-category',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/tbi-app/src/pages/category/category.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{page?.title | titlecase}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="category_side === \'products\'" style="display:contents">\n    <ion-card *ngFor="let prod of products | async" (click)="openProd(prod)" tappable>\n      <img [src]="prod.media_url | async" prod>\n      <ion-card-content>\n        <ion-card-title [innerHTML]="prod.title">\n        </ion-card-title>\n        <div [innerHTML]="prod.excerpt"></div>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n  <div *ngIf="category_side === \'posts\'" style="display:contents">\n\n    <ion-card *ngFor="let post of posts" (click)="openPost(post)" tappable>\n      <img [src]="post?.images.source_url" *ngIf="post?.images.source_url">\n      <ion-card-content>\n        <ion-card-title [innerHTML]="post.title"></ion-card-title>\n        <div [innerHTML]="post.excerpt"></div>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n  <div *ngIf="category_side === \'content\'" style="display:contents">\n    <img [src]="featured | async">\n    <div [innerHTML]="content" class=\'overlapper\' *ngIf="featured"></div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="light">\n    <ion-segment [(ngModel)]="category_side" color="secondary" (ionChange)="segmentChange()">\n      <ion-segment-button value="products">\n        <ion-icon name="ios-eye-outline"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="posts">\n        <ion-icon name="ios-albums-outline"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="content">\n        <ion-icon name="ios-book-outline"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/tbi-app/src/pages/category/category.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_wp_wp__["a" /* WpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_wp_wp__["a" /* WpProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object])
], CategoryPage);

var _a, _b, _c, _d;
//# sourceMappingURL=category.js.map

/***/ })

});
//# sourceMappingURL=5.js.map