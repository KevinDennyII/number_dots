//an action creator is a js function made to update a reducer
export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library', 
		payload: libraryId
	};
};