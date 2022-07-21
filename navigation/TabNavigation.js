import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GameScreen from '../screens/GameScreen';
import DashboardScreen from '../screens/DashboardScreen';
import {colors} from '../assets/colors';

const TabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      screenOptions={{
        tabBarLabelStyle: {color: colors.white, fontSize: 16},
        tabBarStyle: {
          backgroundColor: colors.dark,
          height: 80,
          justifyContent: 'center',
        },
        tabBarIndicatorStyle: {position: 'absolute', top: 0},
      }}>
      <Tab.Screen
        name={'game-screen'}
        component={GameScreen}
        options={{title: 'Game'}}
      />
      <Tab.Screen
        name={'dashboard-screen'}
        component={DashboardScreen}
        options={{title: 'Results'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
