import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ScoreItem from '../components/ScoreItem';
import {colors} from '../assets/colors';

const DashboardScreen = () => {
  const results = useSelector(state => state.mainSlice.results);

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>The Best Results</Text>
      </View>
      <FlatList
        data={results.slice(0, 10)}
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
  titleContainer: {
    marginHorizontal: 16,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
});

export default DashboardScreen;
