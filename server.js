const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(express.json());

let products = [
  {
    id: 1,
    name: "Iphone 11",
    price: 27000,
    stock: 5,
    image: "",
    colorOptions: ["black", "white", "red", "gray"],
    type: "mobile",
  },
  {
    id: 2,
    name: "Iphone 11 Pro",
    price: 30000,
    stock: 6,
    image: "",
    colorOptions: ["black", "white"],
    type: "mobile",
  },
  {
    id: 3,
    name: "Iphone 12",
    price: 35000,
    stock: 8,
    image: "",
    colorOptions: ["black", "red", "gray"],
    type: "mobile",
  },
  {
    id: 4,
    name: "Iphone 12 Pro",
    price: 37000,
    stock: 15,
    image: "",
    colorOptions: ["red", "gray"],
    type: "mobile",
  },
  {
    id: 5,
    name: "Iphone 13",
    price: 39000,
    stock: 1,
    image: "",
    colorOptions: ["black", "gray"],
    type: "mobile",
  },
  {
    id: 6,
    name: "Iphone 13 Pro",
    price: 40000,
    stock: 6,
    image: "",
    colorOptions: ["black", "white", "gray"],
    type: "mobile",
  },
  {
    id: 7,
    name: "Iphone 14",
    price: 42000,
    stock: 4,
    image: "",
    colorOptions: ["black", "white", "red"],
    type: "mobile",
  },
  {
    id: 8,
    name: "Iphone 14 Pro",
    price: 45000,
    stock: 1,
    image: "",
    colorOptions: ["white", "red", "gray"],
    type: "mobile",
  },
  {
    id: 9,
    name: "Iphone 15",
    price: 60000,
    stock: 14,
    image: "",
    colorOptions: ["black", "red", "gray"],
    type: "mobile",
  },
  {
    id: 10,
    name: "Iphone 15 Pro",
    price: 70000,
    stock: 11,
    image: "",
    colorOptions: ["black"],
    type: "mobile",
  },
  {
    id: 11,
    name: "Macbook Pro",
    price: 66000,
    stock: 5,
    image: "",
    colorOptions: ["white", "gray"],
    type: "laptop",
  },
  {
    id: 12,
    name: "Macbook Air",
    price: 54000,
    stock: 8,
    image: "",
    colorOptions: ["white", "gray"],
    type: "laptop",
  },
  {
    id: 13,
    name: "Monster Tulpar",
    price: 55000,
    stock: 11,
    image: "",
    colorOptions: ["black"],
    type: "laptop",
  },
  {
    id: 14,
    name: "Airpods",
    price: 20000,
    stock: 18,
    image: "",
    colorOptions: ["black", "white"],
    type: "earphone",
  },
  {
    id: 15,
    name: "JBL Earphone",
    price: 12000,
    stock: 11,
    image: "",
    colorOptions: ["black", "white", "red", "purple"],
    type: "earphone",
  },
  {
    id: 16,
    name: "SONY Headset",
    price: 35000,
    stock: 10,
    image: "",
    colorOptions: ["black", "white"],
    type: "earphone",
  },
  {
    id: 17,
    name: "Magic Mouse",
    price: 5000,
    stock: 6,
    image: "",
    colorOptions: ["black", "white"],
    type: "mouse",
  },
  {
    id: 18,
    name: "Logipop",
    price: 900,
    stock: 4,
    image: "",
    colorOptions: ["pink", "green", "white"],
    type: "mouse",
  },
  {
    id: 19,
    name: "Windows Mouse",
    price: 1000,
    stock: 3,
    image: "",
    colorOptions: ["black", "white", "gray"],
    type: "mouse",
  },
  {
    id: 20,
    name: "Samsun S20",
    price: 65000,
    stock: 1,
    image: "",
    colorOptions: ["black", "white", "red", "gray"],
    type: "mobile",
  },
];

//Get all product
app.get("/products", (req, res) => {
  res.json(products);
});

//Get a product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) return;
  res.status(404).send("Product not found");
  res.json(product);
});

//Get procucts with type
app.get("/products/:type", (req, res) => {
  const product = products.find((p) => p.type === parseInt(req.params.type));
  if (product) return;
  res.status(404).send("Product type has not any item");
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
