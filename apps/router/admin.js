var express = require('express');
var router = express.Router();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require('express-session')

var { taikhoan } = require("../models/index");

router.use(session({
    secret: 'something',
    cookie: { maxAge: 1000 * 60 * 3600 },
    proxy: true,
    resave: false,
    saveUninitialized: true
}));


router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
router.use(bodyParser.json({ limit: '50mb' }));
router.use(passport.initialize());
router.use(passport.session());



router.route('/admin')
.get((req,res) => {   
    if(req.isAuthenticated()){
       console.log(req.user);
        res.render('../views/admin/index.ejs', {name : 'req.user.tentaikhoan '});
   }   
  else
   res.redirect('/login')
})
//======================== login - log out ------------------------//
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
  
router
  .route("/login")
  .get((req, res) => {
    res.render("../views/admin/login.ejs");   
  })
  // verify account
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
      successRedirect: "/admin"
    })
  );
passport.use("local", new LocalStrategy(taikhoan.method.getAccount));
passport.serializeUser((tk, done) => {    
  done(null, tk);
});
passport.deserializeUser(taikhoan.method.checkAccount);


module.exports = router;