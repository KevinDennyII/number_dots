import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

//The Provider tag works together with the store.  It translates all the data
//in the store to something "usable" by React
const App = () => {
	return (
		//the Provider could only have one child
		<Provider store={createStore(reducers)}>
			<View style={{ flex: 1 }}>
				<Header headerText="Number Dots" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;