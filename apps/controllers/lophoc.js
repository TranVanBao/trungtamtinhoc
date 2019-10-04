let model = require("../models/index");
let action = require("../models/action");
var bodyParser = require("body-parser");

module.exports = {
  add: async  (req, res) => {
    try {      
      addlophoc = {
        tenlop: req.body.ten,
        thoigianbatdau: req.body.ngaybatdau,
        thoigianketthuc: req.body.ngayketthuc,       
        trangthai: req.body.trangthai
      };
      
     var themlh = new model.lophoc.Model(addlophoc);
      themlh.save(function(err, fluffy) {
        if (err) return console.error(err);
        console.log(1);
        res.redirect("/admin/listlophoc");
      });
    } catch {
      console.log(0);
      res.redirect("/admin");
    }
  },
  update: async (req, res) => {
    try {     
            
      let khoahoc = model.khoahoc.model;
      console.log(req.file.originalname); 
      let id = req.params.idkh;
       kh = {
        tenkhoahoc: req.body.ten,
        hinhanh: req.file.originalname,
        dieukien: req.body.dieukien,
        loaikhoahoc: req.body.loai,
        phidichvu: req.body.phidichvu,
        trangthai: req.body.trangthai
      };   
           
      let kq = await action.capNhapDuLieu(khoahoc,id,kh);
      res.redirect("/admin/khoahocoff");
    } catch {
      console.log("Không update khóa học được");
      res.redirect("/admin");
    }
  },
  delete: async (req, res) => {
    let khoahoc = model.khoahoc.model;
    let id = req.params.idkh;
      //console.log(id);
     let kq = await action.xoaDuLieu(khoahoc, id);
   
     if (kq == 0) res.redirect("/admin");
     else res.redirect("/admin/khoahocoff");
  }
};
