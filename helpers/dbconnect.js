var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tinhoctructuyen',{
    useNewUrlParser: true,
    // useCreateIndex: true,    
     useUnifiedTopology: true,
    // useFindAndModify: false
})

mongoose.connection;