const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    id_lop: {
        type: Schema.Types.ObjectId, 
        ref: 'lophoc.model'
    }, 
    id_hocvien: {
        type: Schema.Types.ObjectId, 
        ref: 'hocvien.model'
    },   
    soluonghocvien : {
        type: Number,       
        default: 0
    },
 
    trangthai : {
        type: Number,       
        default: 1
    },
},{ collection: 'danhsachlop' })
const Model = mongoose.model('danhsachlop', PostSchema);

var method =  {

}

module.exports = { Model, method }