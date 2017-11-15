import axios from 'axios';
import { localUrl, IPurl } from '../url';
import {store} from './store';
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
		apiPosts
	};
}
export function getApiDataPost(){
	return dispatch => {
		axios.get(`${localUrl}api/posts/all`,{
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-access-token': localStorage.token
      }
    })
		.then( response => {
			console.log(response.data);
			dispatch(addApiDataPost(response.data));
		})
		.catch(error => {
			throw error;
		});
	};
}