const styleDiscounts = (articleId) => {
  $(`${articleId} .discounted_price`).removeClass('hidden');
  $(`${articleId} .listed_price`).addClass('discounted');
  $(`${articleId} .discount_percentage`).removeClass('hidden');
};

module.exports = styleDiscounts;
