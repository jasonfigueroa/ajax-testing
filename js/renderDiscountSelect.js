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
    // console.log(`discountValue: ${discountValue}`);
    const targetCategoryObj = categoriesArray.filter((category) => {
      return discountValue === category.season_discount;
    });
    // console.log(targetCategoryObj);
    const discount = targetCategoryObj[0].discount;
    console.log(discount);

    // get product id's of all products with matching category_id

    // prototyping
    const idsToDiscount = [];

    productsArray.forEach((product) => {
      // reset classes
      const articleId = `#article_for_product_id_${product.id}`;
      // $(`#article_for_product_id_${product.id}`).removeClass('red');
      $(`${articleId} .discounted_price`).addClass('hidden');
      $(`${articleId} .listed_price`).removeClass('discounted');
      $(`${articleId} .discount_percentage`).addClass('hidden');

      if (product.category_id === targetCategoryObj[0].id) {
        idsToDiscount.push(product.id);
        // $(`#article_for_product_id_${product.id}`).addClass('red');
      }
    });

    idsToDiscount.forEach((idToDiscount) => {
      const articleId = `#article_for_product_id_${idToDiscount}`;
      $(`${articleId} .discounted_price`).removeClass('hidden');
      $(`${articleId} .listed_price`).addClass('discounted');
      $(`${articleId} .discount_percentage`).removeClass('hidden');
    });

    console.log(idsToDiscount);

    // nums.forEach((num) => {
    //   $(`#article_for_product_id_${num}`).addClass('red');
    // });

    // categoriesArray.forEach((category) => {
    //   console.log(category.name);
    // });
    // $('#article_for_product_id_0 li:nth-of-type(2)')[0].innerHTML.split(' ')[1]
    // console.log(e);
  });

  const categorySeasonDiscountArray = [];

  categoriesArray.forEach((category) => {
    categorySeasonDiscountArray.push(category.season_discount);
  });

  const defaultOption = document.createElement('option');
  defaultOption.value = 'select discount';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.innerHTML = 'select discount';

  $('#season_discount_select').append(defaultOption);

  // <option value="" disabled selected>Select your option</option>

  categorySeasonDiscountArray.sort().forEach((seasonDiscount) => {
    const option = document.createElement('option');
    option.value = seasonDiscount;
    option.innerHTML = seasonDiscount;
    $('#season_discount_select').append(option);
  });

//   $(`#${selectId}`).html(`<select>
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="audi">Audi</option>
// </select>`);
};

module.exports = renderDiscountSelect;
