import axios from 'axios'
import store from '../store'

import {getAllBook} from '../actions/action'

export function getAllBookData(){
	return axios.get('/book')
		.then(response=>{
			store.dispatch(getAllBook(response.data));
			return response;
		})
}

export function deleteBookData(id){
	debugger;
	return axios.delete('/book/'+id)
		.then(response=>{
			debugger;
			store.dispatch(getAllBook(response.data.Data))
			return response;
		});
}

export function savebook(data){
	debugger;
	return axios.post('/book',{data})
	.then(response=>{
		debugger;
		console.log("save book data api");
		return response;
	});

}