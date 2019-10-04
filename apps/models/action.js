var mongoose = require('mongoose');
 var db = require("../../helpers/dbconnect")
 var db1 = mongoose.connection;
var model = require("./index")

var action = {
    selectByID: (model, id) => {
        model.findById(id)
            .exec() // thuc thi excute
            .then((res) => {
                return res;
            })
            .catch((err) => {
                if (err)
                    console.log(err);
            });
    },
    selectAll: (model) => {
        model.find()
            .exec()
            .then((res) => {
                return res;
            })
            .catch((err) => {
                if (err)
                    console.log(err);
            });
    },
    themDuLieu: (model, data) => {        
        var temp = new model(data);      
        temp.save( (err) => {
            if (err) {
                console.log(err);
                return 0;
            }
            else
                return 1;
        });

    },
    capNhapDuLieu: (model, id, data) => {
        model.findByIdAndUpdate(id, data, (err) => {
            if (err) {
                console.log(err); 
                return 0;
            }
            else
                return 1;
        });
    },
    xoaDuLieu: (model, id) => {       
        model.findByIdAndDelete({ _id: id }, (err) => {
            if (err) {
                console.log(err);               
                return 0;              
            }
            else         
                return 1;         
                
        });
    },

};
module.exports = action;