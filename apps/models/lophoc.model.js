const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    tenlop: {
        type: String,       
        required: true
    },  
    thoigianbatdau : {
        type: String,       
        
    }, 
    thoigianketthuc : {
        type: String   
        
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