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
import {tapEffect} from '../utils/sounds';
import {
  setSequence,
  clearSequence,
  setMessage,
  setResult,
} from '../store/slice';
import Square from '../components/Square';
import Overlay from '../components/Overlay';
import {colors} from '../assets/colors';
import {colorsList} from '../fixtures/colorsList.json';

const pressSize = Dimensions.get('window').width / 3;

const GameScreen = ({navigation}) => {
  const currentSequence = useSelector(
    state => state.mainSlice.currentSequence || [],
  );
  const [rounds, setRounds] = useState(2);
  const [tester, setTester] = useState(0);
  const [score, setScore] = useState(0);
  const [initGame, setInitGame] = useState(false);
  const [userMode, setUserMode] = useState(true);
  const dispatch = useDispatch();
  const scaleRef = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    tapEffect();
    if (rounds === tester) return onLastRound();
  }, [tester]);

  const createSequence = sequenceLength => {
    setInitGame(true);
    setUserMode(false);
    animateButton(1.4, 250);
    for (let i = 1; i < sequenceLength + 1; i++) {
      setTimeout(() => {
        const random = parseInt(Math.random() * 4);
        dispatch(setSequence(colorsList[random].color));
        if (i === rounds) {
          setUserMode(true);
        }
      }, 1000 * i);
    }
  };

  const onLastRound = () => {
    const message = {
      header: 'Great!',
      content: 'You are going to the next level!',
      isSuccess: true,
      onPress: createSequence.bind(this, rounds + 1),
    };
    configureNext(message, rounds + 1);
  };

  const configureNext = (message, rounds) => {
    dispatch(setMessage(message));
    setRounds(rounds);
    setTester(0);
    dispatch(clearSequence());
    animateButton(1, 250);
  };

  const animateButton = (value, duration) => {
    Animated.timing(scaleRef, {
      toValue: value,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const checkUserColor = color => {
    tapEffect();
    if (color === currentSequence[tester]) return onSuccess();
    onFalied();
  };

  const onSuccess = () => {
    setScore(score + 1);
    return setTester(tester + 1);
  };

  const onFalied = () => {
    const message = {
      header: 'Ops!',
      content: 'It seems like you miss one step ; )',
      isSuccess: false,
      onPress: onSave,
    };
    animateButton(1, 250);
    configureNext(message, 2);
  };

  const onSave = username => {
    const result = {username, score: score};
    setScore(0);
    setInitGame(false);
    dispatch(setResult(result));
    navigation.navigate('dashboard-screen');
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.dark} />
      <View style={styles.squareContainer}>
        {colorsList.map(({color}) => (
          <Square
            key={color}
            color={color}
            userMode={userMode}
            initGame={initGame}
            sequenceState={currentSequence}
            checkUserColor={checkUserColor.bind(this, color)}
          />
        ))}
        <Animated.View
          style={[
            styles.startbutton,
            {
              transform: [{scale: scaleRef}],
            },
          ]}>
          <Pressable
            onPress={!initGame ? createSequence.bind(this, 2) : null}
            style={styles.pressable}>
            <Text style={styles.startTitle}>Start!</Text>
          </Pressable>
        </Animated.View>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>Score: {score}</Text>
      </View>
      {!userMode && <Overlay />}
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
    zIndex: 50,
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
    zIndex: 80,
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
  scoreContainer: {
    marginVertical: 32,
  },
  score: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
  },
});

export default GameScreen;
