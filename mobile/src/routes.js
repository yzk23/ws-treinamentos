import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Training from './pages/Training';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="Training" component={Training} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;