import { Post } from './../../providers/wp/wp';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

   product: Post;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.get('post');
    console.log(this.product);
    
    // console.log(this.post);
    if (this.product == undefined) {
      this.navCtrl.setRoot('ProductsPage')
    }

  }
openLink(){
  // console.log('linking');
  window.open(this.product.product_site);
}
}
