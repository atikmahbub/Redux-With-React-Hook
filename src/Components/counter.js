import React,{ useState, useEffect } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import {Increment,Decrement} from '../Actions/counterAction.js';
import {changeName} from  '../Actions/nameActions.js';

const Counter = () => {
	const {count , name }  = useSelector( state => ({
		...state.countReducer,
		...state.nameReducer
	}
	))
	const dispatch = useDispatch() 

	const incrementCount = () => {
		dispatch(Increment())
	}
	const decrementCount = () => {
		dispatch(Decrement())
	}	
	return (
		<React.Fragment>
		<div><h1> Counter :  {count} </h1> </div>
		<button onClick = { incrementCount  } > + </button>
		<button onClick = { decrementCount  } > - </button>
		<h2>Name : {name} </h2>
		</React.Fragment>
	);
}

export const Name = () =>{
	const dispatch = useDispatch()

	const handleNameEvenet = (e) => {
		dispatch( changeName(e))
	}
	return(
		<div>
			<input type="text" onChange = { (e) => handleNameEvenet(e)} />
		</div>
		)
}

export default Counter
