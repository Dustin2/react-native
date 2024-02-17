import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
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
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
          addCounter();
        }}>
        <Text style={styles.text}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
          minusCounter();
        }}>
        <Text style={styles.text}> -1 </Text>
      </TouchableOpacity>
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
    // marginTop: -20,
  },
  buttons: {
    backgroundColor: 'gray',
    borderRadius: 40,
    margin: 2,
    padding: 6,
  },
});
