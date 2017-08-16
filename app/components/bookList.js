import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
import {getAllBook} from '../actions/action'
import {getAllBookData,deleteBookData,updateBook} from '../api/book-api'
import {validateAlpha,validateNumeric} from '../util/utility'
import Menu from './menu'

class BookList extends React.Component{

	constructor(props){
		debugger;
		super(props)

		this.state={
			editComponent : false,
			editObject : {},
			updatedObject:{
								name:'',
								description:'',
								quantity:'',
								price:''
							},
			message :'',
			msgtype :''
		}
	}

	componentWillMount(){
		debugger;
		getAllBookData()
		.then(response=>{
			console.log("successfully get book data")
		})
	}

	componentDidMount(){
		debugger;
	}


	deleteItem(data)
	{
		debugger;
		deleteBookData(data._id)
		.then(response=>{
			console.log("delete book : "+response);
		})
	}

	editItem(data)
	{
		debugger;
		this.setState({
						editComponent:true,
						editObject :data,
						message:'',
						msgtype:''
					})		
	}

	updateItem(data){
		debugger;
		var finalData = {
			name:this.state.updatedObject.name === "" ? data.name : this.state.updatedObject.name,
			description:this.state.updatedObject.description === "" ? data.description : this.state.updatedObject.description,
			quantity:this.state.updatedObject.quantity === "" ? data.quantity : parseInt(this.state.updatedObject.quantity),
			price:this.state.updatedObject.price === "" ? data.price : parseInt(this.state.updatedObject.price)
		}

		updateBook(data._id,finalData)
		.then(response=>{
			debugger;
			console.log("update data on component call");


			if(response.data.msgtype === "S")
			{
				getAllBookData()
			}

			this.setState({
								message : response.data.message,
								msgtype : response.data.msgtype,
								editComponent : false,
								editObject:{}

							});
		});
	}


	previousList(){
		this.setState({editComponent:false,editObject :{}})
	}

	setBookName(e){
		debugger;

		var result = validateAlpha(e.target.value)
		
		if(result){
			document.getElementById('idbookname').innerHTML="";
			document.getElementById('idUpdateBtn').disabled=false;
			var updObj=this.state.updatedObject;
			updObj.name = e.target.value;
			this.setState({updObj});
		}
		else{

			document.getElementById('idbookname').innerHTML="Invalid Text";
			document.getElementById('idUpdateBtn').disabled=true;
		}

		
	}

	setBookDescription(e){

		var result = validateAlpha(e.target.value)

		if(result){
			document.getElementById('idbookdescription').innerHTML="";
			document.getElementById('idUpdateBtn').disabled=false;

			var updObj=this.state.updatedObject;
			updObj.description = e.target.value
			this.setState({updObj});
		}
		else{
			document.getElementById('idbookdescription').innerHTML="Invalid Text";
			document.getElementById('idUpdateBtn').disabled=true;
		}

		
	}

	setBookQuantity(e){

		var result = validateNumeric(e.target.value)

		if(result){
			document.getElementById('idbookquantity').innerHTML="";
			document.getElementById('idUpdateBtn').disabled=false;

			var updObj=this.state.updatedObject;
			updObj.quantity = e.target.value
			this.setState({updObj});
		}
		else{
			document.getElementById('idbookquantity').innerHTML="Invalid Text";
			document.getElementById('idUpdateBtn').disabled=true;
		}
		
	}

	setBookprice(e){

		var result = validateNumeric(e.target.value)

		if(result){
			document.getElementById('idbookprice').innerHTML="";
			document.getElementById('idUpdateBtn').disabled=false;

			var updObj=this.state.updatedObject;
			updObj.price = e.target.value
			this.setState({updObj});
		}
		else{
			document.getElementById('idbookprice').innerHTML="Invalid Text";
			document.getElementById('idUpdateBtn').disabled=true;
		}

		
	}

	render(){
		debugger;

		if(this.state.editComponent)
		{
			return(
				<div>
				<Menu />
				<div>
					Name : <input type="text" name="bookname" defaultValue={this.state.editObject.name} onChange={this.setBookName.bind(this)}/><label id="idbookname"></label><br/>
					Description : <input type="text" name="bookdesc" defaultValue={this.state.editObject.description} onChange={this.setBookDescription.bind(this)} /><label id="idbookdescription"></label><br/>
					Quantity : <input type="text" name="quantity" defaultValue={this.state.editObject.quantity} onChange={this.setBookQuantity.bind(this)}/><label id="idbookquantity"></label><br/>
					Price : <input type="text" name="price" defaultValue={this.state.editObject.price} onChange={this.setBookprice.bind(this)}/><label id="idbookprice"></label><br/>
					<button id="idUpdateBtn" type="button" onClick={this.updateItem.bind(this,this.state.editObject)}>update</button>
					<button type="button" onClick={this.previousList.bind(this)}>back</button>
				</div>
				</div>
			)
		}
		else
		{
			return (
				<div>
					<Menu />
					<div>
						<label>{this.state.message || ''}</label>
					</div>
					<table>
					<tbody>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>action</th>
						<th>Edit</th>
					</tr>
					{
					   this.props.books.map((dt,i)=>(
							<tr key={i}>
								<td>{dt.name}</td>
								<td>{dt.description}</td>
								<td>{dt.quantity}</td>
								<td>{dt.price}</td>
								<td><img src="/static/Images/delete_icon.png" onClick={this.deleteItem.bind(this,dt)}></img></td> 
								<td><img src="/static/Images/edit_icon.png" onClick={this.editItem.bind(this,dt)}></img></td> 
							</tr>
						))	
					}
					</tbody>
				</table>
				</div>
			)
		}
	}
}

class ListComponent extends React.Component{
	
	

	render(){
		return(
			<div>
				<table>
					<tbody>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>action</th>
						<th>Edit</th>
					</tr>
					{
					   this.props.data.map((dt,i)=>(
							<tr key={i}>
								<td>{dt.name}</td>
								<td>{dt.description}</td>
								<td>{dt.quantity}</td>
								<td>{dt.price}</td>
								<td><img src="/static/Images/delete_icon.png" onClick={this.deleteItem.bind(this,dt)}></img></td> 
								<td><img src="/static/Images/edit_icon.png" onClick={this.editItem.bind(this,dt)}></img></td> 
							</tr>
						))	
					}
					</tbody>
				</table>
			</div>
		)
	}
}

class EditComponent extends React.Component{
	render(){
		return(
			<div>
				Name : <input type="text" name="bookname" value={data.name} /><br/>
				Description : <input type="text" name="bookdesc" value={data.description}  /><br/>
				Quantity : <input type="text" name="quantity" value={data.quantity} /><br/>
				Price : <input type="text" name="price" value={data.price} /><br/>
				<button type="button" onClick={this.updateItem.bind(this,data)}>update</button>
				<button type="button" onClick={this.clearField.bind(this)}>back</button>
			</div>
		)
	}
}

const mapStateToProps = function(store){
	debugger;
	return {
		books : store.bookState.books
	}
}

const mapDispatchToProps ={
	getAllBook
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)