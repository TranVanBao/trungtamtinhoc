const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const saltRounds = 10;
const schema = mongoose.Schema;
const PostSchema = new schema({
    tentaikhoan: {
        type: String,       
      //  required: true
    },
    matkhau: {
        type: String,       
       // required: true
    },
    email:{
        type: String,  
        lowercase: true     
      //  required: true
    },
    quyen:{
        type: Number,       
        default : 0
    },
    trangthai: {
        type: Number,       
        default: 1
    }
},{ collection: 'taikhoan' })
var model = mongoose.model('taikhoan', PostSchema);

var method = {
    getAccount: async (username,password,done) => {
        let tk =await model.find({tentaikhoan: username});
        
        
        if (tk != null ) {   
            bcrypt.genSalt(saltRounds, (err, salt) => {
              bcrypt.compare(password, tk[0].matkhau, (err, res) => {    
                console.log(res);
                  if (res)
                      return done(null, tk);
                  else
                      return done(null, false);
              })
      });
          }
      else
          return done(null, false, { message: 'Tai khoan khong ton tai.' });
      },
      checkAccount: async (acc, done) => {       
        let tk = await model.find({ tentaikhoan: acc[0].tentaikhoan });                
        if (tk)
            return done(null, tk[0]);
        else
            return done(null, false, { message: 'Tai khoan khong ton tai.' });
    },
    }


module.exports =  {model ,  method }