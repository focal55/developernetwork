import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FacebookButton = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}>
        <Text style={styles.text}>
          <Icon style={styles.facebookIcon} name='facebook' />
          <Text>Sign in with Facebook</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = {
  container: {
    padding: 5,
    backgroundColor: '#3C5193',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#3C5193',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  },
  facebookIcon: {
    marginRight: 15,
		fontSize: 24,
  },
  text: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 50,
  }
};
