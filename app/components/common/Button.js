import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export const Button = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}>
        <Text style={styles.text}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = {
  container: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 10,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  }
};
