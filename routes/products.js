const express = require("express");
const products = require("../controllers/products");

const router = express.Router();

// Get all products with pagination
router.get("/", (req, res) => {
  const pageNumber = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  if (pageNumber < 1 || limit < 1) {
    return res.status(400).json({ error: "Invalid page or limit value" });
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
    return res.status(404).send("Product not found");
  }
  res.json(product);
});

// Get products by type
router.get("/type/:type", (req, res) => {
  const productType = req.params.type;
  const filteredProducts = products.filter((p) => p.type === productType);

  if (filteredProducts.length === 0) {
    return res.status(404).send("No products found for this type.");
  }

  res.json(filteredProducts);
});

module.exports = router;
