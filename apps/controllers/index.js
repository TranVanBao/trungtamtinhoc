var express = require("express");
var router = express.Router();
var routerAD=require('./outsite/main');
var routerND = require('./admin/admin')

router.use(routerAD);
router.use(routerND);


router.get("/",function(req,res){
    // res.json({"message": "This is Home Page"})
    res.render("../views/outsite/index.ejs");
});



module.exports =router;