import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, setLoginType } from '../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	onLinkPress() {
		let type = this.props.loginType == 'facebook' ? 'standard' : 'facebook';
		this.props.setLoginType(type);
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)} style={styles.loginButton}>
				Login
			</Button>
		);
	}

	render() {
		return (
			<View style={styles.formWrapper}>
				<View style={styles.formSection}>
					<Input
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</View>

				<View style={styles.formSection}>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</View>

				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>

				<View style={styles.formSection}>
					{this.renderButton()}
				</View>

				<TouchableOpacity
					style={styles.LoginLink}
					onPress={this.onLinkPress.bind(this)}>
					<Text style={styles.LoginLinkText}>Login without Facebook</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	formWrapper: {
		//flexDirection: 'column',
		backgroundColor: 'transparent',
		paddingLeft: 30,
		paddingRight: 30,
		marginTop: 30
	},
	formSection: {
		marginTop: 15
	},
	LoginLink: {
		alignItems: 'center',
		marginTop: 15
	},
	LoginLinkText: {
		color: '#fff'
	}
};

const mapStateToProps = ({ auth, loginType }) => {
	const { email, password, error, loading } = auth;

	return { email, password, error, loading, loginType: loginType.loginType };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser, setLoginType})(LoginForm);