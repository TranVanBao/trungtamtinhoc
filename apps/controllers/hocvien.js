let model = require("../models/index");
let action = require("../models/action");
var bodyParser = require("body-parser");
module.exports = {
  add:   (req, res) => {
    try {   
        addhocvien = {
        hoten: req.body.ten,
        SDT:req.body.sdt,
        email:req.body.email,
        diachi:req.body.diachi, 
        gioitinh: req.body.gioitinh,
        trangthai:req.body.trangthai,  
        ngaysinh: req.body.ngaysinh   
      };
     
      
     var themhv = new model.hocvien.Model(addhocvien);
      themhv.save(function(err, fluffy) {
        if (err) return console.error(err);
        console.log("Them thanh cong");
        res.redirect("/admin/listhocvien");
      });
    } catch {
      console.log("Khong them duoc");
      res.redirect("/admin");
    }
  },
  update: async (req, res) => {
    try {      
      let id = req.params.idhv;   
      
      addhocvien = {
        hoten: req.body.ten,
        SDT:req.body.sdt,
        email:req.body.email,
        diachi:req.body.diachi, 
        gioitinh: req.body.gioitinh,
        trangthai:req.body.trangthai,  
        ngaysinh: req.body.ngaysinh   
      };
     
     
      let kq = await action.capNhapDuLieu(model.hocvien.Model,id,addhocvien);
      res.redirect("/admin/listhocvien");
    } catch {
      console.log("Không update khóa học được");
      res.redirect("/admin");
    }
  },
  delete: async (req, res) => {
    let hocvien = model.hocvien.Model;
    let id = req.params.idhv;
     // console.log(id);
     let kq = await action.xoaDuLieu(hocvien, id);
   
     if (kq == 0) res.redirect("/admin");
     else res.redirect("/admin/listhocvien");
  }
};
