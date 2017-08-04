import { Observable } from 'rxjs/Observable';
import { WpProvider, Post } from './../../providers/wp/wp';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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
  @ViewChild(Slides) slides: Slides;
  category_side: string = 'posts';
  page: any;
  posts: Observable<Post[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _wp: WpProvider) {
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
    this.posts = this._wp.getPostsByCat(this.page.title || 'makeup');

  }

  ngAfterViewInit() {
    // console.log(this.posts);
    this.slides.centeredSlides = true;
    this.slides.slidesPerView = 1.2;
    // this.slides.loop = true;
  }

  openPost(post: Post) {
    this.navCtrl.push('PostPage', { post: post });
  }

}
