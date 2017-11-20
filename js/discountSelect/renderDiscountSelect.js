// this is the main hub for the discount select, all other modules in this
// directory are to help this module render the discount select

const removeDiscountStyles = require('./removeDiscountStyles');
const styleDiscounts = require('./styleDiscounts');
const placeholderOption = require('./placeholderOption');
const option = require('./option');

// parameters should be the arrays NOT the objects
const renderDiscountSelect = (productsArray, categoriesArray) => {
  const select = document.createElement('select');
  const selectId = 'season_discount_select';
  select.id = selectId;

  const label = document.createElement('label');
  label.htmlFor = selectId;
  label.innerHTML = 'Season Discount:';

  $('#main').append(label);
  $('#main').append(select);

  // adding event listener to select
  $('#season_discount_select').change((e) => {
    const discountValue = e.target.value;

    // capturing the object for the selected season discount
    const targetCategoryObj = categoriesArray.filter((category) => {
      return discountValue === category.season_discount;
    });

    // array for tracking all ids of products to discount
    const idsToDiscount = [];

    // reset classes
    productsArray.forEach((product) => {
      const articleId = `#article_for_product_id_${product.id}`;
      removeDiscountStyles(articleId);

      // pushing ids to discount
      if (product.category_id === targetCategoryObj[0].id) {
        idsToDiscount.push(product.id);
      }
    });

    // applying css styling for discounted items
    idsToDiscount.forEach((idToDiscount) => {
      const articleId = `#article_for_product_id_${idToDiscount}`;
      styleDiscounts(articleId);
    });
  });

  // array for storing categories to be placed in options in select
  const categorySeasonDiscountArray = [];

  // storying categories
  categoriesArray.forEach((category) => {
    categorySeasonDiscountArray.push(category.season_discount);
  });

  // creating a placeholder option for select
  $('#season_discount_select').append(placeholderOption());

  // sorting category options, building options and appending them to select
  categorySeasonDiscountArray.sort().forEach((seasonDiscount) => {
    $('#season_discount_select').append(option(seasonDiscount));
  });
};

module.exports = renderDiscountSelect;
