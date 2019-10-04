const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    thoigianbatdau: {
        type: String,      
        
    },  
    thoigianketthuc: {
        type: String,      
        
    },   
    id_lop: {
        type: Schema.Types.ObjectId, 
        ref: 'lophoc.model'
    },
    id_phong: {
        type: Schema.Types.ObjectId, 
        ref: 'phonghoc.model'
    },
    id_khoahoc: {
        type: Schema.Types.ObjectId, 
        ref: 'khoahoc.model'
    },
    id_giangvien: {
        type: Schema.Types.ObjectId, 
        ref: 'giangvien.model'
    },
},{ collection: 'thoikhoabieu' })
const Model = mongoose.model('thoikhoabieu', PostSchema);

var method =  {

}

module.exports = { Model, method }