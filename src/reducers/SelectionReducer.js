export default (state = null, action) => {
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state; //return whatever state was previously return
	}
};