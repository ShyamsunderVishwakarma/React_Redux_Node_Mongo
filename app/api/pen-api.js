import axios from 'axios';
import store from '../store'

import {getAllPen} from '../actions/action';

export function getAllPenData(){
	debugger;
	return axios.get('api/pens')
		.then(response=>{
			store.dispatch(getAllPen(response.data));
			return response;
		});
}

export function deletePenData(id){
	debugger;
	return axios.delete('api/pens/'+id)
		.then(response=>{
			debugger;
			store.dispatch(getAllPen(response.data.Data))
			return response;
		});
}