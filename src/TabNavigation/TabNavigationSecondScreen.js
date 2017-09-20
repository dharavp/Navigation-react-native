import React, { Component } from 'react';
import FirstNavWithArgs from '../NavWithArgs/FirstNavWithArgs';

class TabNavigationSecondScreen extends Component {
  render() {
    return <FirstNavWithArgs navigation={this.props.navigation} />;
  }
}
export default TabNavigationSecondScreen;
