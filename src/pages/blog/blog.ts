// import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading } from 'ionic-angular';
import { Post, WpProvider } from "../../providers/wp/wp";

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  loader: Loading;
  posts: any;
post_page: number = 1;

  constructor(public navCtrl: NavController, public wpProvider: WpProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    // this.posts = this.wpProvider.getPosts();
    let _posts = this.wpProvider.getPostsPage(this.post_page);
    _posts.subscribe(data =>{
        this.loader.dismiss();
        // console.log(data);
        this.posts = [...data];
        this.post_page++
    });
  }
doInfinite(event){
console.log('get more posts');
let newPosts = this.wpProvider.getPostsPage(this.post_page);
newPosts.subscribe(data =>{
 this.posts.push(...data)
        // console.log(data);
        this.post_page++
        event.complete();
    });
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
}
