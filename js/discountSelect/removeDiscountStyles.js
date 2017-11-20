const removeDiscountStyles = (articleId) => {
  $(`${articleId} .discounted_price`).addClass('hidden');
  $(`${articleId} .listed_price`).removeClass('discounted');
  $(`${articleId} .discount_percentage`).addClass('hidden');
};

module.exports = removeDiscountStyles;
