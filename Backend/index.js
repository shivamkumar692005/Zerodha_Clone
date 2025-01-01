require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");

const HoldingsModel = require("./Model/HoldingModel");
const OrdersModel = require("./Model/OrderModel");
const PositionsModel = require("./Model/PositionsModel");

const app = express();
const PORT = process.env.PORT || 3002;  
const url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
async function main() {
    await mongoose.connect(url);
}
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  });
  
  app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  });
  
  app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
  
    newOrder.save();
  
    res.send("Order saved!");
  });
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
  
});
