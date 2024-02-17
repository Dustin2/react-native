import {View, Text} from 'react-native';
import React from 'react';

const HelloWordScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 40,
          color: 'white',
          textAlign: 'center',
        }}>
        App
      </Text>
    </View>
  );
};

export default HelloWordScreen;
