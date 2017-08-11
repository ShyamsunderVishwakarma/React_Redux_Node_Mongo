var penDetail = require('../models/penModel')
var bookDetail = require('../models/bookModel')

exports.getAllPen = function(req,res){

	penDetail.find({},function(err,data){

		if(err)
		{
			return res.send({message : "Something went wrong!!!",msgtype : "E"}).status(500);
		}
		else
		{
			if(data.length == 0)
			{
				return res.send({message  : "No data available!!!",msgtype : "S"}).status(200);
			}
			else
			{
				return res.send(data).status(200);
			}
		}
	});
}

exports.deletePen = function(req,res){

	var _id = req.params.id;

	
	penDetail.remove({_id : _id})
	.then(data=>{

		return penDetail.find({},function(err,data){
			if(err) throw err;
			
			return data;
		});

	})
	.then(data=>{
		return res.send({message:"Data deleted successfully",msgtype : "S",Data:data}).status(200)
	})
	.catch(err=>{
		return res.send({message:"Oops something went wrong",msgtype : "E"}).status(500)
	})

}


exports.getAllBook = function(req,res){

	bookDetail.find({},function(err,data){

		if(err)
		{	
			return res.send({message:"Something went wrong!!!",msgtype:"E"}).status(500)
		}
		else
		{
			if(data.length == 0)
			{
				return res.send({message : "No data available!!!",msgtype : "S"}).status(200)
			}	
			else
			{
				return res.send(data).status(200)
			}
		}

	});
}

exports.deleteBook = function(req,res){

	var _id = req.params.id;

	
	bookDetail.remove({_id : _id})
	.then(data=>{

		console.log("after remove : " + data);

		var resultData = JSON.parse(data);

		console.log("after resultData : " + resultData);

		return bookDetail.find({},function(err,data){
			if(err) throw err;
			
			console.log("after Find All Data : " + data);	

			return data;
		});

	})
	.then(data=>{
		console.log("on Returning data : " + data);
		return res.send({message:"Data deleted successfully",msgtype : "S",Data:data}).status(200)
	})
	.catch(err=>{
		console.log("on Exception caught : " + err);
		return res.send({message:"Oops something went wrong",msgtype : "E"}).status(500)
	})

}

exports.saveBook = function(req,res){

	var bookData = new bookDetail(req.body.data);

	console.log("stringify data : " + JSON.stringify(req.body.data))


	bookData.save()
	.then(data=>{

		return res.send({message : "Data save successfully!!!",msgtype : "S"}).status(200)
	})
	.catch(err=>{
		return res.send({message : "Oops something went wrong!!!",msgtype  : "E"}).status(500)
	})

}