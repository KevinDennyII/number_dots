// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component

// name your component after the name of the js file
const Header = (props) => { 
	//object destructuring instead of using styles.viewStyle, etc.
	const { textStyle, viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

//styling object that map very similarly to CSS
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};


// Make the component available to other parts of the apps
export { Header }; // allowing other components to make user of this component
