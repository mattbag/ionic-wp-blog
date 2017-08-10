import { Observable } from 'rxjs/Observable';
import { WpProvider, Post } from './../../providers/wp/wp';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  products: Observable<Post[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public _wp: WpProvider) {
     this.products = this._wp.getProds();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }
 openPost(post: Post) {
    this.navCtrl.push('PostPage', { post: post });
  }
  openProd(post: Post) {
    this.navCtrl.push('ProductPage', { post: post });
  }
}
