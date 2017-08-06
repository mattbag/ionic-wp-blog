import { Post } from './../../providers/wp/wp';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: Post;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
    // console.log(this.post);
    if (this.post == undefined) {
      this.navCtrl.setRoot('BlogPage')
    }

  }


}
