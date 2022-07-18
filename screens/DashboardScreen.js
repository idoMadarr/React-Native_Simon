import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const DashboardScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>DashboardScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});

export default DashboardScreen;
