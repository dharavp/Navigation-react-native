/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import app from './src/app';
import HomeScreen from './src/HomeScreen';
import SecondScreen from './src/SecondScreen';
import FirstNavWithArgs from './src/NavWithArgs/FirstNavWithArgs';
import SecondNavWithArgs from './src/NavWithArgs/SecondNavWithArgs';
import TabNavigatorWrappingScreen from './src/TabNavigation/TabNavigatorWrappingScreen';
import MaterialTabNav from './src/TabNavigation/MaterialTabNav';
import App from './src/NavDraw/NavDrawWrapping';

 const SimpleApp = StackNavigator({
  App: { screen: app },
  Home: { screen: HomeScreen },
  SecondScreen: { screen: SecondScreen },
  ArgsFirstScreen: { screen: FirstNavWithArgs },
  ArgsSecondScreen: { screen: SecondNavWithArgs },
  TabNavigation: { screen: TabNavigatorWrappingScreen, navigationOptions: { title: 'Tab Navigation' } },
  MaterialTabNav: { screen: MaterialTabNav, navigationOptions: { title: 'Material Tab Navigation' } },
  NavDraw: { screen: App }
}
);

AppRegistry.registerComponent('reactNavigationExample', () => SimpleApp);
