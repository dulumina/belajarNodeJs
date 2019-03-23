const path 		= require('path')
const express 	= require('express')
const app 		= express()


// View engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'hbs');
app.use(express.static('asset')); // menentukan lokasi statis file seperti css, js,dan lain2.

// Routing
app.get('/',( req, res) => {
	res.render('index',{
		nama : 'Dzulfikri'
	})
});


// Listen port
app.listen(3000);
console.log('server sedang berjalan di Port 3000, http://localhost:3000')