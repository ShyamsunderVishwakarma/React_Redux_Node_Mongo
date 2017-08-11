import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
import {getAllBook} from '../actions/action'
import {getAllBookData,deleteBookData} from '../api/book-api'
import Menu from './menu'

class BookList extends React.Component{

	constructor(props){
		super(props)
	}

	componentWillMount(){
		debugger;
		getAllBookData()
		.then(response=>{
			console.log("successfully get book data")
		})
	}

	deleteItem(data)
	{
		debugger;
		deleteBookData(data._id)
		.then(response=>{
			console.log("delete book : "+response);
		})
	}

	render(){
		debugger;
		return(
			<div>
				<Menu />
				<table>
					<tbody>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>action</th>
					</tr>
					{
					   this.props.books.map((dt,i)=>(
							<tr key={i}>
								<td>{dt.name}</td>
								<td>{dt.description}</td>
								<td>{dt.quantity}</td>
								<td>{dt.price}</td>
								<td><img src="/static/Images/delete_icon.png" onClick={this.deleteItem.bind(this,dt)}></img></td> 
							</tr>
						))	
					}
					</tbody>
				</table>
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