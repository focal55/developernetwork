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
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#3C5193',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3C5193',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  }
};
