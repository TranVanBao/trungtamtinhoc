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
    email:{
        type: String,       
        //required: true
    },
    diachi:{
        type: String,       
       // required: true
    },
    ngaydangky: {
        type: Date,       
        default: Date.now
    },
    ten_khoahoc: {
        type: String, 
        ref: 'khoahoc.model'
    },
    trangthai: {
        type: Number,       
        default: 1
    },
},{ collection: 'dangky' })
const Model = mongoose.model('dangky', PostSchema);

var method = {

}

module.exports = { Model, method }