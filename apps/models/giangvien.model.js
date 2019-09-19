const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    tengiangvien: {
        type: String,       
        required: true
    },
    SDT: {
        type: Number,       
        required: true
    },    
    email: {
        type: String,       
        required: true
    },
    diachi : {
        type: String,       
        required: true
    },
    gioitinh: {
        type: String,       
        required: true
    },
    linhvuc : {
        type: String,       
        required: true
    },   
    trangthai: {
        type: Number,       
        default: 1
    },
    id_taikhoan: {
        type: Schema.Types.ObjectId, 
        ref: 'taikhoan'
    },
       
},{ collection: 'giangvien' })


const Model = mongoose.model('giangvien', PostSchema);

var method =  {

}

module.exports = { Model, method }