import {combineReducers} from 'redux'

import penReducer from './pen-reducer'
import bookReducer from './book-reducer'

var reducers = combineReducers({
	penState : penReducer,
	bookState : bookReducer
});

export default reducers;