import React from 'react';
import { Button, Card, CardSection, Input } from '../components/common';

class FirstNavWithArgs extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Stack Navigation',
  };

  state = { name: '' };

  render() {
 const { navigate } = this.props.navigation;
 return (
        <Card>
      <CardSection>
      <Input 
  placeholder="Enter Your Name" label="Name"
  value={this.state.name} onChangeText={name => this.setState({ name })} />
      </CardSection>

      <CardSection>
      <Button onPress={() => navigate('ArgsSecondScreen', { user: this.state.name })}> Next
      </Button>
      </CardSection>
      </Card>

    );
  }
}

export default FirstNavWithArgs;
