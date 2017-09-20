import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
 
export default class MaterialTabNav extends Component {
  state = {
    selectedTab: 0
  }
 
  setTab(tab) {
    this.setState({ selectedTab: tab });
  }
 
  render() {
    return (
      <View style={styles.container}>
        <MaterialTabs 
          items={['ONE', 'TWO']}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab.bind(this)}
          barColor="#1fbcd2"
          indicatorColor="#fffe94"
          activeTextColor="white"
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
