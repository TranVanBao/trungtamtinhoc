const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    noidunghoi: {
        type: String,       
        
    },  
    noidungtraloi: {
        type: String,       
        
    },  
    id_diendan: {
        type: Schema.Types.ObjectId, 
        ref: 'diendan.model'
    },
    id_taikhoanhoi: {
        type: Schema.Types.ObjectId, 
        ref: 'taikhoan.model'
    },
    id_taikhoantraloi: {
        type: Schema.Types.ObjectId, 
        ref: 'taikhoan'
    },
    trangthai: {
        type: Number,       
        default : 1
    },
},{ collection: 'phanhoi' })
const Model = mongoose.model('phanhoi', PostSchema);

var method =  {

}

module.exports = { Model, method }