import {
	ADD_API_DATA_POST,
	LOGIN_USER
} from './actions';

import { 
	DefaultState
} from './defualtState';

export const userData = (state={}, action) => {
	switch (action.type) {
		case 'USER_DATA':
			return {
				userLogin:true,
				userData:action.userData
			};
		default :
			return state;	
	}
};


export const rootReducer = (state=[] , action) => {
	switch (action.type) {
		case 'USER_DATA':
			// return Object.assign({},
			// 	state,{
			// 		user:action.user,
			// 		userLogin:true
			// 	}
			// );
			return {
				userName:action.userData.userName,
				userLogin:true
			};
		default:
			return state;
	}
};


export const apiPosts = (state =[], action) => {
	if(action.type === ADD_API_DATA_POST) {
		return Object.assign({},
			state,{
				posts:action.apiPosts.posts
			}
		);
	}
	return state;
};