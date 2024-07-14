require("dotenv").config();
var express = require("express");
var ClientRouter = require("../routes/client");
var SiteRouter = require("../routes/site");
var orderRouter = require("../routes/ordre");
var vehiculeRouter = require("../routes/vehicule");
var indexRouter = require("../routes/index");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/client", ClientRouter);
app.use("/vehicule", vehiculeRouter);
app.use("/site", SiteRouter);
app.use("/ordre", orderRouter);
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("`OR-authall` is running on port ", process.env.PORT || 3000);
});
``;
