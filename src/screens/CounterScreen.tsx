import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Fab} from '../components/Fab';

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

      <Fab text="-1" position="left" onPress={() => minusCounter()} />
      <Fab text="+1" position="rigth" onPress={() => addCounter()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    top: -15,
  },

 
});
