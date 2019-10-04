
var express = require('express');
var router = express.Router();
const passPort = require('passport');
const passPortLocal = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require('express-session');
// session
var router = express.Router();
var user = [];

//====================== router =================================//
router.get("/", function(req, res) {
   res.render('../views/outsite/index.ejs')
  });
//=================================================================//
router.get("/contact", function(req, res) {
  // res.json({"message": "This is Home Page"})
  res.render("../views/outsite/contact.ejs");
});
router.get("/blog", function(req, res) {
  // res.json({"message": "This is Home Page"})
  res.render("../views/outsite/blog.ejs");
});

router.get("/khoahoc", function(req, res) {
  // res.json({"message": "This is Home Page"})
  res.render("../views/outsite/khoahoc.ejs");
});

router.get("/dangky", function(req, res) {
  // res.json({"message": "This is Home Page"})
  res.render("../views/outsite/dangky.ejs");
});

//==================end=====================================//
module.exports = router;
