import * as types from './action-types'

export function getAllPen(data){
	debugger;
	return{
		type : types.GET_ALL_PEN,
		data
	};
}

export function getAllBook(data){
	return{
		type : types.GET_ALL_BOOK,
		data
	}
}