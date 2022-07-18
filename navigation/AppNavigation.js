import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';

const AppNavigation = () => {
  const MainNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{headerShown: false}}>
        <MainNavigator.Screen name={'menu-bar'} component={TabNavigation} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
