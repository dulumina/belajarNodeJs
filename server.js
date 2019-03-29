require('./models/db.js')

const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const buah = require('./controller/buah.js');
const exphbs = require('express-handlebars');
const app = express();


// View engine setup
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: '/views/layouts/' }));
app.set('view engine', 'hbs');
app.use(express.static('statics'));
// app.use(express.static('asset')); // menentukan lokasi statis file seperti css, js,dan lain2.

// Routing

/*
app.get('/',( req, res) => {
	res.render('index',{
		nama : 'Dzulfikri'
	})
});

app.get('/profil',( req, res) => {
	res.render('prifile',{
		nama : 'Dzulfikri'
	})
});
*/

// Listen port
app.listen(3000, ()=>{
	console.log('server sedang berjalan di Port 3000, http://localhost:3000')
});
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use('/tokobuah', buah);