import { DrawerNavigator } from 'react-navigation';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import TabNavigationFirstScreen from '../TabNavigation/TabNavigationFirstScreen';
import TabNavigationSecondScreen from '../TabNavigation/TabNavigationSecondScreen';
import { Button } from '../components/common';


const NavDrawWrapping = DrawerNavigator({
  First: { screen: TabNavigationFirstScreen },
  Second: { screen: TabNavigationSecondScreen },
}, {
  drawerWidth: 200,
  drawerPosition: 'left'
});
const DrawerButton = (props) => {
	return (
    <View>
      <TouchableOpacity onPress={() => { props.navigation.navigate('DrawerOpen'); }}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
NavDrawWrapping.navigationOptions = ({ navigation }) => ({
  title: 'Nav Drawer',
    //  headerLeft: <DrawerButton navigation={navigation} />
    //  headerLeft: <Button onPress={() => navigation.navigate('DrawerOpen')} />
  headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}><Image 
  style={{ margin: 15, padding: 2 }} 
  source={require('./menu.png')} />
  </TouchableOpacity>
});

export default NavDrawWrapping;
