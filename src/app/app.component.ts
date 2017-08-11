import { Observable } from 'rxjs/Observable';
import { WpProvider, Page } from './../providers/wp/wp';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any, cat_id? :number}>;
  wpPages: Observable<Page[]>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public _wp: WpProvider) {
    this.initializeApp();

// categories will be attached with a query
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Blog', component: 'BlogPage' },
      { title: 'Monthly Top 10', component: 'TopPage' , cat_id : 19},
      { title: 'Products', component: 'ProductsPage' },
      { title: 'Makeup', component: 'CategoryPage' , cat_id : 1},
      { title: 'Lifestyle', component: 'CategoryPage', cat_id : 17 },
      { title: 'Skincare', component: 'CategoryPage', cat_id : 2 },
      { title: 'Hair', component: 'CategoryPage' , cat_id: 4},
      { title: 'Beauty Talk', component: 'CategoryPage' , cat_id : 18}
    ];

    this.wpPages = this._wp.getPages();
      this.wpPages.map(page=>{
        this.pages.push()
      })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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
