     const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const PostSchema = new Schema({
        tenkhoahoc: {
            type: String,       
            required: true
        },  
        dieukien : {
            type: String,       
            required: true
        }, 
        loaikhoahoc : {
            type: String,       
            required: true
        }, 
        phidichvu : {
            type: Number,       
            required: true
        },
        soluongmua : {
            type: Number,       
            required: true
        },
        trangthai : {
            type: Number,       
            default: 1
        },
    },{ collection: 'khoahoc' })
    const Model = mongoose.model('khoahoc', PostSchema);
    
    var method =  {
    
    }
    
    module.exports = { Model, method }