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
  posts: any[];
  products: Observable<Post[]>;
  loader: Loading;
  content: string;
  category_side: string = 'products';
  page: any;
  pageData: any;
  featured: Observable<any>;;
  // posts: Observable<Post[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _wp: WpProvider, public loadingCtrl: LoadingController) {
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

  ionViewDidLoad() {
    // // console.log(this.products);
    if (this.page == undefined) {
      // console.log('undef');
      // this.page = { title: 'makeup' };
      this.loader.dismiss();
      this.navCtrl.setRoot('HomePage');
      // console.log(this.page);
      return

    }
    this.products = this._wp.getProds(this.page.cat_id);
    this.products.subscribe(r =>{this.loader.dismiss()});
    let _latest = this._wp.getPosts();

    _latest.subscribe(data => {
    
      this.posts = data;
      // this.loader.dismiss();

    });

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
      content: `<img src="assets/logo.gif">`
    });
    this.loader.present();
  }
  openPost(post: Post) {
    this.navCtrl.push('PostPage', { post: post });
  }
   openProd(post: Post) {
    this.navCtrl.push('ProductPage', { post: post });
  }
  segmentChange(){
    // console.log('changed');
    this.presentLoading();
    setTimeout(()=>{ this.loader.dismiss()},999)
   
  }
}
