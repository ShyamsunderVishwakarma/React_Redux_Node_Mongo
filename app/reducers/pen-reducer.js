import * as types from '../actions/action-types'

const initialState ={
	pens:[]
}

const penReducer = function(state=initialState,action){
	debugger;
	switch(action.type)
	{
		case types.GET_ALL_PEN:
			return Object.assign({},state,{pens:action.data});
			break;
	}
	return state;
}

export default penReducer;