const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    tenkhachhang: {
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
    trangthai: {
        type: Number,       
        default: 1
    }, 
    id_taikhoan: {
        type: Schema.Types.ObjectId, 
        ref: 'taikhoan'
    }, 
       
},{ collection: 'khachhang' })


const Model = mongoose.model('khachhang', PostSchema);

var method =  {

}

module.exports = { Model, method }