const jwt = require('jsonwebtoken');
const messages = require("../controller/messages");

function verifyToken(req, res, next) {
const token = req.header('Authorization');
if (!token) return res.status(401).json({ error: messages.auth.ACCESS_DENIED });
try {
 const decoded = jwt.verify(token, process.env.JWT_SECRET);
 req.userId = decoded.userId;
 next();
 } catch (error) {
 res.status(401).json({ error: messages.auth.INVALID_TOKEN });
 }
 };

module.exports = verifyToken;