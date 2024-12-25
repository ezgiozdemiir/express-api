const express = require('express');
 const router = express.Router();
 const verifyToken = require('../middleware/authMiddleware');
// Protected route
 router.get('/', verifyToken, (req, res) => {
 res.status(200).json({ message: messages.protected.PROTECTED_ROUTE_ACCESS });
 });

module.exports = router;