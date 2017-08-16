import * as types from '../actions/action-types'

const initialState ={
	books :[]
}

const bookReducer = function(state = initialState,action){
	debugger;
	switch(action.type){

		case types.GET_ALL_BOOK:
			return Object.assign({},state,{books:action.data})
			break;

		case types.UPDATE_BOOK:
			return 
			break;
	}

	return state;
}

export default bookReducer;
