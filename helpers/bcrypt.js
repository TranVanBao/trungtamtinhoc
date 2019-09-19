
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
const saltRounds = 10;
var colection = require("../apps/models/index")

class modelUser {
  

    async logIn (acc)  {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.compare(acc.pass, acc[0].password, (err, res) => {
                    if (err)
                        return reject(err);
                    else
                        return resolve(1);
                })
            });
        });
    }
    async checkAccount (tk, done)  {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.compare(tk.password, tk[0].password, (err, res) => {
                if (res)
                    return done(null, tk[0]);
                else
                    return done(null, false);
            })
        });
    }


  async checkTK(tk, done){

    //console.log(tk.tentaikhoan);
    
    let taik =await colection.taikhoan.findOne( {'tentaikhoan': tk.tentaikhoan} );
        if (tk.length != 0)
        {tk = { ...tk, matkhau: password };
        taikhoan.method.checkAccount(tk, done);}
        else
        return done(null, false, { message: 'Tai khoan khong ton tai.' });
    }   

   async getAccount(username,password,done){
       
       
    let tk =await colection.taikhoan.findOne({ 'tentaikhoan': username });
    console.log(tk);
    if (tk != null ) {
      // tk = { ...tk, password: password };
      // modelUser.method.checkAccount(tk, done);
        bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.compare(password, tk.matkhau, (err, res) => {    
              
              if (res)
                  return done(null, tk);
              else
                  return done(null, false);
          })
  });
      }
  else
      return done(null, false, { message: 'Tai khoan khong ton tai.' });
  }
}
module.exports=modelUser;