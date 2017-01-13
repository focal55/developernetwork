import React from 'react';
import { View } from 'react-native';

export const CardSection = (props) => (
  <View style={[styles.container, props.style]}>
    { props.children }
  </View>
);

const styles = {
  container: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
