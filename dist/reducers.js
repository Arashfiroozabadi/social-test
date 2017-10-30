import { combineReducers, createStore } from 'redux';

//ACTIONS CANSTANS---------------------------
export const ADD_TODO = 'ADD_TODO';
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const DEL_TO_LIST = 'DEL_TO_LIST';
export const ADD_USER = 'ADD_USER';
export const SEARCH = 'SEARCH';

//REDUCERS---------------------------
export const DefaultState = {
	name:localStorage.getItem('userName'),
	tell:'',
	userID:'',
	email:'',
	unreadCount:10000,
	status:false,
	count:'',
	searchTerm:'salam',
	addToList:false,
	link:'root Links',
};

export const rootReducer = (state = DefaultState, action) => {
	switch (action.type) {
		case ADD_USER:
			return User(state, action);
		case SEARCH:
			return setSearchTerm(state, action);
		case ADD_TO_LIST:
			return [
				...state,{
					status:action.status,
					count:action.count,
					addToList:true,
					link:action.link,
					searchTerm:action.searchTerm
				}
			];
		case DEL_TO_LIST:
			return [
				...state,{
					status:'del',
					count:'0',
					addToList:false
				}
			];

		default:
			return state;
	}
};

export const setSearchTerm = (state, action) => Object.assign({}, state,
	{
		type:'SET_SEARCH_TERM',
		searchTerm:action.payload,
		status:action.status
	}
);

export const User = (state, action) => Object.assign({},state,
	{
		name:action.name
	}
);

export function todo(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
			...state,
			{
				type:'ok',
				status:action.status,
				addToList:false,
				text:action.text
			}
		];
      default:
        return state;
    }
}

//ACTIONS Creaters--------------------------
export function addUser(name) {
		return{
			type:ADD_USER,
			name
		};
}
export function setSearch (searchTerm, status){
	return{
		type:'SEARCH',
		payload:searchTerm,
		status
	};
}

export const addTodo = text => ({
	type:ADD_TODO,
	payload:false,
	status:'test',
	text
});

export const addToList = (status,count,link,searchTerm) => ({
	type:ADD_TO_LIST,
	status,
	count,
	link,
	searchTerm
});

export const delToList = () => ({
	type:DEL_TO_LIST
});

//combineReducers-------------------

const redusers = combineReducers({
	rootReducer,
	todo
});

//Store----------------------------
export const store = createStore(
	redusers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Dispatchs------------------------
// store.dispatch(addToList('ok','54','google.com'));
// store.dispatch(addToList('false','4','ksssis'));
// store.dispatch(setSearch('fuck'));

export default store;