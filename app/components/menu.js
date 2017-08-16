import React from 'react'
import {Link} from 'react-router-dom'

class Menu extends React.Component{

	render(){
		return(
			<div className='menu-header'>
				<Link className="link-margin" to='/pens'>Pen</Link>
				<Link className="link-margin" to='/books'>Book</Link>
				<Link className="link-margin" to='/addbooks'>AddBook</Link>

			</div>
		)
	}
}

export default Menu