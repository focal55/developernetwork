import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Menu } from './common';
import Developers from './Developers';
import Jobs from './Jobs';
import Messages from './Messages';
import More from './More';
import Splash from './Splash';

class _Main extends Component {

	constructor(props) {
		super(props);

		this.menuItems = {
			'developers': {label: 'Network', icon: 'list'},
			'jobs': {label: 'Jobs', icon: 'calendar'},
			'messages': {label: 'Messages', icon: 'list'},
			'more': {label: 'More', icon: 'list'}
		};
	}

	renderContent() {
		switch (this.props.activeItem) {
			case 'developers':
				return <Developers />;
				break;

			case 'jobs':
				return <Jobs />;
				break;

			case 'messages':
				return <Messages />;
				break;

			case 'more':
				return <More />;
				break;

			default:
				return <Developers />;
		}
	}

	render() {
		if (this.props.activeItem == 'splash') {
			return (
				<Splash />
			)
		}
		else {
			return (
				<View style={styles.container}>
					<View style={styles.contentContainer}>
						{this.renderContent()}
					</View>
					<View style={styles.menuContainer}>
						<Menu items={this.menuItems}/>
					</View>
				</View>
			)
		}
	}
}

const styles = {
	container: {
		flex: 1,
		marginTop: 30
	},
	contentContainer: {
		flex: 1
	},
	menuContainer: {
		backgroundColor: '#000'
	}
};

const mapStateToProps = ({ menu }) => {
	return {
		activeItem: menu.activeItem
	}
};

export default Main = connect(mapStateToProps)(_Main);
