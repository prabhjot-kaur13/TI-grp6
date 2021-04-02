const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const itemRoute = require("./api/routes/itemRoute.js");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://root:5709password@websample.1hjg2.mongodb.net/sampledb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Database Connected")
);

app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/item", itemRoute);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

console.log("runnning server now");
console.log(process.env.PORT);

app.listen(process.env.PORT || 3010);
