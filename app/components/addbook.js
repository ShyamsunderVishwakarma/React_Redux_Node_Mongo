import React from 'react'
import Menu from './menu'
import ReactDOM from 'react-dom'
import {savebook} from '../api/book-api'
import {validateAlpha,validateNumeric} from '../util/utility'

class AddBook extends React.Component{

	constructor(props){
		super(props)

		this.state={
			name:'',
			description :'',
			quantity :'',
			price : '',
			message : '',
			msgtype :''
		}
	}

	componentWillMount(){

	}

	setBookName(e){
		debugger;

		var result = validateAlpha(e.target.value)
		this.setState({name : e.target.value});
		if(result){
			document.getElementById('idbookname').innerHTML="";
			document.getElementById('idSaveBtn').disabled=false;
		}else{
			document.getElementById('idbookname').innerHTML="Invalid value";
			document.getElementById('idSaveBtn').disabled=true;
		}

		
	}

	setBookDescription(e){

		var result = validateAlpha(e.target.value)
		this.setState({description : e.target.value});
		if(result){
			document.getElementById('idbookdescription').innerHTML="";
			document.getElementById('idSaveBtn').disabled=false;
		}else{
			document.getElementById('idbookdescription').innerHTML="Invalid value";
			document.getElementById('idSaveBtn').disabled=true;
		}

		
	}

	setBookQuantity(e){

		var result = validateNumeric(e.target.value)
		this.setState({quantity : e.target.value});

		if(result){
			document.getElementById('idbookquantity').innerHTML="";
			document.getElementById('idSaveBtn').disabled=false;
			
		}else{
			document.getElementById('idbookquantity').innerHTML="Invalid value";
			document.getElementById('idSaveBtn').disabled=true;
		}	
	}

	setBookprice(e){

		var result = validateNumeric(e.target.value)
		this.setState({price : e.target.value});

		if(result){
			document.getElementById('idbookprice').innerHTML="";
			document.getElementById('idSaveBtn').disabled=false;
		}else{
			document.getElementById('idbookname').innerHTML="Invalid value";
			document.getElementById('idSaveBtn').disabled=true;
		}
	}

	saveBook()
	{
		debugger;
		var data ={
			name:this.state.name,
			description :this.state.description,
			quantity :parseInt(this.state.quantity),
			price :parseInt(this.state.price)
		}

		savebook(data)
		.then(response=>{
			debugger;
			console.log("save book");
			this.setState({message : response.data.message,msgtype : response.data.msgtype})
		})
	}

	clearField()
	{
		this.setState({
			name:'',
			description :'',
			quantity :'',
			price : '',
			message : '',
			msgtype :''
		})

		ReactDOM.findDOMNode(this.refs.InputField).focus();

	}

	render(){
		return(
			<div>
			<Menu />
			<div>
				<label>{this.state.message}</label>
			</div>
			<div>
				Name : <input type="text" name="bookname" value={this.state.name} onChange={this.setBookName.bind(this)} ref="InputField"/><label id="idbookname"></label><br/>
				Description : <input type="text" name="bookdesc" value={this.state.description}  onChange={this.setBookDescription.bind(this)}/><label id="idbookdescription"></label><br/>
				Quantity : <input type="text" name="quantity" value={this.state.quantity} onChange={this.setBookQuantity.bind(this)}/><label id="idbookquantity"></label><br/>
				Price : <input type="text" name="price" value={this.state.price} onChange={this.setBookprice.bind(this)}/><label id="idbookprice"></label><br/>
				<button id="idSaveBtn" type="button" onClick={this.saveBook.bind(this)}>submit</button>
				<button type="button" onClick={this.clearField.bind(this)}>clear</button>
			</div>
			</div>
		)
	}
}

export default AddBook