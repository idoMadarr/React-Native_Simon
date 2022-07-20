import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {colors} from '../assets/colors';
import Animated, {SlideInLeft, SlideOutRight} from 'react-native-reanimated';

const Overlay = () => {
  return (
    <Animated.View entering={SlideInLeft} exiting={SlideOutRight.delay(500)}>
      <View style={styles.textContainer}>
        <Text style={styles.overlayText}>Please Wait...</Text>
        <ActivityIndicator size={'small'} color={colors.black} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    backgroundColor: colors.greyish,
    padding: 10,
  },
  overlayText: {
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
  },
});

export default Overlay;
