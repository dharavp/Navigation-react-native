import React from 'react';
import { View, Text, Keyboard } from 'react-native';


class SecondNavWithArgs extends React.Component {
 
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
  });
  componentWillMount() {
      Keyboard.dismiss();
 }
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>You have Entered {params.user}.</Text>
      </View>
    );
  }
}
export default SecondNavWithArgs;
