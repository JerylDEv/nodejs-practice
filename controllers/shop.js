const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/products', {
      products: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.param.productId;
  Product.findById(prodId, (product) => {
    console.log(product);
  });
  res.redirect('/');
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      products: products,
      pageTitle: 'My Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', { path: '/cart', pageTitle: 'Your Cart' });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', { path: '/orders', pageTitle: 'Your Orders' });
};

exports.checkout = (req, res, next) => {
  res.render('shop/checkout', { path: '/checkout', pageTitle: 'Checkout' });
};
