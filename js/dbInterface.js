const db = Object.create(null, {
  getCategories: {
    value: (callback) => {
      return $.ajax({
        url: './data/categories.json',
        method: 'GET',
      }).then((categories) => {
        callback(categories);
      });
    },
  },
  getProducts: {
    value: (callback) => {
      return $.ajax({
        url: './data/products.json',
        method: 'GET',
      }).then((products) => {
        callback(products);
      });
    },
  },
});

module.exports = db;
