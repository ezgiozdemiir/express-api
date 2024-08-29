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
    image:
      "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/1200/1200/productimage/125077800/125077800_0_MC/1234.jpg",
    colorOptions: ["black", "white", "red", "gray"],
    type: "mobile",
  },
  {
    id: 2,
    name: "Iphone 11 Pro",
    price: 30000,
    stock: 6,
    image:
      "https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-11-Pro-256GB-Space-Gray-Fully-Unlocked-Refurbished-Good_903e01ca-2271-40fa-bac3-62deae75a0ca.df01706b06717434601e0e4f62ec1235.jpeg",
    colorOptions: ["black", "white"],
    type: "mobile",
  },
  {
    id: 3,
    name: "Iphone 12",
    price: 35000,
    stock: 8,
    image:
      "https://i5.walmartimages.com/seo/Apple-iPhone-12-A2172-256GB-Black-US-Model-Factory-Unlocked-Cell-Phone-Excellent-Condition_72803c78-7209-4996-9644-9cff3048e292.aac9c9ca839fe1f6ae37d76e3b799661.jpeg",
    colorOptions: ["black", "red", "gray"],
    type: "mobile",
  },
  {
    id: 4,
    name: "Iphone 12 Pro",
    price: 37000,
    stock: 15,
    image:
      "https://www.incehesap.com/resim/urun/202012/5fcf2c61172836.09309494_phlmoqgnikjef_500.webp",
    colorOptions: ["red", "gray"],
    type: "mobile",
  },
  {
    id: 5,
    name: "Iphone 13",
    price: 39000,
    stock: 1,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-13-finish-unselect-gallery-1-202207_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=WGQwVDZoTWdLODlMWERUbVY5M013dFgrSXpWVEhWaW9YTGlWRHFoSHU0OTdiNW5KU1VHNUdNN1hwR2ZLWkZrV3NCckZqMTMrS3dIUWFPL2dFWXJDTmhNQnJMcnc4RkxJd3ZMc3hKZVVFWHZ2UXcrMDFsU2Ixb1NRMEpLZFhXYnlKM3ZXd25kQVFkTmhRSjhQenRTazlBPT0=&traceId=1",
    colorOptions: ["black", "gray"],
    type: "mobile",
  },
  {
    id: 6,
    name: "Iphone 13 Pro",
    price: 40000,
    stock: 6,
    image:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111871_iphone13-pro-colors-480.png",
    colorOptions: ["black", "white", "gray"],
    type: "mobile",
  },
  {
    id: 7,
    name: "Iphone 14",
    price: 42000,
    stock: 4,
    image:
      "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-14/carousel/blue/blue-5.png",
    colorOptions: ["black", "white", "red"],
    type: "mobile",
  },
  {
    id: 8,
    name: "Iphone 14 Pro",
    price: 45000,
    stock: 1,
    image:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111846_sp875-sp876-iphone14-pro-promax.png",
    colorOptions: ["white", "red", "gray"],
    type: "mobile",
  },
  {
    id: 9,
    name: "Iphone 15",
    price: 60000,
    stock: 14,
    image:
      "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/140315-6_large.jpg",
    colorOptions: ["black", "red", "gray"],
    type: "mobile",
  },
  {
    id: 10,
    name: "Iphone 15 Pro",
    price: 70000,
    stock: 11,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-family-select?wid=4000&hei=3794&fmt=jpeg&qlt=90&.v=1692893972634",
    colorOptions: ["black"],
    type: "mobile",
  },
  {
    id: 11,
    name: "Macbook Pro",
    price: 66000,
    stock: 5,
    image:
      "https://images.hepsiburada.net/description-assets/description-prod-6/80115d2e-7ad3-486b-a55b-a1962b9e3664.jpg",
    colorOptions: ["white", "gray"],
    type: "laptop",
  },
  {
    id: 12,
    name: "Macbook Air",
    price: 54000,
    stock: 8,
    image:
      "https://www.pt.com.tr/wp-content/uploads/2024/06/grWgqJmKLIkeEbPmxxtDBeTek0uajD8aetAQXgL8.webp",
    colorOptions: ["white", "gray"],
    type: "laptop",
  },
  {
    id: 13,
    name: "Monster Tulpar",
    price: 55000,
    stock: 11,
    image:
      "https://productimages.hepsiburada.net/s/777/375-375/110000713356837.jpg",
    colorOptions: ["black"],
    type: "laptop",
  },
  {
    id: 14,
    name: "Airpods",
    price: 20000,
    stock: 18,
    image:
      "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg.news_app_ed.jpg",
    colorOptions: ["black", "white"],
    type: "earphone",
  },
  {
    id: 15,
    name: "JBL Earphone",
    price: 12000,
    stock: 11,
    image:
      "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/145078405/145078405_0_MC/60977129.jpg",
    colorOptions: ["black", "white", "red", "purple"],
    type: "earphone",
  },
  {
    id: 16,
    name: "SONY Headset",
    price: 35000,
    stock: 10,
    image:
      "https://ideacdn.net/shop/ae/82/myassets/products/874/sony-playstation-5-pulse-3d-wireless-headset-grey-camo.png?revision=1717771693",
    colorOptions: ["black", "white"],
    type: "earphone",
  },
  {
    id: 17,
    name: "Magic Mouse",
    price: 5000,
    stock: 6,
    image:
      "https://productimages.hepsiburada.net/s/528/375-375/110000585214611.jpg",
    colorOptions: ["black", "white"],
    type: "mouse",
  },
  {
    id: 18,
    name: "Logipop",
    price: 900,
    stock: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzFKUnjyFRNKEFiCcqJ90Tgh9Qou2bFF-8w&s",
    colorOptions: ["pink", "green", "white"],
    type: "mouse",
  },
  {
    id: 19,
    name: "Windows Mouse",
    price: 1000,
    stock: 3,
    image:
      "https://support.content.office.net/tr-tr/media/e8384959-ad1a-1b95-762b-2861496b886e.png",
    colorOptions: ["black", "white", "gray"],
    type: "mouse",
  },
  {
    id: 20,
    name: "Samsun S20",
    price: 65000,
    stock: 1,
    image:
      "https://cdn.akakce.com/z/samsung/samsung-galaxy-s20-128-gb-pembe.jpg",
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
