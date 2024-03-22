import express from "express";
import cors from "cors";
import handleAdminRoutes from "./routes/admin.js";
import handleShopRoutes from "./routes/shop.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const adminRoutes = handleAdminRoutes();
const shopRoutes = handleShopRoutes();

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  const error = "page not found in server";
  res.status(404).json(error);
});

app.listen(3000);
