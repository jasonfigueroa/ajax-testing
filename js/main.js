// $(document).ready(function () {
//   const main = $('#main');

//   $.ajax({
//     "url":
//   });
// });

// const root = 'https://jsonplaceholder.typicode.com';
// // https://jsonplaceholder.typicode.com/posts

// $.ajax({
//   url: `${root}/posts`,
//   method: 'GET',
// }).then(function (data) {
//   data.forEach((post) => {
//     const article = document.createElement('article');
//     const title = document.createElement('h2');
//     title.innerHTML = `${post.title}`;
//     article.appendChild(title);

//     // for testing
//     const bodyStr = post.body;
//     const bodyStrWithLineBreaks = bodyStr.replace(/\n/g, '<br>');
//     // console.log(bodyStr);
//     console.log(bodyStrWithLineBreaks);

//     const p = document.createElement('p');
//     p.innerHTML = bodyStrWithLineBreaks;

//     // article.innerHTML += post.body;
//     article.appendChild(p);
//     $('#main').append(article);
//   });
// });

const db = require('./dbInterface');
const renderMain = require('./renderMain');
const renderDiscountSelect = require('./renderDiscountSelect');

// const dbInterface = db();

db.getCategories((categories) => {
  db.getProducts((products) => {
    // const categoryId = 3;
    // const filteredProducts = products.products.filter((product) => {
    //   return product.category_id === categoryId;
    // });
    // console.log(categories);
    // console.log(products);
    // console.log(filteredProducts);
    renderDiscountSelect(categories.categories);
    renderMain(products.products, categories.categories);
  });
});
