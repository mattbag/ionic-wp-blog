// import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading } from 'ionic-angular';
import { Post, WpProvider } from "../../providers/wp/wp";
import pages from './../../app/app.pages'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  cats: any[];
  loader: Loading;
  posts: any[];
  // isLoaded: boolean;

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    let _latest = this.wpProvider.getPosts();
    // this.posts = this.wpProvider.getPostsPage();
    _latest.subscribe(data => {
   
      this.posts = data;
      this.loader.dismiss();

    });
    this.cats = pages.cats;
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="assets/logo.gif">`
    });
    this.loader.present();
  }

  openPost(post: Post) {
    this.navCtrl.push('PostPage', { post: post });
  }
  goBlog() {
    this.navCtrl.setRoot('BlogPage')
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component, {page : page});
  }
}