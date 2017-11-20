const db = require('./dbInterface');
const renderMain = require('./renderMain');
const renderDiscountSelect = require('./discountSelect/renderDiscountSelect');

$(document).ready(function () {
  db.getCategories((categories) => {
    db.getProducts((products) => {
      renderDiscountSelect(products.products, categories.categories);
      renderMain(products.products, categories.categories);
    });
  });
});
