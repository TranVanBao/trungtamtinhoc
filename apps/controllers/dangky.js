let model = require("../models/index");
let action = require("../models/action");
var bodyParser = require("body-parser");

module.exports = {
  add:   (req, res) => {
    try {          
            let d = new Date();
        
        addhocvien = {
        hoten: req.body.ten,
        SDT:req.body.sdt,
        email:req.body.email,
        diachi:req.body.diachi, 
        trangthai:req.body.trangthai,
        ten_khoahoc:req.body.khoahoc,
        ngaydangky:  Number(d)     
            
      };
      
     var themhv = new model.dangky.Model(addhocvien);

      themhv.save(function(err, fluffy) {
        if (err) return console.error(err);
        console.log("Them thanh cong");
        res.redirect("/admin/listdangky");
      });
    } catch {
      console.log("Khong them duoc");
      res.redirect("/admin");
    }
  },
  update: async (req, res) => {
    try {      
      let id = req.params.iddangky;      
      updatedangky = {
        hoten: req.body.ten,
        SDT:req.body.sdt,
        email:req.body.email,
        diachi:req.body.diachi, 
        trangthai:req.body.trangthai,
        ten_khoahoc:req.body.khoahoc
             
      };
     
      let kq = await action.capNhapDuLieu(model.dangky.Model,id,updatedangky);
      res.redirect("/admin/listdangky");
    } catch {
      console.log("Không update khóa học được");
      res.redirect("/admin");
    }
  },
  delete: async (req, res) => {
    let dangky = model.dangky.Model;
    let id = req.params.iddangky;
     // console.log(id);
     let kq = await action.xoaDuLieu(dangky, id);
   
     if (kq == 0) res.redirect("/admin");
     else res.redirect("/admin/listdangky");
  },

  //  lay danh sach khoa hoc 
  selectkhoahoc: async (req, res) => {
    model.khoahoc.model.find({}, function(err, khoahoc){
      if(err){
          console.log(err);
          return
      }  
      if(dulieu.length == 0) {
          console.log("No record found")
          res.render("../views/admin/dangky/listdangky.ejs",{ khoahoc: khoahoc});
          return
      }  
     // console.log(dulieu);
      var stt=0
      
      res.render("../views/admin/dangky/listdangky.ejs",{ khoahoc: khoahoc});
  })
  }
};
