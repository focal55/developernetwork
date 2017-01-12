import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class MenuItem extends Component {

	onButtonPress() {
		this.props.onPress(this.props.keyValue);
	}

	render() {
		const activeButton = this.props.active ? styles.activeButton : {};
		const activeIcon = this.props.active ? styles.activeIcon : {};
		const activeText = this.props.active ? styles.activeText : {};

		return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, activeButton]}
          onPress={this.onButtonPress.bind(this)}>

          <Icon style={[styles.icon, activeIcon]} name={this.props.icon} />

        </TouchableOpacity>
      </View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#3a404c',
	},
	button: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 0,
		padding: 15,
		backgroundColor: '#3a404c',
	},
	activeButton: {
		borderBottomColor: '#B5EFFA',
		borderColor: '#8BB9C2'
	},
	icon: {
		marginTop: 4,
		marginRight: 5,
		fontSize: 16,
		color: '#fff'
	},
	activeIcon: {
		color: '#f3f3f3'
	},
	text: {
		alignSelf: 'flex-start',
		paddingTop: 2,
		paddingBottom: 2,
		color: '#d3d3d3',
		fontSize: 10,
		fontWeight: '600'
	},
	activeText: {
		color: '#ffffff'
	},
};
