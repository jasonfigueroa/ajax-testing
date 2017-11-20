const renderMain = (productsArray, categoriesArray) => {
  const main = $('#main');
  productsArray.forEach((product) => {
    const categoryObj = categoriesArray.find((category) => {
      return category.id === product.category_id;
    });

    const articleId = `article_for_product_id_${product.id}`;
    const article = document.createElement('article');
    article.id = `${articleId}`;
    main.append(article);
    const discountedPrice = (product.price - (product.price * categoryObj.discount)).toFixed(2);
    $(`#${articleId}`).html(`<h4>${product.name}</h4>
    <ul>
      <li class="price">Price: <span class="discounted_price hidden green">$${discountedPrice}</span> <span class="listed_price">$${product.price}</span> <span class="discount_percentage hidden green">(${categoryObj.discount * 100}% off)</span></li>
      <li>Dept: ${categoryObj.name}</li>
    </ul>
    `);
  });
};

module.exports = renderMain;
