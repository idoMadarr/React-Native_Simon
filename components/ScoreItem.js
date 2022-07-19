import {View, Text} from 'react-native';
import React from 'react';

const ScoreItem = ({username, score}) => {
  return (
    <View>
      <Text style={{color: 'white'}}>
        {username} {score}
      </Text>
    </View>
  );
};

export default ScoreItem;
