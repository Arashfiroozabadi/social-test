import axios from 'axios';

import {
	ADD_API_DATA_POST,
	LOGIN_USER
} from './actions';

export function loginUser (userTokenID, userName){
	return{
		type:LOGIN_USER,
		userTokenID,
		user:userName
	};
}
export function getLoginUser (){
	return dispatch => {
		axios.post('http://localhost:3000/userLogin',{userName:'Arash'})
		// axios.post('http://192.168.1.35:3000/userLogin',{userName:'Arash'})
		.then( response => {
			console.log(response.data);
			dispatch( 
				loginUser( 
					response.data.tokenID,
					response.data
				) 
			);
		});
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
		// axios.get('http://192.168.1.35:3000/posts')
		.then( response => {
			dispatch(addApiDataPost(response.data));
		})
		.catch(error => {
			throw error;
		});
	};
}