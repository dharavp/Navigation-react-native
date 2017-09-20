import { TabNavigator } from 'react-navigation';
import TabNavigationFirstScreen from './TabNavigationFirstScreen';
import TabNavigationSecondScreen from './TabNavigationSecondScreen';

const TabNavigatorWrappingScreen = TabNavigator({
  First: { screen: TabNavigationFirstScreen },
  Second: { screen: TabNavigationSecondScreen },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {

  upperCaseLabel: false,
  activeTintColor: 'orange',
    labelStyle: {
    fontSize: 18
  },
  indicatorStyle: {
    backgroundColor: 'green',
    height: 3
  },
  style: {
    backgroundColor: '#007aff',
  },
} });

export default TabNavigatorWrappingScreen;
