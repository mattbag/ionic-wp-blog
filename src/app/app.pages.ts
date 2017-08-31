    const pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Blog', component: 'BlogPage' },
      { title: 'Monthly Top 10', component: 'TopPage' , cat_id : 19},
      { title: 'Latest Products', component: 'ProductsPage' }
    ];
    const cats = [
      { title: 'Makeup', component: 'CategoryPage' , cat_id : 1},
      { title: 'Lifestyle', component: 'CategoryPage', cat_id : 17 },
      { title: 'Skincare', component: 'CategoryPage', cat_id : 2 },
      { title: 'Hair', component: 'CategoryPage' , cat_id: 4},
      { title: 'Beauty Talk', component: 'CategoryPage' , cat_id : 18}
    ];
  
export default {pages, cats};
