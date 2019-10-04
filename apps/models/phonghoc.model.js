const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    tenphong: {
        type: String,       
        required: true
    },
    soluong: {
        type: Number, 
       default: 30
    }, 

    trangthai: {
        type: Number, 
       default: 1
    },
},{ collection: 'phonghoc' })
const Model = mongoose.model('phonghoc', PostSchema);

var method =  {

}

module.exports = { Model, method }