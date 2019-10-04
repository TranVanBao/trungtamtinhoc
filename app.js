const express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();
//const morgan = require("morgan");

// database
const db = require("./helpers/dbconnect");
const models = require("./apps/models/index");
const rad = require("./apps/router/admin");
const nguoidung = require("./apps/router/nguoidung");
var taikhoan = require("./apps/models/taikhoan.model");
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(morgan("dev"));

// duong dan tuyet doi
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(rad);
app.use(nguoidung);
const port = process.env.port || 3000;

// thong baoa ket noi db
var db1 = mongoose.connection;
db1.on("error", console.error.bind(console, "connection error:"));
db1.once("open", function() {
  // we're connected!
  console.log("Ket noi thanh cong");
});

app.listen(port, console.log(`Server start on port ${port}!`));
