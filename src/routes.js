import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Feed from './pages/Feed';
const { Navigator, Screen } = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Feed" component={Feed} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
