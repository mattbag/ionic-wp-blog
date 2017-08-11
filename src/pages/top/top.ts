import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {
page: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.page = this.navParams.get('page');
      // console.log(this.page);
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopPage');
  }

}
