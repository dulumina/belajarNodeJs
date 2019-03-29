
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tokobuah',{useNewUrlParser: true}, (err) => {
    if(!err) {console.log('data base tokobuah tealah terkoneksi...!')}
    else {console.log('error! tidak dapat terkenoksi ke database' + err)}
});
require('./skema.js');