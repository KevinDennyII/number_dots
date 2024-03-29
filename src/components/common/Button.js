import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {

	const { buttonStyle, textStyle } = styles;

	return (
		//when the button is pressed call the call back function onPress
	  <TouchableOpacity onPress={onPress} style={buttonStyle}>
		<Text style={textStyle}>
			{children}
		</Text>
	  </TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch', //stretch to fill the limits of the container
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export { Button };

