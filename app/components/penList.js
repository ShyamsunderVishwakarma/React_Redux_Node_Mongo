import React from 'react'
import axios from 'axios' 
import {connect} from 'react-redux'
import store from '../store.js'
import {getAllPen} from '../actions/action'

import {getAllPenData,deletePenData} from '../api/pen-api.js'
import Menu from './menu.js'

class PenList extends React.Component{

	constructor(props)
	{
		debugger;
		super(props)

	}

	componentWillMount()
	{
		debugger;
		self = this
		getAllPenData()
		.then(response=>{
			console.log("successfull",self.props.pens);

		})
	}

	deleteItem(data)
	{
		debugger;
		deletePenData(data._id)
		.then(response=>{
			console.log("delete pen : "+response);
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
						<th>description</th>
						<th>Type</th>
						<th>price</th>
						<th>action</th>
					</tr>
					{
						this.props.pens.map((dt,i)=>(
							<tr key={i}>
								<td>{dt.name}</td>
								<td>{dt.description}</td>
								<td>{dt.pentype}</td>
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
	return{
		pens : store.penState.pens
	}

}
const mapDispatchToProps = {
	getAllPen
}

export default connect(mapStateToProps,mapDispatchToProps)(PenList)