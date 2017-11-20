const option = (seasonDiscount) => {
  const opt = document.createElement('option');
  opt.value = seasonDiscount;
  opt.innerHTML = seasonDiscount;
};

module.exports = option;
