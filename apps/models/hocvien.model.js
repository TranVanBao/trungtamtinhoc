const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    hoten: {
        type: String,       
        required: true
    },
    SDT: {
        type: Number,       
        required: true
    },    
    email: {
        type: String,       
        //required: true
    },
    ngaysinh : {
        type: String,       
       // required: true
    },
    diachi : {
        type: String,       
       // required: true
    },
    gioitinh: {
        type: String,       
        //required: true
    },   
    trangthai: {
        type: Number,       
        default: 1
    },  
       
},{ collection: 'hocvien' })


const Model = mongoose.model('hocvien', PostSchema);

var method =  {

}

module.exports = { Model, method }