const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
	name: String,
	dob: String,
	gender: String,
	height: String,
	weight: String,
	bloodgroup: String
});

module.exports = mongoose.model('login',loginSchema, 'logins');