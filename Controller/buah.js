const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const listBuah = mongoose.model('daftarBuah');

router.get('/edit/:id', (req,res)=>{
    listBuah.findById(req.params.id, (err,doc)=>{
        if(!err){

            res.render('addAndEdit',{
                title: 'Edit Buah',
                listBuah: doc

            });
        }
    })

})

router.get('/add',(req,res)=>{
    res.render('addAndEdit',{
        title: 'Tambah Buah'
    });
});

router.post('/add',(req,res)=>{
    insertdata(req,res);
});

function insertdata(req,res){
    var ListBuah = new listBuah();
    ListBuah.buah = req.body.buah;
    ListBuah.harga = req.body.harga;
    ListBuah.satuan = req.body.satuan;
    ListBuah.deskripsi = req.body.deskripsi;
    ListBuah.save((err,doc) =>{
        if (!err)
            res.redirect('/tokobuah/');
        else{
            console.log('error! tidak dapat menambahkan database ' + err);
        }
    });
};


router.get('/',(req,res)=>{
    listBuah.find((err,docs) =>{
        if(!err){
            res.render('daftarbuah', {
                list: docs
            });
        }
    });
});
module.exports = router;