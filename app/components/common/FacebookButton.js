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
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    marginTop: 40
  },
  button: {
    backgroundColor: '#3C5193',
    borderRadius: 15,
    marginLeft: 5,
    marginRight: 5
  },
  facebookIcon: {
    padding: 15,
		fontSize: 24,
  },
  text: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '300',
    padding: 25
  }
};
