import React from 'react';
import { View } from 'react-native';

export const Card = (props) => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eee',
    //borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2
  }
};

export default Card;
