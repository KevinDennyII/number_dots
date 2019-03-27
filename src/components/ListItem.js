import React, { Component } from 'react';
import { 
	Text,
	Image, 
	TouchableWithoutFeedback, 
	View,
	LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

//responsible for showing a single libary
class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	//helper method for expanding description
	renderDescription() {
		const { library, expanded } = this.props;
		const { description } = this.props.library;

		if (expanded) {
			return (
				<Image style={styles.imageThumbnail} source={description} />
			);
		}
	}


	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18, 
		paddingLeft: 15
	},
	 imageThumbnail: {
    
     justifyContent: 'center',
     alignItems: 'center',
     height: 500
   }
};

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;

	return { expanded };
};

//with the connect call the first parameters is specifically
//mapStateToProps and the second parameter is for binding
//action creators
export default connect(mapStateToProps, actions)(ListItem);


