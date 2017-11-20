const option = (seasonDiscount) => {
  const opt = document.createElement('option');
  opt.value = seasonDiscount;
  opt.innerHTML = seasonDiscount;

  return opt;
};

module.exports = option;
