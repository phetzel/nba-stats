import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Splash from './app/screens/Splash';
import Teams from './app/screens/Teams';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
