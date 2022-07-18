import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  StatusBar,
  Pressable,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setSequence, clearSequence, setMessage} from '../store/slice';
import Square from '../components/Square';
import {colors} from '../assets/colors';
import {colorsList} from '../fixtures/colorsList.json';

const pressSize = Dimensions.get('window').width / 3;

const GameScreen = ({navigation}) => {
  const {currentSequence} = useSelector(state => state.mainSlice);
  const dispatch = useDispatch();

  const [rounds, setRounds] = useState(2);
  const [tester, setTester] = useState(0);

  const scaleRef = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (rounds === tester) return onLastRound();
  }, [tester]);

  const createSequence = () => {
    animateButton(1.4, 250);
    for (let i = 0; i < rounds; i++) {
      setTimeout(() => {
        const random = parseInt(Math.random() * 4);
        dispatch(setSequence(colorsList[random].color));
      }, 750 * i);
    }
  };

  const onLastRound = () => {
    const message = {
      header: 'Yay!',
      content: 'You are going to the next level!',
      onPress: animateButton.bind(this, 1, 250),
    };
    dispatch(setMessage(message));
    setRounds(rounds + 1);
    setTester(0);
    dispatch(clearSequence());
  };

  const animateButton = (value, duration) => {
    Animated.timing(scaleRef, {
      toValue: value,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const onSquare = color => {
    if (color === currentSequence[tester]) {
      setTester(tester + 1);
      return console.log('right');
    } else {
      const message = {
        header: 'Ops!',
        content: 'It seems like you miss one step ; )',
        onPress: () => navigation.navigate('dashboard-screen'),
      };
      dispatch(setMessage(message));
      setRounds(2);
      setTester(0);
      dispatch(clearSequence());
      animateButton(1, 250);
    }
  };

  console.log(rounds, tester, rounds === tester);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.dark} />
      <View style={styles.squareContainer}>
        {colorsList.map(({color}) => (
          <Square
            key={color}
            color={color}
            sequenceState={currentSequence}
            createSequence={createSequence}
            onSquare={onSquare.bind(this, color)}
          />
        ))}
        <Animated.View
          style={[styles.startbutton, {transform: [{scale: scaleRef}]}]}>
          <Pressable onPress={createSequence} style={styles.pressable}>
            <Text style={styles.startTitle}>Start!</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  squareContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startbutton: {
    position: 'absolute',
    width: pressSize,
    height: pressSize,
    backgroundColor: colors.black,
    borderRadius: 100,
    alignItems: 'center',
    borderWidth: 20,
    borderColor: colors.dark,
    justifyContent: 'center',
  },
  pressable: {
    height: '60%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startTitle: {
    fontSize: 22,
    color: 'white',
  },
});

export default GameScreen;
