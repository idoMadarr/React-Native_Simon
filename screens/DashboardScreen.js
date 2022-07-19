import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ScoreItem from '../components/ScoreItem';
import {colors} from '../assets/colors';

const DashboardScreen = () => {
  const results = useSelector(state => state.mainSlice.results);
  console.log(results);
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text>Dashboard Screen</Text>
      </View>
      <FlatList
        data={results}
        keyExtractor={_itemData => Math.random().toString()}
        renderItem={({item}) => (
          <ScoreItem username={item.username} score={item.score} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  header: {},
});

export default DashboardScreen;
