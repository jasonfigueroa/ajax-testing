const db = Object.create(null, {
  getCategories: {
    value: (callback) => {
      return $.ajax({
        url: './js/categories.json',
        method: 'GET',
      }).then((categories) => {
        callback(categories);
      });
    },
  },
  getProducts: {
    value: (callback) => {
      return $.ajax({
        url: './js/products.json',
        method: 'GET',
      }).then((products) => {
        callback(products);
      });
    },
  },
});

module.exports = db;
