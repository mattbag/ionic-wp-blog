import { Observable } from 'rxjs/Observable';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading, Slides } from 'ionic-angular';
import { Post, WpProvider } from "../../providers/wp/wp";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  loader: Loading;
  posts: Observable<Post[]>;
  posts3: any[];

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.posts = this.wpProvider.getPosts();
    // this.posts = this.wpProvider.getPostsPage();
    this.posts.subscribe(data => {
      this.loader.dismiss();
      // console.log(data);
      // this.posts3 = data.slice(0,3);

      // console.log(this.posts3)
    });
  }
  ngAfterViewInit() {
    this.slides.centeredSlides = true;
    this.slides.slidesPerView = 1.2;
    // this.slides.spaceBetween = 20;
    // this.slides.loop = true;
    // this.slides.initialSlide = 2;
  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="/assets/logo.gif">`
    });
    this.loader.present();
  }

  openPost(post: Post) {
    this.navCtrl.push('PostPage', { post: post });
  }
  goBlog() {
    this.navCtrl.setRoot('BlogPage')
  }
}