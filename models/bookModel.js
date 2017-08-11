var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var bookSchema = Schema({
	name : {type : String},
	description : {type : String},
	quantity : {type : Number},
	price : {type : Number}
});

var bookdetails = mongoose.model('bookdetails',bookSchema,'bookdetails')

module.exports = bookdetails