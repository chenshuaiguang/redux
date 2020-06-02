import { combineReducers } from 'redux';
const defaultState = {headerValue:0};
const reducer1 = (state=defaultState,action)=>{
	console.log("state",state)
	let headerValue =  state.headerValue
	switch (action.type){
		case 'header1' :
		headerValue = headerValue + 10;
		console.log('header1')
		return {...state,headerValue}
		case 'DECREMENT1' :
		state.count -= 1;
		return state
		default:
		return state;
	}
}
const reducer2 = (state=1,action)=>{
	console.log("state",state)
	let headerValue1 =  state.headerValue1
	switch (action.type){
		case 'header2' :
		
		return 2
		case 'DECREMENT2' :
		state.count -= 1;
		return 3
		default:
		return state;
	}
}
// export default reducer1;
export default combineReducers({
	reducer1,
	reducer2
})