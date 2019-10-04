const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    tendiendan: {
        type: String,       
        required: true
    },    
    id_khoahoc: {
        type: Schema.Types.ObjectId, 
        ref: 'khoahoc.model'
    },
},{ collection: 'diendan' })
const Model = mongoose.model('diendan', PostSchema);

var method =  {

}

module.exports = { Model, method }