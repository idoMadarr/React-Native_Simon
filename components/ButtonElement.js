import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const ButtonElement = ({title, onPress, background, titleColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {backgroundColor: background, borderWidth: 1, borderColor: colors.dark},
      ]}
      activeOpacity={0.6}>
      <Text style={{color: titleColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default ButtonElement;
