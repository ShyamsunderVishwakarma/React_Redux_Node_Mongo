import React from 'react'
import {Link} from 'react-router-dom'

class Menu extends React.Component{

	render(){
		return(
			<div className='menu-header'>
				<Link className="link-margin" to='/pen'>Pen</Link>
				<Link className="link-margin" to='/book'>Book</Link>
				<Link className="link-margin" to='/addbook'>AddBook</Link>

			</div>
		)
	}
}

export default Menu