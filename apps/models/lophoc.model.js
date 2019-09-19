const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    tenlop: {
        type: String,       
        required: true
    },  
    thoigianbatdau : {
        type: Date,       
        default: Date.now
    }, 
    thoigianketthuc : {
        type: Date   
        
    }, 
    soluonghocvien : {
        type: Number,       
        default: 0
    },
    id_hocvien: {
        type: Schema.Types.ObjectId, 
        ref: 'hocvien'
    }, 
    id_giangvien: {
        type: Schema.Types.ObjectId, 
        ref: 'giangvien'
    }, 
    id_khoahoc: {
        type: Schema.Types.ObjectId, 
        ref: 'khoahoc'
    }, 
  
    trangthai : {
        type: Number,       
        default: 1
    },
},{ collection: 'lophoc' })
const Model = mongoose.model('lophoc', PostSchema);

var method =  {

}

module.exports = { Model, method }