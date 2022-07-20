import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const AppHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>* Simon App *</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    backgroundColor: colors.dark,
  },
  headerTitle: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.white,
  },
});

export default AppHeader;
