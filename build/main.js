webpackJsonp([7],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Post */
/* unused harmony export Page */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wp_api_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_wp_api_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_wp_api_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_cache__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Post = (function () {
    function Post(authorId, id, title, content, excerpt, date, categories, mediaId, product_site, images) {
        this.authorId = authorId;
        this.id = id;
        this.title = title;
        this.content = content;
        this.excerpt = excerpt;
        this.date = date;
        this.categories = categories;
        this.mediaId = mediaId;
        this.product_site = product_site;
        this.images = images;
    }
    return Post;
}());

var Page = (function () {
    function Page(authorId, id, title, content, excerpt, date, categories, mediaId) {
        this.authorId = authorId;
        this.id = id;
        this.title = title;
        this.content = content;
        this.excerpt = excerpt;
        this.date = date;
        this.categories = categories;
        this.mediaId = mediaId;
    }
    return Page;
}());

var WpProvider = (function () {
    function WpProvider(wpApiPosts, wpApiMedia, wpApiPages, wpApiCustom, cache) {
        this.wpApiPosts = wpApiPosts;
        this.wpApiMedia = wpApiMedia;
        this.wpApiPages = wpApiPages;
        this.wpApiCustom = wpApiCustom;
        this.cache = cache;
        console.log('Hello WpProvider Provider');
    }
    WpProvider.prototype.getPosts = function () {
        var request = this.wpApiPosts.getList()
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var posts = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var post = data_1[_i];
                var onePost = new Post(post['author'], post['id'], post['title']['rendered'], post['content']['rendered'], post['excerpt']['rendered'], post['date'], post['categories'], post['featured_media'], post['product_site'], post['better_featured_image']);
                // onePost.media_url = this.getMedia(onePost.mediaId);
                // onePost.categories = this.getCat(onePost.id, 1);
                posts.push(onePost);
            }
            return posts;
        });
        return this.cache.loadFromObservable('TBIHomePosts', request);
    };
    WpProvider.prototype.getPostsPage = function (page) {
        var uRLSearchParams = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["URLSearchParams"]();
        uRLSearchParams.set('page', page.toString());
        return this.wpApiPosts.getList({ search: uRLSearchParams })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var posts = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var post = data_2[_i];
                var onePost = new Post(post['author'], post['id'], post['title']['rendered'], post['content']['rendered'], post['excerpt']['rendered'], post['date'], post['categories'], post['featured_media'], post['product_site'], post['better_featured_image']);
                // onePost.media_url = this.getMedia(onePost.mediaId);
                // onePost.categories = this.getCat(onePost.id, 1);
                posts.push(onePost);
            }
            return posts;
        });
    };
    WpProvider.prototype.getPostsByCat = function (category) {
        // console.log(category);
        var uRLSearchParams = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["URLSearchParams"]();
        uRLSearchParams.set('categories', category);
        console.log('getting');
        var request = this.wpApiPosts.getList({ search: uRLSearchParams })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var posts = [];
            for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                var post = data_3[_i];
                var onePost = new Post(post['author'], post['id'], post['title']['rendered'], post['content']['rendered'], post['excerpt']['rendered'], post['date'], post['categories'], post['featured_media']);
                // onePost.media_url = this.getMedia(onePost.mediaId);
                // onePost.categories = this.getCat(onePost.id, 1);
                posts.push(onePost);
            }
            // console.log(posts);
            return posts;
        });
        return this.cache.loadFromObservable("TBI-" + category + "-products", request);
    };
    WpProvider.prototype.getMedia = function (id) {
        return this.wpApiMedia.get(id)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data['source_url'];
        });
    };
    // getCat(post_id: number, cat_id: number): any {
    //   return this.wpApiPosts.getCategory(post_id, cat_id)
    //     .map(res => res.json())
    //     .map(data => {
    //       console.log(data);
    //     });
    // }
    WpProvider.prototype.getProds = function (category) {
        var _this = this;
        // console.log(category);
        var uRLSearchParams = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["URLSearchParams"]();
        if (category != undefined) {
            uRLSearchParams.set('categories', category);
        }
        uRLSearchParams.set('per_page', '10');
        var instance = this.wpApiCustom.getInstance('products');
        return instance.getList({ search: uRLSearchParams })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            // console.log(data);
            var count = 0;
            var prods = [];
            for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                var prod = data_4[_i];
                var onePost = new Post(prod['author'], prod['id'], prod['title']['rendered'], prod['content']['rendered'], prod['excerpt']['rendered'], prod['date'], prod['categories'], prod['featured_media'], prod['acf']['product_site']);
                onePost.media_url = _this.getMedia(onePost.mediaId);
                // onePost.categories = this.getCat(onePost.id, 1);
                if (count <= 20) {
                    prods.push(onePost);
                    // console.log(count);
                    count++;
                }
            }
            return prods;
        });
    };
    WpProvider.prototype.getPages = function () {
        var _this = this;
        return this.wpApiPages.getList()
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var pages = [];
            for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                var page = data_5[_i];
                var onePost = new Post(page['author'], page['id'], page['title']['rendered'], page['content']['rendered'], page['excerpt']['rendered'], page['date'], page['categories'], page['featured_media']);
                onePost.media_url = _this.getMedia(onePost.mediaId);
                // onePost.categories = this.getCat(onePost.id, 1);
                pages.push(onePost);
            }
            // console.log(pages);
            return pages;
        });
    };
    WpProvider.prototype.getPageById = function (id) {
        return this.wpApiPages.get(id)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var page = data;
            // console.log(data);
            return page;
        });
    };
    WpProvider.prototype.getPageBySlug = function (slug) {
        var uRLSearchParams = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["URLSearchParams"]();
        uRLSearchParams.set('slug', slug.toString().replace(' ', '-'));
        return this.wpApiPages.getList({ search: uRLSearchParams }).map(function (r) { return r.json(); });
        // .map(page=>{
        //     page.media_url = this.getMedia(page.id);
        //     console.log(page);
        // })
    };
    WpProvider.prototype.getPostsByType = function (type) {
        var _this = this;
        if (type === void 0) { type = 'product'; }
        var uRLSearchParams = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["URLSearchParams"]();
        uRLSearchParams.set('types', type.toLocaleLowerCase().replace(' ', '_'));
        return this.wpApiPosts.getList({ search: uRLSearchParams })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            console.log(data);
            var posts = [];
            for (var _i = 0, data_6 = data; _i < data_6.length; _i++) {
                var post = data_6[_i];
                var onePost = new Post(post['author'], post['id'], post['title']['rendered'], post['content']['rendered'], post['excerpt']['rendered'], post['date'], post['categories'], post['featured_media']);
                onePost.media_url = _this.getMedia(onePost.mediaId);
                // onePost.categories = this.getCat(onePost.id, 1);
                posts.push(onePost);
            }
            return posts;
        });
    };
    return WpProvider;
}());
WpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_wp_api_angular__["WpApiPosts"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_wp_api_angular__["WpApiPosts"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_wp_api_angular__["WpApiMedia"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_wp_api_angular__["WpApiMedia"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_wp_api_angular__["WpApiPages"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_wp_api_angular__["WpApiPages"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_wp_api_angular__["WpApiCustom"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_wp_api_angular__["WpApiCustom"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_cache__["b" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_cache__["b" /* CacheService */]) === "function" && _e || Object])
], WpProvider);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=wp.js.map

/***/ }),

/***/ 144:
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
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blog/blog.module": [
		587,
		6
	],
	"../pages/category/category.module": [
		588,
		5
	],
	"../pages/home/home.module": [
		589,
		4
	],
	"../pages/post/post.module": [
		590,
		3
	],
	"../pages/product/product.module": [
		591,
		2
	],
	"../pages/products/products.module": [
		592,
		1
	],
	"../pages/top/top.module": [
		593,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(277);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WpApiLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_wp_wp__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_wp_api_angular__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_wp_api_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_wp_api_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_cache__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function WpApiLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_8_wp_api_angular__["WpApiStaticLoader"](http, 'http://the-beautyinsider.com/wp-json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { mode: 'ios' }, {
                links: [
                    { loadChildren: '../pages/blog/blog.module#BlogPageModule', name: 'BlogPage', segment: 'blog', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/top/top.module#TopPageModule', name: 'TopPage', segment: 'top', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_8_wp_api_angular__["WpApiModule"].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_8_wp_api_angular__["WpApiLoader"],
                useFactory: (WpApiLoaderFactory),
                deps: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]]
            }),
            __WEBPACK_IMPORTED_MODULE_9_ionic_cache__["a" /* CacheModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6__providers_wp_wp__["a" /* WpProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_wp_wp__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_cache_dist__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_pages__ = __webpack_require__(586);
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







var MyApp = (function () {
    // wpPages: Observable<Page[]>;
    function MyApp(platform, statusBar, splashScreen, _wp, cache) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this._wp = _wp;
        this.cache = cache;
        this.rootPage = 'HomePage';
        this.initializeApp();
        cache.setDefaultTTL(60 * 60 * 12);
        // this.cats = pages.cats
        // this.pages = pages.pages;
        this.nav_items = __WEBPACK_IMPORTED_MODULE_6__app_pages__["a" /* default */].pages.concat(__WEBPACK_IMPORTED_MODULE_6__app_pages__["a" /* default */].cats);
        // this.wpPages = this._wp.getPages();
        //   this.wpPages.map(page=>{
        //     this.pages.push()
        //   })
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (_this.platform.is('cordova')) {
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
            }
            else {
                //  desktop stuff
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, { page: page });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/tbi-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="light">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of nav_items" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n       <!-- <button menuClose ion-item *ngFor="let p of wpPages | async" (click)="openPage(p)">\n        {{p.title | titlecase}}\n      </button> -->\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/tbi-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__providers_wp_wp__["a" /* WpProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_cache_dist__["b" /* CacheService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pages = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Blog', component: 'BlogPage' },
    { title: 'Monthly Top 10', component: 'TopPage', cat_id: 19 },
    { title: 'Latest Products', component: 'ProductsPage' }
];
var cats = [
    { title: 'Makeup', component: 'CategoryPage', cat_id: 1 },
    { title: 'Lifestyle', component: 'CategoryPage', cat_id: 17 },
    { title: 'Skincare', component: 'CategoryPage', cat_id: 2 },
    { title: 'Hair', component: 'CategoryPage', cat_id: 4 },
    { title: 'Beauty Talk', component: 'CategoryPage', cat_id: 18 }
];
/* harmony default export */ __webpack_exports__["a"] = ({ pages: pages, cats: cats });
//# sourceMappingURL=app.pages.js.map

/***/ })

},[272]);
//# sourceMappingURL=main.js.map