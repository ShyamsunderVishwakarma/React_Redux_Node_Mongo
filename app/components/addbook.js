import React from 'react'
import Menu from './menu'
import ReactDOM from 'react-dom'
import {savebook} from '../api/book-api'

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
		this.setState({name : e.target.value});
	}

	setBookDescription(e){
		this.setState({description : e.target.value});
	}

	setBookQuantity(e){
		this.setState({quantity : e.target.value});
	}

	setBookprice(e){
		this.setState({price : e.target.value});
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
				Name : <input type="text" name="bookname" value={this.state.name} onChange={this.setBookName.bind(this)} ref="InputField"/><br/>
				Description : <input type="text" name="bookdesc" value={this.state.description}  onChange={this.setBookDescription.bind(this)}/><br/>
				Quantity : <input type="text" name="quantity" value={this.state.quantity} onChange={this.setBookQuantity.bind(this)}/><br/>
				Price : <input type="text" name="price" value={this.state.price} onChange={this.setBookprice.bind(this)}/><br/>
				<button type="button" onClick={this.saveBook.bind(this)}>submit</button>
				<button type="button" onClick={this.clearField.bind(this)}>clear</button>
			</div>
			</div>
		)
	}
}

export default AddBook