import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { clearAsyncStorage, setActive } from '../actions';

class Developers extends Component {
	onLinkPress() {
		this.props.setActive('splash');
		this.props.clearAsyncStorage();
	}

	render() {
		return (
			<View>
				<Text>Developers</Text>
				<TouchableOpacity
					onPress={this.onLinkPress.bind(this)}>
					<Text>Clear App Storage</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapActionsToProps = {
	clearAsyncStorage,
	setActive
};

export default Developers = connect(null, mapActionsToProps)(Developers);
