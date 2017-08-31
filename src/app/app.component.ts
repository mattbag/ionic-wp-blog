// import { Observable } from 'rxjs/Observable';
import { WpProvider } from './../providers/wp/wp';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CacheService } from "ionic-cache/dist";

import pages from './app.pages'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  nav_items: Array<{title: string, component: any, cat_id? :number}>;
  pages: Array<{title: string, component: any, cat_id? :number}>;
  cats: Array<{title: string, component: any, cat_id? :number}>;
  // wpPages: Observable<Page[]>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public _wp: WpProvider, public cache: CacheService) {
    this.initializeApp();
    cache.setDefaultTTL(60 * 60 * 12)

    // this.cats = pages.cats

    // this.pages = pages.pages;

    this.nav_items = [...pages.pages,...pages.cats];
    // this.wpPages = this._wp.getPages();
    //   this.wpPages.map(page=>{
    //     this.pages.push()
    //   })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if(this.platform.is('cordova')) {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      }else{
        //  desktop stuff
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {page : page});
  }
  // openWpPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot('wpPage');
  // }
}
