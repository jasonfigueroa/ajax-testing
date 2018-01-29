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
  getCustomers: {
    value: (callback) => {
      return $.ajax({
        url: 'http://bangazon.com:5000/api/customer',
        method: 'GET',
      }).then((customers) => {
        callback(customers);
      });
    },
  },
});

module.exports = db;
