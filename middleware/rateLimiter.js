const rateLimit = require("express-rate-limit");
const messages = require("../data/messages");

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: messages.rateLimiter.TOO_MANY_REQUESTS,
});

module.exports = rateLimiter;