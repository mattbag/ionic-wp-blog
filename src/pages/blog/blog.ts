import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading } from 'ionic-angular';
import { Post, WpProvider } from "../../providers/wp/wp";

/**
 * Generated class for the BlogPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  loader: Loading;
  posts: Observable<Post[]>;

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.posts = this.wpProvider.getPosts();
    this.posts.subscribe(data =>{
        this.loader.dismiss();
        // console.log(data);
        
    });
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
