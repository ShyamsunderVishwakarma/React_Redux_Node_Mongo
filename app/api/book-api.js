import axios from 'axios'
import store from '../store'

import {getAllBook} from '../actions/action'

export function getAllBookData(){
	return axios.get('api/books')
		.then(response=>{
			store.dispatch(getAllBook(response.data));
			return response;
		})
}

export function deleteBookData(id){
	debugger;
	return axios.delete('api/books/'+id)
		.then(response=>{
			debugger;
			store.dispatch(getAllBook(response.data.Data))
			return response;
		});
}

export function savebook(data){
	debugger;
	return axios.post('api/books',{data})
	.then(response=>{
		debugger;
		console.log("save book data api");
		return response;
	});

}

export function updateBook(id,data){
	debugger;
	return axios.put('api/books/'+id,{data})
	.then(response=>{
		console.log("update book data api");
		return response;
	});
}