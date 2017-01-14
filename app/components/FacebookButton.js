import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loginUser } from '../actions';

class FacebookButton extends Component {
	onButtonPress() {
		this.props.loginUser('facebook');
	}

	render() {
		return(
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.button}
					onPress={this.onButtonPress.bind(this)}>
					<View style={styles.buttonInner}>
						<View style={styles.facebookIconWrapper}>
							<Icon style={styles.facebookIcon} name='facebook'/>
						</View>
						<Text style={styles.facebookText}>Sign in with Facebook</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = {
  container: {
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
		backgroundColor: '#3C5193',
		borderRadius: 5,
		marginTop: 200
  },
  button: {
    backgroundColor: '#3C5193',
		flexDirection: 'row',
		justifyContent: 'space-around'
  },
	buttonInner: {
  	flexDirection: 'row',
		paddingTop: 7,
		paddingBottom: 7,
		paddingLeft: 12,
		paddingRight: 12
	},
	facebookIconWrapper: {
  	paddingRight: 10
	},
	facebookIcon: {
		fontSize: 24,
		color: '#ffffff'
	},
	facebookText: {
  	color: '#ffffff',
		fontSize: 18,
		paddingTop: 2
	},
};

const mapStateToProps = ({ auth }) => {
	return {
		loggingIn: auth.loggingIn
	}
};

const mapActionsToProps = {
	loginUser
};

export default FacebookButton = connect(mapStateToProps, mapActionsToProps)(FacebookButton);
