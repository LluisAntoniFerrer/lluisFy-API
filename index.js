'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean2',{ useNewUrlParser: true, useFindAndModify: false }, (err, res) =>{
	if(err){
		throw err;
	}else{
		console.log('La base de datos funciona correctamente.');
	
		app.listen(port, function(){
			console.log("Servidor apiRest escuchando.")
		})
	}
})