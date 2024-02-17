import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const minusCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>counter:{counter}</Text>
      <Button
        title="
      +1"
        onPress={() => {
          addCounter();
        }}
      />
      <Button
        title="-1"
        onPress={() => {
          minusCounter();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginTop: -20,
  },
});
