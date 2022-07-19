import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {colors} from '../assets/colors';

const squareSize = Dimensions.get('window').width / 2;

const Square = ({color, checkUserColor, sequenceState}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (sequenceState[sequenceState.length - 1] === color) setActive(true);
  }, [sequenceState]);

  useEffect(() => {
    setTimeout(() => setActive(false), 300);
  }, [active]);

  return (
    <TouchableOpacity
      key={color}
      onPress={checkUserColor}
      activeOpacity={0.6}
      style={[styles.squareItem, {backgroundColor: active ? 'white' : color}]}
    />
  );
};

const styles = StyleSheet.create({
  squareItem: {
    width: squareSize,
    height: squareSize,
    borderWidth: 8,
    borderColor: colors.dark,
    borderRadius: 50,
  },
});

export default Square;
