const express = require("express");
const products = require("../data/products");
const messages = require("../data/messages");

const router = express.Router();

// Get all products with pagination
router.get("/", (req, res) => {
  const pageNumber = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  if (pageNumber < 1 || limit < 1) {
    return res.status(400).json({ error: messages.products.INVALID_PAGE_OR_LIMIT });
  }

  const startIndex = (pageNumber - 1) * limit;
  const endIndex = pageNumber * limit;
  const paginatedProducts = products.slice(startIndex, endIndex);

  res.json({
    currentPage: pageNumber,
    totalProducts: products.length,
    totalPages: Math.ceil(products.length / limit),
    products: paginatedProducts,
  });
});

// Get a product by ID
router.get("/id/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error:messages.products.PRODUCT_NOT_FOUND});
  }
  res.json(product);
});

// Get products by type
router.get("/type/:type", (req, res) => {
  const productType = req.params.type;
  const filteredProducts = products.filter((p) => p.type === productType);

  if (filteredProducts.length === 0) {
    return res.status(404).json( {error: messages.products.NO_PRODUCTS_FOR_TYPE });
  }

  res.json(filteredProducts);
});

module.exports = router;
