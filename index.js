const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const addRouter = require("./router/add");
const genericRoute = require("./router/genericRoute");
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());
// app.use("/add", addRouter);
app.use("/campagins", genericRoute);
app.get("/", (req, res) => {
  res.send("welcome to node js");
});
const CONNECTION_URL =
  "mongodb+srv://admin:admin123456@cluster0.aher6.mongodb.net/demoDB?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("server runnin on :", PORT)))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
