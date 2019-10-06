function nameReducer(state = { name : ""  } , action){

	switch(action.type){
		case 'CHANGE_NAME':
			return{
				...state,
				name : action.payload
			}	
		default:
			return state		
	}
}

export default nameReducer