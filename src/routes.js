import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import Feed from './pages/Feed';
import logo from './assets/instagram.png';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerTitle: <Image source={logo} />,
        headerTitleAlign: 'center',
      }}>
      <Screen name="Feed" component={Feed} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
