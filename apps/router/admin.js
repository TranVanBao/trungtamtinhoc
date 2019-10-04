var express = require("express");
var router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
const session = require("express-session");
const multer = require("multer");
//  =========== require===============
let uploadImg = require("../controllers/uploadImages");
let Ctaikhoan = require("../controllers/taikhoan");
let Ckhoahoc = require("../controllers/khoahocoff");
let Cgiangvien = require("../controllers/nhanvien");
let Chocvien = require("../controllers/hocvien");
let Cphonghoc = require("../controllers/phonghoc");
let Cdangky = require("../controllers/dangky");
let Clophoc = require("../controllers/lophoc");
// ============== login ==============================//
var { taikhoan } = require("../models/index");
var colection = require("../models/index");
router.use(
  session({
    secret: "something",
    cookie: { maxAge: 1000 * 60 * 3600 },
    proxy: true,
    resave: false,
    saveUninitialized: true
  })
);
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));
router.use(passport.initialize());
router.use(passport.session());

//================= router =============================

router.route("/admin").get((req, res) => {
  if (req.isAuthenticated()) {
    res.render("../views/admin/index.ejs", { name: req.user.tentaikhoan });
  } else res.redirect("/login");
});
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

//===================== end login log-out==================================//

router.get("/admin/table", function(req, res) {
  // res.json({"message": "This is Home Page"})
  taikhoan.model.find({}, function(err, dulieu) {
    if (err) {
      console.log(err);
      return;
    }
    if (dulieu.length == 0) {
      console.log("No record found");
      return;
    }
    // console.log(dulieu);
    var stt = 0;
    res.render("../views/admin/table.ejs", {
      name: req.user.tentaikhoan,
      stt,
      data: dulieu
    });
  });
});
// ============ tai khoan ================
router.get("/admin/taikhoannv", (req, res) => {
  if (req.isAuthenticated()) {
    taikhoan.model.find({}, function(err, dulieu) {
      if (err) {
        console.log(err);
        return;
      }
      if (dulieu.length == 0) {
        console.log("No record found");
        return;
      }
      // console.log(dulieu);
      var stt = 0;
      res.render("../views/admin/taikhoan/listtaikhoan.ejs", {
        name: req.user.tentaikhoan,
        stt,
        data: dulieu
      });
    });
  } else res.redirect("/login");
});
router.post("/admin/themtaikhoan", Ctaikhoan.addAccount);
router.get("/xoatk/:idtk", Ctaikhoan.deleteAccount);
router.post("/suatk/:idtk", Ctaikhoan.updateAccount);

// ============ khoa hoc ================

// router khoa hoc
router.get("/admin/khoahocoff", (req, res) => {
  if (req.isAuthenticated()) {
    colection.khoahoc.model.find({}, function(err, dulieu) {
      if (err) {
        console.log(err);
        return;
      }
      if (dulieu.length == 0) {
        console.log("No record found");
        res.render("../views/admin/khoahoc/listkhoahoc.ejs", {
          name: req.user.tentaikhoan,
          stt,
          data: dulieu
        });
        return;
      }
      // console.log(dulieu);
      var stt = 0;
      res.render("../views/admin/khoahoc/listkhoahoc.ejs", {
        name: req.user.tentaikhoan,
        stt,
        data: dulieu
      });
    });
  } else res.redirect("/login");
});

var single = uploadImg.single("file");
router.post("/admin/themkhoahoc", single, Ckhoahoc.add);
router.get("/xoakh/:idkh", Ckhoahoc.delete);
router.post("/admin/suakh/:idkh", single, Ckhoahoc.update);

// =================== nhan vien ===============================

router.get("/admin/listnhanvien", (req, res) => {
  if (req.isAuthenticated()) {
    colection.giangvien.Model.find({}, function(err, dulieu) {
      if (err) {
        console.log(err);
        return;
      }
      if (dulieu.length == 0) {
        console.log("No record found");
        res.render("../views/admin/nhanvien/listnv.ejs", {
          name: req.user.tentaikhoan,
          stt,
          data: dulieu
        });
        return;
      }
      // console.log(dulieu);
      var stt = 0;
      res.render("../views/admin/nhanvien/listnv.ejs", {
        name: req.user.tentaikhoan,
        stt,
        data: dulieu
      });
    });
  } else res.redirect("/login");
});

