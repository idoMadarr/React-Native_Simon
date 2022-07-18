import React, {useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Square from '../components/Square';

const GameScreen = () => {
  const [sequenceState, setSequenceState] = useState([]);
  const [rounds, setRounds] = useState(3);
  const [tester, setTester] = useState(0);

  const colors = [
    {
      color: 'red',
      activeColor: '',
    },
    {
      color: 'yellow',
      activeColor: '',
    },
    {
      color: 'blue',
      activeColor: '',
    },
    {
      color: 'green',
      activeColor: '',
    },
    {
      color: 'black',
      init: true,
    },
  ];

  const createSequence = () => {
    for (let i = 0; i < rounds; i++) {
      setTimeout(() => {
        const random = parseInt(Math.random() * 4);
        setSequenceState(prevState => prevState.concat(colors[random].color));
      }, 750 * i);
    }
  };

  const onSquare = color => {
    if (color === sequenceState[tester]) {
      setTester(tester + 1);
      return console.log('right');
    } else {
      console.log('worng');
    }
  };

  console.log(sequenceState);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.squareContainer}>
        {colors.map(({color, init}) => (
          <Square
            key={color}
            color={color}
            sequenceState={sequenceState}
            init={init}
            createSequence={createSequence}
            onSquare={onSquare.bind(this, color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  squareContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameScreen;
