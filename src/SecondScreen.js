import React from 'react';
import { View, Text } from 'react-native';


class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Stack Navigation Second Screen',
  };
  render() {
    return (
      <View>
        <Text style={{ margin: 10, color: 'orange', fontWeight: '600' }}>
        Stack Navigation Second Screen
        </Text>
      </View>
    );
  }
}

export default SecondScreen;
