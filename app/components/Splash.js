import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { FacebookButton } from './common';

class Splash extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../images/auro-background.png')} style={styles.backgroundImage}>
					<View style={styles.logo}>
						<Image source={require('../images/dn-logo.png')} />
						<FacebookButton />
					</View>
				</Image>
			</View>
		)
	};
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // or 'stretch'
	},
	logo: {
		flex: 1,
		alignItems: 'center',
		justifyContent:'center'
	},
};

export default Splash