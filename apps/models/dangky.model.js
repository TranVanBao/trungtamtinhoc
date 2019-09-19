const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    hoten: {
        type: String,       
        required: true
    },
    sdt: {
        type: Number,       
        required: true
    },
    email:{
        type: String,       
        required: true
    },
    diachi:{
        type: String,       
        required: true
    },
    ngaydangky: {
        type: Date,       
        default: Date.now
    },
    id_khoahoc: {
        type: Schema.Types.ObjectId, 
        ref: 'khoahoc'
    },
},{ collection: 'dangky' })
const Model = mongoose.model('dangky', PostSchema);

var method = {

}

module.exports = { Model, method }