var single = uploadImg.single("file");
router.post("/admin/themnv", single, Cgiangvien.add);
router.get("/xoanv/:idnv", Cgiangvien.delete);
router.post("/admin/suanv/:idnv", single, Cgiangvien.update);

// =================== hoc vien ===============================

router.get("/admin/listhocvien", (req, res) => {
  if (req.isAuthenticated()) {
    colection.hocvien.Model.find({}, function(err, dulieu) {
      if (err) {
        console.log(err);
        return;
      }
      if (dulieu.length == 0) {
        console.log("No record found");
        res.render("../views/admin/hocvien/listhocvien.ejs", {
          name: req.user.tentaikhoan,
          stt,
          data: dulieu
        });
        return;
      }
      // console.log(dulieu);
      var stt = 0;

      res.render("../views/admin/hocvien/listhocvien.ejs", {
        name: req.user.tentaikhoan,
        stt,
        data: dulieu
      });
    });
  } else res.redirect("/login");
});

router.post("/admin/themhv", Chocvien.add);
router.get("/xoahv/:idhv", Chocvien.delete);
router.post("/admin/suahv/:idhv", Chocvien.update);

// =================== phong hoc ===============================

router.get("/admin/listphonghoc", (req, res) => {
  if (req.isAuthenticated()) {
    colection.phonghoc.Model.find({}, function(err, dulieu) {
      if (err) {
        console.log(err);
        return;
      }
      if (dulieu.length == 0) {
        console.log("No record found");
        res.render("../views/admin/phonghoc/listphonghoc.ejs", {
          name: req.user.tentaikhoan,
          stt,
          data: dulieu
        });
        return;
      }
      // console.log(dulieu);
      var stt = 0;

      res.render("../views/admin/phonghoc/listphonghoc.ejs", {
        name: req.user.tentaikhoan,
        stt,
        data: dulieu
      });
    });
  } else res.redirect("/login");
});

router.post("/admin/themphong", Cphonghoc.add);
router.get("/xoaphong/:idphong", Cphonghoc.delete);
router.post("/admin/suaphong/:idphong", Cphonghoc.update);

// =================== dang ky ===============================

router.get("/admin/listdangky", (req, res) => {
  if (req.isAuthenticated()) {
    colection.dangky.Model.find({}, function(err, dulieu) {
      if (err) {
        console.log(err);
        return;
      }
      if (dulieu.length == 0) {
        console.log("No record found");
        colection.khoahoc.model.find({}, function(err, dl) {
          if (dl.length == 0) {
            console.log("No record found");
            return;
          }
          return dl
        });
        res.render("../views/admin/dangky/listdangky.ejs", {
          name: req.user.tentaikhoan,
          stt,
          data: dulieu,
          khoahoc: khoahoc
        });
        return;
      }
      // console.log(dulieu);
      var stt = 0;
       colection.khoahoc.model.find({}, function(err, dl) {
       res.render("../views/admin/dangky/listdangky.ejs", {
          name: req.user.tentaikhoan,
          stt,
          data: dulieu,
          khoahoc: dl
        });
      });

      
    });
  } else res.redirect("/login");
});
router.post("/admin/themdangky", Cdangky.add);
router.get("/xoadangky/:iddangky", Cdangky.delete);
router.post("/admin/suadangky/:iddangky", Cdangky.update);

// =================== Lop hoc ===============================

router.get("/admin/listlophoc", (req, res) => {
  if (req.isAuthenticated()) {
    colection.lophoc.Model.find({}, function(err, dulieu) {
      if (err) {
        console.log(err);
        return;
      }
      if (dulieu.length == 0) {
        console.log("No record found");
        res.render("../views/admin/lophoc/listlophoc.ejs", {
          name: req.user.tentaikhoan,
          stt,
          data: dulieu
        });
        return;
      }
      // console.log(dulieu);
      var stt = 0;

      res.render("../views/admin/lophoc/listlophoc.ejs", {
        name: req.user.tentaikhoan,
        stt,
        data: dulieu
      });
    });
  } else res.redirect("/login");
});

router.post("/admin/themlophoc", Clophoc.add);
router.get("/xoalophoc/:idlophoc", Clophoc.delete);
router.post("/admin/sualophoc/:idlophoc", Clophoc.update);

//===================================== end =================================//
module.exports = router;
