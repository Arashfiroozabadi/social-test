import { 
	combineReducers, 
	createStore,
	applyMiddleware,
	compose 
} from 'redux';
import thunk from 'redux-thunk';

import {
	rootReducer,
	apiPosts,
	userData		
} from './redusers';

export const redusers = combineReducers({
	rootReducer,
	apiPosts,
	userData
});

const middleware = [ thunk ];
export const store = createStore(
	redusers,
	compose(
		applyMiddleware(...middleware),		
		typeof window === 'object' &&
		typeof window.devToolsExtension !== 'undefined' ?
		window.devToolsExtension() :
		f => f
	),
);
