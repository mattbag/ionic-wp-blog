import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { WpApiPosts, WpApiMedia, WpApiPages } from 'wp-api-angular';
import { URLSearchParams } from '@angular/http';

export class Post {
  public media_url: Observable<string>;
  constructor(public authorId: number, public id: number, public title: string, public content: string, public excerpt: string, public date: string, public categories: string, public mediaId?: number) { }
}
export class Page {
  public media_url: Observable<string>;
  constructor(public authorId: number, public id: number, public title: string, public content: string, public excerpt: string, public date: string, public categories: string, public mediaId?: number) { }
}

@Injectable()
export class WpProvider {

  constructor(public wpApiPosts: WpApiPosts, public wpApiMedia: WpApiMedia, public wpApiPages: WpApiPages) {
    console.log('Hello WpProvider Provider');
  }

  getPosts(): Observable<Post[]> {
    return this.wpApiPosts.getList()
      .map(res => res.json())
      .map(data => {
        var posts = [];
        for (let post of data) {
          let onePost = new Post(post['author'], post['id'], post['title']['rendered'], post['content']['rendered'], post['excerpt']['rendered'], post['date'], post['categories'], post['featured_media']);
          onePost.media_url = this.getMedia(onePost.mediaId);
          // onePost.categories = this.getCat(onePost.id, 1);
          posts.push(onePost);
        }
        return posts;
      });
  }
  getPostsPage(page: number): Observable<Post[]> {

    const uRLSearchParams = new URLSearchParams();
    uRLSearchParams.set('page', page.toString());

    return this.wpApiPosts.getList({ search: uRLSearchParams })
      .map(res => res.json())
      .map(data => {
        var posts = [];
        for (let post of data) {
          let onePost = new Post(post['author'], post['id'], post['title']['rendered'], post['content']['rendered'], post['excerpt']['rendered'], post['date'], post['categories'], post['featured_media']);
          onePost.media_url = this.getMedia(onePost.mediaId);
          // onePost.categories = this.getCat(onePost.id, 1);
          posts.push(onePost);
        }
        return posts;
      });
  }
  getPostsByCat(category: string = 'makeup'): Observable<Post[]> {

    const uRLSearchParams = new URLSearchParams();
    uRLSearchParams.set('category', category.toLocaleLowerCase().replace(' ', '_'));
    console.log('getting');

    return this.wpApiPosts.getList({ search: uRLSearchParams })
      .map(res => res.json())
      .map(data => {
        var posts = [];
        for (let post of data) {
          let onePost = new Post(post['author'], post['id'], post['title']['rendered'], post['content']['rendered'], post['excerpt']['rendered'], post['date'], post['categories'], post['featured_media']);
          onePost.media_url = this.getMedia(onePost.mediaId);
          // onePost.categories = this.getCat(onePost.id, 1);
          posts.push(onePost);
        }
        return posts;
      });
  }
  getMedia(id: number): Observable<string> {
    return this.wpApiMedia.get(id)
      .map(res => res.json())
      .map(data => {
        return data['source_url'];
      });
  }
  // getCat(post_id: number, cat_id: number): any {
  //   return this.wpApiPosts.getCategory(post_id, cat_id)

  //     .map(res => res.json())
  //     .map(data => {
  //       console.log(data);

  //     });
  // }

  //   getProds(): Observable<Post[]> {
  //   return this.wpApiTypes.getList()
  //     .map(res => res.json())
  //     .map(data => {
  //       var prods = [];
  //       for (let prod of data) {
  //         let onePost = new Post(prod[ 'author' ], prod[ 'id' ], prod[ 'title' ][ 'rendered' ], prod[ 'content' ][ 'rendered' ], prod[ 'excerpt' ][ 'rendered' ], prod[ 'date' ],prod['categories'], prod[ 'featured_media' ]);
  //         onePost.media_url = this.getMedia(onePost.mediaId);
  //         // onePost.categories = this.getCat(onePost.id, 1);
  //         prods.push(onePost);
  //       }
  //       return prods;
  //     });
  // }
  getPages(): Observable<Page[]> {
    return this.wpApiPages.getList()
      .map(res => res.json())
      .map(data => {
        var pages = [];
        for (let page of data) {
          let onePost = new Post(page['author'], page['id'], page['title']['rendered'], page['content']['rendered'], page['excerpt']['rendered'], page['date'], page['categories'], page['featured_media']);
          onePost.media_url = this.getMedia(onePost.mediaId);
          // onePost.categories = this.getCat(onePost.id, 1);
          pages.push(onePost);
        }
        // console.log(pages);

        return pages;
      });
  }
  getPageById(id: number): Observable<Page[]> {
  
    return this.wpApiPages.get(id)
      .map(res => res.json())
      .map(data => {
        var page = data;
       
        // console.log(data);

        return page;
      });
  }
     getPageBySlug(slug: string) {
        const uRLSearchParams = new URLSearchParams();
        uRLSearchParams.set('slug', slug.toString().replace(' ','-'));

       return this.wpApiPages.getList(
           { search: uRLSearchParams}
        ).map((r) => r.json())
          // .map(page=>{
          //     page.media_url = this.getMedia(page.id);
          //     console.log(page);
              
          // })
    }
}
