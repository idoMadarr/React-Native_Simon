import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const squareSize = Dimensions.get('window').width / 2;

const Square = ({color, checkUserColor, sequenceState, userMode, initGame}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (sequenceState[sequenceState.length - 1] === color) {
      setActive(true);
      setTimeout(() => setActive(false), 300);
    }
  }, [sequenceState]);

  const PadElement = !initGame ? View : userMode ? TouchableOpacity : View;

  return (
    <PadElement
      key={color}
      onPress={checkUserColor}
      activeOpacity={0.6}
      style={[styles.squareItem, {backgroundColor: active ? 'white' : color}]}
    />
  );
};

const styles = StyleSheet.create({
  squareItem: {
    zIndex: 80,
    width: squareSize,
    height: squareSize,
    borderWidth: 8,
    borderColor: colors.dark,
    borderRadius: 50,
  },
});

export default Square;
