import { 
	combineReducers, 
	createStore,
	applyMiddleware,
	compose 
} from 'redux';
import thunk from 'redux-thunk';

import {
	rootReducer,
	apiPosts
} from './redusers';

export const redusers = combineReducers({
	rootReducer,
	apiPosts
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
