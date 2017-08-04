import { Observable } from 'rxjs/Observable';
import { WpProvider, Post } from './../../providers/wp/wp';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  loader: Loading;
  content: string;
  category_side: string = 'products';
  page: any;
  pageData: any;
  featured: Observable<any>;;
  posts: Observable<Post[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _wp: WpProvider, public loadingCtrl: LoadingController) {
    // console.log(this.page.title);
    this.page = this.navParams.get('page');
    //  console.log(this.page.title);
    if (this.page == undefined) {
      // console.log('undef');
      // this.page = { title: 'makeup' };
      this.navCtrl.setRoot('BlogPage');
      // console.log(this.page);
      return

    }

    if (this.posts === undefined) {
      this.posts = this._wp.getPostsByCat(this.page.title || 'makeup');
      this.presentLoading();
    }
    this.posts.subscribe(r =>{this.loader.dismiss()});

  }

  ionViewDidLoad() {
    // console.log('hi');
    if (this.page == undefined) {
      // console.log('undef');
      // this.page = { title: 'makeup' };
      this.navCtrl.setRoot('BlogPage');
      // console.log(this.page);
      return

    }
    this.pageData = this._wp.getPageBySlug(this.page.title);
    this.pageData.subscribe(res => {
      // console.log(res[0]);
      this.content = res[0].content.rendered;
      this.featured = this._wp.getMedia(res[0].featured_media);
    })
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

}
