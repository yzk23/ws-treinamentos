import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Training from './pages/Training';
import ListOfTrainings from './pages/ListOfTrainings';
import Quiz from './pages/Quiz';
import Congratulations from './pages/Congratulations';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="Training" component={Training} />
        <AppStack.Screen name="ListOfTrainings" component={ListOfTrainings} />
        <AppStack.Screen name="Quiz" component={Quiz} />
        <AppStack.Screen name="Congratulations" component={Congratulations} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;