import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Teams from '../screens/Teams';

const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator  
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Teams" component={Teams} />
  </Stack.Navigator>
);

export default AppNavigator;