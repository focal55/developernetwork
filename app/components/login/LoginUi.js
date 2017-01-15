import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setLoginType } from '../../actions';
import FacebookButton from '../FacebookButton';
import LoginForm from './LoginForm';
import { loginUsingFacebook } from '../../services/LoginService';

class LoginUi extends Component {

	onLinkPress() {
		let type = this.props.loginType == 'facebook' ? 'standard' : 'facebook';
		this.props.setLoginType(type);
	}

	render() {
		// Standard Login Form.
		if (this.props.loginType == 'standard') {
			return (
				<LoginForm />
			)
		}
		// Facebook Button.
		else {
			if (this.props.loggingIn) {
				return (
					<View><Text>Loading...</Text></View>
				)
			}
			else {
				return (
					<View style={styles.container}>
						<FacebookButton style={styles.facebookButton} onPress={() => this.loginWithService(loginUsingFacebook)}/>
						<TouchableOpacity
							style={styles.LoginLink}
							onPress={this.onLinkPress.bind(this)}>
							<Text style={styles.LoginLinkText}>Or, Login without Facebook</Text>
						</TouchableOpacity>
					</View>
				)
			}
		}
	}
}

const styles = {
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent:'center'
	},
	facebookButton: {
		marginTop: 90
	},
	LoginLink: {
		marginTop: 15
	},
	LoginLinkText: {
		color: '#ffffff',
		backgroundColor:'transparent',
	}
};

const mapActionsToProps = {
	setLoginType
};

const mapStateToProps = ({ auth, loginType }) => {
	const { error, loading, loggingIn, user } = auth;
	return { error, loading, loggingIn, loginType, user };
};

export default LoginUi = connect(mapStateToProps, mapActionsToProps)(LoginUi);
