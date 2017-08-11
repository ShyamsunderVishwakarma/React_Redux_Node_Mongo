var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var penSchema = new Schema({

	name : {type : String},
	description  : {type : String},
	pentype : { type : String},
	price : {type : Number}
})

var pendetail = mongoose.model('pendetails',penSchema,'pendetails')

module.exports = pendetail;