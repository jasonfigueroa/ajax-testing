const db = Object.create(null, {
  getCategories: {
    value: (callback) => {
      return $.ajax({
        // url: './data/categories.json',
        url: 'https://personal-site-jason-figueroa.firebaseio.com/categories.json',
        method: 'GET',
      }).then((data) => {
        callback(data);
      });
    },
  },
  getProducts: {
    value: (callback) => {
      return $.ajax({
        // url: './data/products.json',
        url: 'https://personal-site-jason-figueroa.firebaseio.com/products.json',
        method: 'GET',
      }).then((products) => {
        callback(products);
      });
    },
  },
});

module.exports = db;
