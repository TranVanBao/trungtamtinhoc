const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    thoigianbatdau: {
        type: Date,      
        
    },  
    thoigianketthuc: {
        type: Date,      
        
    },   
    id_lop: {
        type: Schema.Types.ObjectId, 
        ref: 'lophoc'
    },
    id_phong: {
        type: Schema.Types.ObjectId, 
        ref: 'phonghoc'
    },
},{ collection: 'thoikhoabieu' })
const Model = mongoose.model('thoikhoabieu', PostSchema);

var method =  {

}

module.exports = { Model, method }