import {
	ADD_API_DATA_POST,
	LOGIN_USER
} from './actions';

import { 
	DefaultState
} from './defualtState';


export const rootReducer = (state=[] , action) => {
	switch (action.type) {
		case LOGIN_USER:
			return Object.assign({},
			state,{
				user:action.user,
				userLogin:true
			}
		);
		default:
			return state;
	}
};


export const apiPosts = (state =[], action) => {
	if(action.type === ADD_API_DATA_POST) {
		return Object.assign({},
			state,{
				posts:action.posts
			}
		);
	}
	return state;
};
