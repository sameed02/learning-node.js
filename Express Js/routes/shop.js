import express from "express";

const router = express.Router();

router.get("/shop", (req, res, next) => {
  console.log("shop");
  const product = "hello node from products";
  res.json(product);
});

export default function handleShopRoutes() {
  return router;
}
