const db = Object.create(null, {
  getCategories: {
    value: (callback) => {
      return $.ajax({
        url: 'https://discounts-cb09b.firebaseio.com/categories.json',
        method: 'GET',
      }).then((data) => {
        callback(data);
      });
    },
  },
  getProducts: {
    value: (callback) => {
      return $.ajax({
        url: 'https://discounts-cb09b.firebaseio.com/products.json',
        method: 'GET',
      }).then((products) => {
        callback(products);
      });
    },
  },
});

module.exports = db;
