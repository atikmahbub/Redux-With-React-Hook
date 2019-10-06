export const changeName = (e) => {
	return {
		type:"CHANGE_NAME",
		payload : e.target.value
	}
}