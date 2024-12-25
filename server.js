const express = require("express");
const cors = require("cors");
const rateLimiter = require("./middleware/rateLimiter");
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protectedRoute");
const messages = require("./data/messages");
const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);
app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${messages.server.SERVER_RUNNING} ${PORT}`);
});
