let model = require('../models/index')
let action = require('../models/action')
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");

module.exports = {    

    
    addAccount: async (req, res) => {      
                  
        try {
            const hashedpassword = await bcrypt.hash(req.body.password, 10);
            let taikhoan = model.taikhoan.model;
            
            user = {
              tentaikhoan: req.body.username,
              email: req.body.email,
              matkhau: hashedpassword,
              quyen: req.body.role
            };
        
            var themTk = new model.taikhoan.model(user);
            themTk.save(function(err, fluffy) {
              if (err) return console.error(err);
              console.log(1);
              res.redirect("/admin/table");
            });
          } catch {
            console.log(0);
            res.redirect("/admin");
          }
    },
    updateAccount: async (req, res) => {                  
      try {
        let taikhoan = model.taikhoan.model;
        const hashedpassword = await bcrypt.hash(req.body.password, 10);
        let id = req.params.idtk;       
        user = {
          tentaikhoan: req.body.username,
          email: req.body.email,
          matkhau: hashedpassword,
          quyen: req.body.role
        };
        //let kq = await action.capNhapDuLieu(taikhoan,id,user);
        res.redirect("/admin/taikhoannv");
      } catch {
        console.log(0);
        res.redirect("/admin");
      }
    },
    deleteAccount: async (req, res) => {
        let taikhoan = model.taikhoan.model;
        let id = req.params.idtk;
       let kq = await action.xoaDuLieu(taikhoan,id);
    // console.log(action.xoaDuLieu(taikhoan,id));
    if(kq == 0)
       res.redirect("/admin/table");
    else
       res.redirect("/admin/taikhoannv")
     
       
    }



}