const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.status(200).sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  // console.log(req.body.title);
  res.status(200).sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
