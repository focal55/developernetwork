import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import LoginUi from './login/LoginUi';

export default Splash = () => {
	return (
		<View style={styles.container}>
			<Image source={require('../images/auro-background.png')} style={styles.backgroundImage}>

				<View style={styles.logo}>
					<Image source={require('../images/dn-logo.png')} />
				</View>

				<LoginUi />

			</Image>
		</View>
	)
};

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		//justifyContent: 'space-around'
	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // or 'stretch'
	},
	logo: {
		marginTop: 200,
		alignItems: 'center',
		justifyContent:'center'
	},
};