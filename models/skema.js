const mongoose = require('mongoose');
var dbScema = new mongoose.Schema ({
    buah: {
        type: String
    },
    harga: {
        type: Number
    },
    satuan: {
        type: String
    },
    deskripsi: {
        type: String
    }
});
mongoose.model('daftarBuah', dbScema );