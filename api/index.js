require("dotenv").config();
var express = require("express");
var ClientRouter = require("../routes/client");
var SiteRouter = require("../routes/site");
var orderRouter = require("../routes/ordre");
var vehiculeRouter = require("../routes/vehicule");
var indexRouter = require("../routes/index");
const cors = require("cors");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["POST", "GET", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

app.use("/client", ClientRouter);
app.use("/vehicule", vehiculeRouter);
app.use("/site", SiteRouter);
app.use("/ordre", orderRouter);
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("`OR-authall` is running on port ", process.env.PORT || 3000);
});
``;
