import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GameScreen from '../screens/GameScreen';
import DashboardScreen from '../screens/DashboardScreen';

const TabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      screenOptions={{
        tabBarIndicatorStyle: {position: 'absolute', top: 0},
      }}>
      <Tab.Screen name={'game-screen'} component={GameScreen} />
      <Tab.Screen name={'dashboard-screen'} component={DashboardScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
