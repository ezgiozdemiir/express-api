const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const messages = require("../controller/messages");

// User registration
router.post('/register', async (req, res) => {
try {
const { username, password } = req.body;
const hashedPassword = await bcrypt.hash(password, 10);
const user = new User({ username, password: hashedPassword });
await user.save();
res.status(201).json({ message: messages.auth.USER_REGISTERED_SUCCESS });
} catch (error) {
res.status(500).json({ error: messages.auth.REGISTRATION_FAILED });
}
});

// User login
router.post('/login', async (req, res) => {
try {
const { username, password } = req.body;
const user = await User.findOne({ username });
if (!user) {
return res.status(401).json({ error: messages.auth.AUTHENTICATION_FAILED });
}
const passwordMatch = await bcrypt.compare(password, user.password);
if (!passwordMatch) {
return res.status(401).json({ error: messages.auth.AUTHENTICATION_FAILED });
}
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
expiresIn: '1h',
});
res.status(200).json({ token });
} catch (error) {
res.status(500).json({ error: messages.auth.LOGIN_FAILED });
}
});

module.exports = router;