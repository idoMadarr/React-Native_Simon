import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

const squareSize = Dimensions.get('window').width / 2;
const pressSize = Dimensions.get('window').width / 3;

const Square = ({color, init, createSequence, onSquare, sequenceState}) => {
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
      onPress={init ? createSequence : onSquare}
      activeOpacity={init ? 0.8 : 0.6}
      style={
        init
          ? styles.pressButton
          : [styles.squareItem, {backgroundColor: active ? 'white' : color}]
      }>
      {init && <Text style={styles.startTitle}>Start!</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  squareItem: {
    width: squareSize,
    height: squareSize,
  },
  pressButton: {
    position: 'absolute',
    width: pressSize,
    height: pressSize,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  startTitle: {
    fontSize: 28,
    color: 'white',
  },
});

export default Square;
