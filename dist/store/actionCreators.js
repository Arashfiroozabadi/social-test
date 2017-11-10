import axios from 'axios';

import {
	ADD_API_DATA_POST,
	LOGIN_USER,
	USER_DATA
} from './actions';

export function userData(userData) {
	return{
		type:USER_DATA,
		userData
	};
}


export function loginUser (userTokenID, userName){
	return{
		type:LOGIN_USER,
		userTokenID,
		user:userName
	};
}

export function addApiDataPost(apiPosts){
	return{
		type:ADD_API_DATA_POST,
		posts:apiPosts
	};
}
export function getApiDataPost(){
	return dispatch => {
		axios.get('http://localhost:3000/posts')
		// axios.get('http://192.168.1.34:3000/posts')
		.then( response => {
			dispatch(addApiDataPost(response.data));
		})
		.catch(error => {
			throw error;
		});
	};
}