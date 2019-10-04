let model = require('../models/index')
let action = require('../models/action')
var bodyParser = require("body-parser");

module.exports = {    

    
    add: async (req, res) => {      
                  
        try {     
             
            user = {
              tenphong: req.body.ten,
              soluong: req.body.soluong,
              trangthai: req.body.trangthai              
            };
        
            var themTk = new model.phonghoc.Model(user);
            themTk.save(function(err, fluffy) {
              if (err) return console.error(err);
              console.log(1);
              res.redirect("/admin/listphonghoc");
            });
          } catch {
            console.log(0);
            res.redirect("/admin");
          }
    },
    update: async (req, res) => {                  
      try {
        let phonghoc = model.phonghoc.Model;  
        let id = req.params.idphong;       
        user = {
            tenphong: req.body.ten,
            soluong: req.body.soluong,
            trangthai: req.body.trangthai              
          };
        let kq = await action.capNhapDuLieu(phonghoc,id,user);
        res.redirect("/admin/listphonghoc");
      } catch {
        console.log(0);
        res.redirect("/admin");
      }
    },
    delete: async (req, res) => {
        let phonghoc = model.phonghoc.Model;
        let id = req.params.idphong;
       let kq = await action.xoaDuLieu(phonghoc,id);
    // console.log(action.xoaDuLieu(taikhoan,id));
    if(kq == 0)
       res.redirect("/admin");
    else
       res.redirect("/admin/listphonghoc")
     
       
    }



}