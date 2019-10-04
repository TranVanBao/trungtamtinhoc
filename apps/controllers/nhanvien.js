let model = require("../models/index");
let action = require("../models/action");
var bodyParser = require("body-parser");
const multer = require("multer");
module.exports = {
  add:   (req, res) => {
    try {      
      
      addgiangvien = {
        tengiangvien: req.body.ten,
        SDT:req.body.sdt,
        email:req.body.email,
        diachi:req.body.diachi,
        gioitinh:req.body.gioitinh,
        linhvuc:req.body.linhvuc,
        hinhanh: req.file.originalname,
        trangthai:req.body.trangthai,
        
      };
     
      
     var themkh = new model.giangvien.Model(addgiangvien);

      themkh.save(function(err, fluffy) {
        if (err) return console.error(err);
        console.log("Them thanh cong");
        res.redirect("/admin/listnhanvien");
      });
    } catch {
      console.log("Khong them duoc");
      res.redirect("/admin");
    }
  },
  update: async (req, res) => {
    try {      
      let id = req.params.idnv;   
      let timid =  model.giangvien.Model.findById(id).exec()
      .then((ress) => {          
        return ress.hinhanh;
    })
    .catch((err) => {
        if (err)
            console.log(err);
    });       
      var picture1 = 0  
      if (req.file) {
       return picture1 = req.file.originalname
      }else if(ress.hinhanh ) {
        return picture1 = ress.hinhanh             
      }      
      addgiangvien = {
        tengiangvien: req.body.ten,
        SDT:req.body.sdt,
        email:req.body.email,
        diachi:req.body.diachi,
        gioitinh:req.body.gioitinh,
        linhvuc:req.body.linhvuc,
        hinhanh: picture1,
        trangthai:req.body.trangthai,       
      };
     
      let kq = await action.capNhapDuLieu(model.giangvien.Model,id,addgiangvien);
      res.redirect("/admin/listnhanvien");
    } catch {
      console.log("Không update khóa học được");
      res.redirect("/admin");
    }
  },
  delete: async (req, res) => {
    let giangvien = model.giangvien.Model;
    let id = req.params.idnv;
     // console.log(id);
     let kq = await action.xoaDuLieu(giangvien, id);
   
     if (kq == 0) res.redirect("/admin");
     else res.redirect("/admin/listnhanvien");
  }
};
