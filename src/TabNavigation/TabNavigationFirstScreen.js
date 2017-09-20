import React, { Component } from 'react';
import HomeScreen from '../HomeScreen';

class TabNavigationFirstScreen extends Component {
  render() {
    return <HomeScreen navigation={this.props.navigation} />;
  }
}

export default TabNavigationFirstScreen;
