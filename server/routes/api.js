const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Login = require('../models/login');

const db = "mongodb+srv://sheenam:yadav@cluster0-amn15.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(db,{
	useMongoClient:true
	}, function(err){
		if(err){
			console.error("Error! " + err);
		}
});

/*router.get('/', function(req,res){
	res.send('api works');
});*/

router.get('/logins',function(req,res){
	console.log("Get login for all logins");
	Login.find({})
	.exec(function(err,logins){
		if(err){
			console.log("Error retriving logins");
		}else{
			res.json(logins);
		}
	});
});

router.get('/logins/:id',function(req,res){
	console.log("Get login for a login");
	Login.findById(res.params.id)
	.exec(function(err,login){
		if(err){
			console.log("Error retriving login");
		}else{
			res.json(login);
		}
	});
});

module.exports = router;