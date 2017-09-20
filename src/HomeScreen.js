import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button, Card, CardSection } from './components/common';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Stack Navigation',
  };
  render() {
 const { navigate } = this.props.navigation;
      return (
      <View>
        <Text style={{ margin: 10, color: 'orange', fontWeight: '600' }}>
          Hello, Stack Navigation App</Text>
          <Card>
          <CardSection>
        <Button onPress={() => navigate('SecondScreen')}>
        Click...!!
        </Button>
        </CardSection>
        </Card>
      </View>
    );
  }
}

export default HomeScreen;
