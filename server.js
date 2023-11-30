const connection = require("./models/db_connection");
const cors = require("cors");
const express = require("express");
const path= require('path');


const app = express();
app.use(express.json());
app.use(cors());

app.use(express.json())


app.use("/api/user", require("./routes/user_routes"));

app.use('/images', express.static(path.join(__dirname, '../images')));
app.use("/api/product", require("./routes/product_routes"));

app.use("/api/category", require("./routes/category_routes"));

app.use("/api/order", require("./routes/order_routes"));

app.use("/api/cart", require("./routes/cart_routes"));



app.listen("8080", () => {
  console.log("Server Started...");
});