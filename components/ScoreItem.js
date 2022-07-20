import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../assets/colors';

const ScoreItem = ({username, score}) => {
  return (
    <View style={style.itemContainer}>
      <Text style={style.item}>{username}</Text>
      <Text style={style.item}>{score} P</Text>
    </View>
  );
};

const style = StyleSheet.create({
  itemContainer: {
    padding: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    fontSize: 16,
    color: colors.white,
  },
});

export default ScoreItem;
