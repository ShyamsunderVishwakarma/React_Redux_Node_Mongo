import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,Switch,BrowserRouter} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
import menu from './components/menu.js'
import penList from './components/penList.js'
import bookList from './components/bookList.js'
import addBook from './components/addbook.js'

ReactDOM.render((
	<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route path='/pen' component = {penList} />
			<Route path='/book' component = {bookList} />
			<Route path='/addbook' component = {addBook} />
			<Route path='/' component = {menu} />
		</Switch>
	</BrowserRouter>
	</Provider>
	),document.getElementById('container'))