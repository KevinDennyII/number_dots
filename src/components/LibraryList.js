import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {

	//help method, that render out each available 
	//library to the screen of our device
	renderItem(library) {
		return <ListItem library={library.item} />;
	}

	render() {
		return (
			<FlatList
				data={this.props.libraries}
				renderItem={this.renderItem}
				keyExtractor={(library) => `${library.id}` }
			/>
		);
	}
}

const mapStateToProps = state => {
	return { libraries: state.libraries };

};

//using the connect helper which returns another function
//and immediately call the function with the LibraryList
//the eonnect helper helps us get access to an application state
//inside a given component
export default connect(mapStateToProps)(LibraryList);